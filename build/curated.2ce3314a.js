(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["curated"],{

/***/ "./src/curated/categories.js":
/*!***********************************!*\
  !*** ./src/curated/categories.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Copied from https://api.glitch.com/categories/
// Categories won't be around forever...
/* harmony default export */ __webpack_exports__["default"] = ([{id:4,name:'Hello Worlds',url:'hello-worlds',avatarUrl:'https://cdn.glitch.com/us-east-1%3Acba180f4-ee65-4dfc-8dd5-f143280d3c10%2Fcomputer.svg',color:'#FCF3AF',description:'Experiment with technologies and libraries by remixing these sample projects.',backgroundColor:'rgba(252, 243, 174, 0.3)'},{id:5,name:'Games',url:'games',avatarUrl:'https://cdn.glitch.com/6ce807b5-7214-49d7-aadd-f11803bc35fd%2Ftetris.svg',color:'#FBA058',description:'Make your own cool games. Get that idea out of your head and into the world.',backgroundColor:'rgba(251, 159, 88, 0.3)'},{id:6,name:'Building Blocks',url:'building-blocks',avatarUrl:'https://cdn.glitch.com/0a15009e-17ee-4915-bc29-5ba03bb09517%2Fshapes.svg',color:'#31cdd4',description:'Databases, emailing and more. The bread and butter basics of modern web dev.',backgroundColor:'rgba(49, 204, 212, 0.3)'},{id:7,name:'Learn to Code',url:'learn-to-code',avatarUrl:'https://cdn.glitch.com/us-east-1%3Acba180f4-ee65-4dfc-8dd5-f143280d3c10%2Feducation.svg',color:'#FFD1C6',description:'Learn by doing, then breaking, then doing some more. You got this!',backgroundColor:'rgba(255, 209, 198, 0.3)'},{id:8,name:'Tools for Work',url:'tools-for-work',avatarUrl:'https://cdn.glitch.com/0a15009e-17ee-4915-bc29-5ba03bb09517%2Fcoffee.svg',color:'#70a4d8',description:'Every business is a snowflake. Build and customize your own tools and integrations.',backgroundColor:'rgba(112, 164, 216, 0.3)'},{id:9,name:'Community Picks',url:'community-picks',avatarUrl:'https://cdn.glitch.com/us-east-1%3Acba180f4-ee65-4dfc-8dd5-f143280d3c10%2Fdiamond.svg',color:'#9DE0FC',description:'Community submissions that do the flyest things ✨',backgroundColor:'rgba(156, 224, 252, 0.3)'},{id:10,name:'Handy Bots',url:'handy-bots',avatarUrl:'https://cdn.glitch.com/6ce807b5-7214-49d7-aadd-f11803bc35fd%2Frobot.svg',color:'#C9BFF4',description:'Build helpful tools, meme generators, or Westworld. Your bots have your back.',backgroundColor:'rgba(201, 191, 244, 0.3)'},{id:11,name:'Hardware',url:'hardware',avatarUrl:'https://cdn.glitch.com/6ce807b5-7214-49d7-aadd-f11803bc35fd%2Fhardware.svg',color:'rgb(48, 220, 166)',description:'Connect your gadgets and gizmos to the world – or your kitchen.',backgroundColor:'rgba(48, 220, 166, 0.3)'},{id:12,name:'Art',url:'art',avatarUrl:'https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fart.svg?1499357014248',color:'#FFA3BB',description:'Weird, fun masterpieces from talented artists, and the tools to create your own.',backgroundColor:'rgba(255, 164, 187, 0.5)'},{id:13,name:'Music',url:'music',avatarUrl:'https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fmusic.svg?1502555440002',color:'#a3c4fd',description:'The sounds of music created, connected, visualized and remixed.',backgroundColor:'rgba(162, 193, 255, 0.5)'}]);

/***/ }),

/***/ "./src/curated/collections.js":
/*!************************************!*\
  !*** ./src/curated/collections.js ***!
  \************************************/
/*! exports provided: featuredCollections, moreIdeasTeam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featuredCollections", function() { return featuredCollections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreIdeasTeam", function() { return moreIdeasTeam; });
// Collections shown on the homepage and in the more ideas area
// What collections to show in the expanded area on the homepage
var featuredCollections=[{owner:'glitch',name:'glitch-this-week-july-3-2019'},{owner:'glitch',name:'css-magic'},{owner:'glitch',name:'enlightening-games'}];// More ideas is populated from this team
var moreIdeasTeam='glitch';

/***/ }),

