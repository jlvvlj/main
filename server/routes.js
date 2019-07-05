const express = require('express');
const helmet = require('helmet');
const enforce = require('express-sslify');
const fs = require('fs');
const util = require('util');
const dayjs = require('dayjs');
const punycode = require('punycode');

const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
const cheerio = require('cheerio');

const { getProject, getTeam, getUser, getCollection, getZine } = require('./api');
const initWebpack = require('./webpack');
const constants = require('./constants');
const { defaultProjectDescriptionPattern } = require('../shared/regex');

const DEFAULT_USER_DESCRIPTION = (login, name) => `See what ${name} (@${login}) is up to on Glitch, the ${constants.tagline} `;
const DEFAULT_TEAM_DESCRIPTION = (login, name) => `See what Team ${name} (@${login}) is up to on Glitch, the ${constants.tagline} `;
const DEFAULT_PROJECT_DESCRIPTION = (domain) => `Check out ~${domain} on Glitch, the ${constants.tagline}`;

module.exports = function(external) {
  const app = express.Router();

  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  // CORS - Allow pages from any domain to make requests to our API
  app.use(function(request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // security headers added by jenn to get mozilla observatory score up
    response.header('X-XSS-Protection', '1; mode=block');
    response.header('X-Content-Type-Options', 'nosniff');
    response.header('Strict-Transport-Security', 'max-age=15768000');
    return next();
  });

  initWebpack(app);
  const buildTime = dayjs();

  const ms = dayjs.convert(7, 'days', 'miliseconds');
  app.use(express.static('public', { index: false }));
  app.use(express.static('build', { index: false, maxAge: ms }));

  const readFilePromise = util.promisify(fs.readFile);
  const imageDefault = 'https://cdn.gomix.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fsocial-card%402x.png';

  async function render(res, title, description, image = imageDefault) {
    let built = true;

    const zine = (await getZine()) || [];
    let scripts = [];
    let styles = [];

    try {
      const stats = JSON.parse(await readFilePromise('build/stats.json'));
      stats.entrypoints.styles.assets.forEach((file) => {
        if (file.match(/\.css(\?|$)/)) {
          styles.push(`${stats.publicPath}${file}`);
        }
      });
      stats.entrypoints.client.assets.forEach((file) => {
        if (file.match(/\.js(\?|$)/)) {
          scripts.push(`${stats.publicPath}${file}`);
        }
        if (file.match(/\.css(\?|$)/)) {
          styles.push(`${stats.publicPath}${file}`);
        }
      });
    } catch (error) {
      console.error("Failed to load webpack stats file. Unless you see a webpack error here, the initial build probably just isn't ready yet.");
      built = false;
    }

    res.render('index.ejs', {
      title,
      description,
      image,
      scripts,
      styles,
      BUILD_COMPLETE: built,
      BUILD_TIMESTAMP: buildTime.toISOString(),
      EXTERNAL_ROUTES: JSON.stringify(external),
      ZINE_POSTS: JSON.stringify(zine),
      PROJECT_DOMAIN: process.env.PROJECT_DOMAIN,
      ENVIRONMENT: process.env.NODE_ENV || 'dev',
      CONSTANTS: constants,
      RUNNING_ON: process.env.RUNNING_ON,
    });
  }

  const { CDN_URL } = constants.current;

  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        baseUri: ["'self'"],
        reportUri: 'https://csp-reporting-server.glitch.me/report',
      },
    }),
  );

  app.use(function(req, res, next) {
    res.header('Cache-Control', 'public, max-age=1');
    return next();
  });

  app.get('/~:domain', async (req, res) => {
    const { domain } = req.params;
    const project = await getProject(punycode.toASCII(domain));
    if (!project) {
      await render(res, domain, `We couldn't find ~${domain}`);
      return;
    }
    const avatar = `${CDN_URL}/project-avatar/${project.id}.png`;

    const helloTemplateDescriptions = new Set([
      'Your very own basic web page, ready for you to customize.',
      'A simple Node app built on Express, instantly up and running.',
      'A simple Node app with a SQLite database to hold app data.',
    ]);

    const usesDefaultDescription = helloTemplateDescriptions.has(project.description) || project.description.match(defaultProjectDescriptionPattern);

    let description;
    if (usesDefaultDescription || !project.description) {
      description = DEFAULT_PROJECT_DESCRIPTION(domain);
    } else {
      const textDescription = cheerio.load(md.render(project.description)).text();
      description = `${textDescription} 🎏 Glitch is the ${constants.tagline}`;
    }

    await render(res, domain, description, avatar);
  });

  app.get('/@:name', async (req, res) => {
    const { name } = req.params;
    const team = await getTeam(name);
    if (team) {
      // detect if team uses default description "an adjectivy team that does adjectivy things"
      // if so, don't include it
      const hasMaybeUpdatedDescription = team.createdAt !== team.updatedAt;
      let description = DEFAULT_TEAM_DESCRIPTION(team.url, team.name);

      if (team.description && hasMaybeUpdatedDescription) {
        description += cheerio.load(md.render(team.description)).text();
      }

      const args = [res, team.name, description];

      if (team.hasAvatarImage) {
        args.push(`${CDN_URL}/team-avatar/${team.id}/large`);
      } else {
        // default team avatar (need to use PNG version, social cards don't support SVG)
        args.push(`${CDN_URL}/76c73a5d-d54e-4c11-9161-ddec02bd7c67%2Fteam-avatar.png?1558031923766`);
      }

      await render(...args);
      return;
    }
    const user = await getUser(name);
    if (user) {
      const description = DEFAULT_USER_DESCRIPTION(user.login, user.name) + cheerio.load(md.render(user.description)).text();

      await render(
        res,
        user.name || `@${user.login}`,
        description,
        user.avatarThumbnailUrl || `${CDN_URL}/76c73a5d-d54e-4c11-9161-ddec02bd7c67%2Fanon-user-avatar.png?1558646496932`,
      );
      return;
    }
    await render(res, `@${name}`, `We couldn't find @${name}`);
  });

  app.get('/@:name/:collection', async (req, res) => {
    const { name, collection } = req.params;
    const collectionObj = await getCollection(name, collection);
    const author = name;

    if (collectionObj) {
      let { name, description } = collectionObj;
      description = description ? cheerio.load(md.render(description)).text() : '';
      description = description.trimEnd(); // trim trailing whitespace from description
      description += ` 🎏 A collection of apps by @${author}`;
      description = description.trimStart(); // if there was no description, trim space before the fish

      await render(res, name, description);
      return;
    }
    await render(res, collection, `We couldn't find @${name}/${collection}`);
  });

  app.get('/auth/:domain', async (req, res) => {
    const { domain } = req.params;

    res.render('api-auth.ejs', {
      domain: domain,
      CONSTANTS: constants,
      RUNNING_ON: process.env.RUNNING_ON,
    });
  });

  app.get('*', async (req, res) => {
    await render(res, 'Glitch', `The ${constants.tagline}`);
  });

  return app;
};
