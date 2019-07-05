module.exports = function(data) {
  "use strict";
  return (function() {
    var fogcreek, __root;
    __root = require('jadelet')(this);
    fogcreek = "https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Ffogcreek.svg";
    __root.buffer(__root.element("section", this, {
      "class": ["by-fogcreek"],
      "role": "complementary"
    }, function(__root) {
      __root.buffer(__root.element("h2", this, {}, function(__root) {
        __root.buffer("Made By Fog Creek\n");
      }));
      __root.buffer(__root.element("img", this, {
        "src": fogcreek,
        "alt": "Fog Creek logo"
      }, function(__root) {}));
      __root.buffer(__root.element("p", this, {}, function(__root) {
        __root.buffer("You might know us for making Trello, FogBugz, and co-creating Stack Overflow. We're\n");
        __root.buffer(__root.element("a", this, {
          "href": "https://www.fogcreek.com"
        }, function(__root) {
          __root.buffer("a friendly, self-funded company\n");
        }));
        __root.buffer(__root.element("span", this, {}, function(__root) {
          __root.buffer(" that's been helping people make stuff for over " + (this.fogcreekAge()) + " years.");
        }));
      }));
    }));
    return __root.root;
  }).call(data);
};