/***/ "./src/curated/featured-embed.js":
/*!***************************************!*\
  !*** ./src/curated/featured-embed.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var body='<p>90,000 developers shared their opinions about jobs, tech, and where the industry\'s going.</p><p>Remix our app to explore the data and discover your own insights.</p>';// make sure image urls use https
/* harmony default export */ __webpack_exports__["default"] = ({image:'https://culture-zine.glitch.me/culture/content/images/2019/05/stackFullDevSurveyBanner.png',mask:'mask-4',title:'Explore Stack Overflow Dev Survey Results',appDomain:'2019-stackoverflow-public-data',blogUrl:'/discover-insights-explore-developer-survey-results-2019/',body:body,color:'#f5f5f5'});

/***/ }),

/***/ "./src/curated/featured.js":
/*!*********************************!*\
  !*** ./src/curated/featured.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
Example:
{
  // Required fields:
  title: 'Make a Mash-up Comic',
  img: "https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2FWebcomicNameFeature.png?1517409070264",

  // Optional fields:
  link: 'https://webcomicname-mashup.glitch.me' // if absent, tile won't be a link.
  imgTitle:  ''  // 'title' attribute on the <img>, which displays text on hover.
},
*/ // make sure image urls use https
/* harmony default export */ __webpack_exports__["default"] = ([{title:'Make a Sign Bunny',img:'https://cdn.glitch.com/02863ac1-a499-4a41-ac9c-41792950000f%2F2bdfb3f8-05ef-4035-a06e-2043962a3a13_sign-bunny.png?v=1555700799553',link:'https://glitch.com/~sign-bunny'},{title:'I\'d Totally Eat That',img:'https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Ffood-hype.jpg?v=1540206366423',link:'https://glitch.com/~food-hype'},{title:'Tidy Up Your Timeline',img:'https://cdn.glitch.com/02863ac1-a499-4a41-ac9c-41792950000f%2Fglitchsurudenise8.png?v=1547468106128',link:'https://glitch.com/~twitter-archive-deleter'}]);

/***/ }),

/***/ "./src/curated/new-stuff-log.js":
/*!**************************************!*\
  !*** ./src/curated/new-stuff-log.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 🐈
// prepend new updates
// make sure image urls use https
/* harmony default export */ __webpack_exports__["default"] = ([{id:1,title:'Featured projects now live on your profile',body:"Have a project you're particularly proud of?  Feature it to embed the app directly at the top of your profile.\n\nYou can feature one project at a time -- and change or remove your featured project as often as you'd like.\n![](https://cdn.glitch.com/1b4c205a-e6b6-4ad9-ae8a-1e511e611105%2Ffeature.png?1548796979652)\n"},{id:2,title:'Use your email to get Glitchy',body:"\nDon't have Facebook or GitHub, but still want to use Glitch? Want to code at the library without remembering all your logins?\n\nNow you can sign into Glitch with just your email. Choose Sign in with Email to get a magic link and temporary sign-in code made just for you and delivered straight to your inbox.  \n![](https://cdn.glitch.com/69bf2d27-a029-4632-86a4-a722974778ae%2Femail-sign-in.gif?1548196863943)\n"},{id:3,title:'Get organized with Collections',body:"\nAdd any project to a collection and show off your favorite things, group all your related projects, collect precious memories, etc. \n\nHead over to your profile or team page to create and view your collections.\n\n![](https://cdn.glitch.com/e9551d04-9c48-4dbb-ab1b-04eca25b9652%2Fimage.png?1547136745894)\n"}]);

/***/ }),

/***/ "./src/curated/sample-analytics.js":
/*!*****************************************!*\
  !*** ./src/curated/sample-analytics.js ***!
  \*****************************************/
/*! exports provided: sampleAnalyticsTime, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sampleAnalyticsTime", function() { return sampleAnalyticsTime; });
// This is shown when a team has no projects
// It should match the format of https://api.glitch.com/analytics/:id/team
// When this data was retrieved
var sampleAnalyticsTime=1539360209161;/* harmony default export */ __webpack_exports__["default"] = ({buckets:[{'@timestamp':1538280001000,analytics:{visits:44497,requests:44497,remixes:0}},{'@timestamp':1538366401000,analytics:{visits:52185,requests:52185,remixes:4}},{'@timestamp':1538452801000,analytics:{visits:54217,requests:54217,remixes:0}},{'@timestamp':1538539201000,analytics:{visits:56978,requests:56978,remixes:4}},{'@timestamp':1538625601000,analytics:{visits:56922,requests:56922,remixes:8}},{'@timestamp':1538712001000,analytics:{visits:52475,requests:52475,remixes:12}},{'@timestamp':1538798401000,analytics:{visits:47812,requests:47812,remixes:2}},{'@timestamp':1538884801000,analytics:{visits:45075,requests:45075,remixes:4}},{'@timestamp':1538971201000,analytics:{visits:49986,requests:49986,remixes:5}},{'@timestamp':1539057601000,analytics:{visits:52958,requests:52958,remixes:2}},{'@timestamp':1539144001000,analytics:{visits:51098,requests:51098,remixes:4}},{'@timestamp':1539230401000,analytics:{visits:51437,requests:51437,remixes:2}},{'@timestamp':1539316801000,analytics:{visits:22920,requests:22920,remixes:0}}],referrers:[{domain:'glitch.com',visits:265013,requests:265013},{domain:'www.google.com',visits:8510,requests:8510}],remixReferrers:[{domain:'glitch.com',remixes:3}],remixers:[]});

/***/ }),

/***/ "./src/curated/starter-kits.js":
/*!*************************************!*\
  !*** ./src/curated/starter-kits.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{id:1,keywords:['react','redux'],imageURL:'https://glitch.com/culture/content/images/2018/10/react-starter-kit-1.jpg',name:'Build a Web App with React',url:'https://glitch.com/culture/react-starter-kit/',description:'A free, 5-part video course with interactive code examples that will help you learn React.',coverColor:'#9de1ff'},{id:2,keywords:['website','html','css','node','javascript'],imageURL:'https://glitch.com/culture/content/images/2018/10/website-starter-kit-1.jpg',name:'How to Make a Website',url:'https://glitch.com/culture/website-starter-kit/',description:'A free, 4-part video course with interactive code examples to learn how to make a website using HTML, JS, CSS, and Node.js.',coverColor:'#D0F1FF'},{id:3,keywords:['vr','webvr','aframe','a-frame'],imageURL:'https://glitch.com/culture/content/images/2019/02/WebVR-Starter-Kit.-Part-1_-Intro-to-WebVR-1.png',name:'An Intro to WebVR',url:'https://glitch.com/culture/an-intro-to-webvr/',description:'A free, 5-part video course with interactive code examples that will teach you the fundamentals of WebVR using A-Frame.',coverColor:'#9de1ff'}]);

/***/ }),

/***/ "./src/curated/teams.js":
/*!******************************!*\
  !*** ./src/curated/teams.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// These urls become root glitch.com/team pages
// This is here for backwards compatibility
/* harmony default export */ __webpack_exports__["default"] = ({facebook:26,microsoft:27,google:28,signal:31,twitter:35,twilio:36,wistia:37,slack:29,'slack-blueprints':30,firebase:141,pfoley:142,'test-team':65,botkit:32,trello:33,botwiki:34,websites:40,'big-game':39,storage:42,auth:41,manuscript:43,algolia:38,aframe:51,react:55,python:56,producthunt:46,'peoples-response':63,bootstrap:64,manifold:47,sparkpost:52,ted:77,fogcreek:1,andela:48,ucaya:53,shopify:54,javascripting:57,nodeschool:58,spotify:59,bitsrc:60,trove:61,firstlookmedia:62,mlh:66,mouse:67,kickbox:69,'mlh-algorithms':70,buzzfeed:71,adu:100,eyebeam:120,restartnetwork:121,'mozilla-bugmaster':122,'weil-ed':123,userfeeds:125,youthradio:126,safecast:128,nexmo:97,boringco:102,dtc:129,streamplace:72,explo:73,glitch:74,e4youth:84,appcues:76,'are.na':79,tft:80,badgermaps:81,hyperiondev:82,sectorsocial:83,codepark:85,codi:86,apollo:87,cobibike:88,ceplatform:90,torontopubliclibrary:91,stjcs:92,momentum:93,'abc-news':94,mozilla:95,wevr:96,wetransfer:98,xrstudio:99,cusg:101,theteamcoders:110,edlab:103,pit:104,craft:105,patreon:106,bard:107,uiucdata:108,techcube:109,elephantlabs:111,square:118,makeleaps:119,codeinstitute:124,stoneward:127,appacademy:112,'global-sprint':113,thinkful:114,'stanford-hci':115,enki:116,shutterstock:117,kgisl:143,kickstarter:144,rieckmann:130,colorofchange:132,capgemini:133,ciscodevnet:134,gla:135,adafruit:136,mobiento:137,chatinfinite:138,pvcma:139,drcarter:145,devleague:146,mio:140,coderslight:147,'team-rocket':148,'coolteam-1-sadf':152,'team-rocket-12':153,'team-rocketsdf':155,clarifai:131,planet:89,pipefy:49,'lab-916':75});

/***/ })

}]);
//# sourceMappingURL=curated.2ce3314a.js.map