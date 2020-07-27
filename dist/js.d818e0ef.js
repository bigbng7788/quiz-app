// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = getAll;

function getAll(selector) {
  return document.querySelectorAll(selector);
}
},{}],"src/js/bookmarks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bookmarks = bookmarks;

var _util = require("./util.js");

(0, _util.getAll)();

function bookmarks() {
  var bookmarkList = (0, _util.getAll)('[data-js=bookmark]');
  bookmarkList.forEach(bookmarkToggle);

  function bookmarkToggle(ausgesuchtBookmark) {
    ausgesuchtBookmark.addEventListener('click', function () {
      ausgesuchtBookmark.classList.toggle('bookmark--on');
    });
  }
}
},{"./util.js":"src/js/util.js"}],"src/js/cardAnswerButtons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setButtonEvents = setButtonEvents;

function setButtonEvents(_ref) {
  var showAnswerButton = _ref.showAnswerButton,
      hideButton = _ref.hideButton,
      answerHead = _ref.answerHead,
      answerText = _ref.answerText;
  //const showAnswerButton = document.querySelector('[data-js=showAnswerButton]')
  //const answerHead = document.querySelector('[data-js=showAnswerHead]')
  //const answerText1 = document.querySelector('[data-js=showAnswerText]')
  //const hideButton1 = document.querySelector('[data-js=hideAnswerButton]')
  showAnswerButton.addEventListener('click', function () {
    answerHead.classList.remove('dn');
    answerText.classList.remove('dn');
    showAnswerButton.classList.add('dn');
    hideButton.classList.remove('dn');
  });
  hideButton.addEventListener('click', function () {
    answerHead.classList.add('dn');
    answerText.classList.add('dn');
    showAnswerButton.classList.remove('dn');
    hideButton.classList.add('dn');
  });
}
},{}],"src/js/cards.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cards = cards;
exports.createCard = createCard;

var _cardAnswerButtons = require("./cardAnswerButtons.js");

function cards() {
  var card = [{}, {}, {}];
  card.forEach(createCard);
}

var cardSection = get('[data-js=filledcard]');

function createCard(_ref) {
  var question = _ref.question,
      answer = _ref.answer,
      _ref$tags = _ref.tags,
      tags = _ref$tags === void 0 ? ['tag', 'tag2', 'tag3', 'tag4'] : _ref$tags;
  var newCard = createElement({
    className: 'card'
  }); //const bookmark = createElement({ type: 'div', className:'', target:newCard})

  newCard.innerHTML = "<svg data-js=\"bookmark\" class=\"bookmark\" version=\"1.1\" x=\"0px\" y=\"0px\" width=\"431.972px\"\n  height=\"431.972px\" viewBox=\"0 0 431.972 431.972\" style=\"\n      enable-background: new 0 0 431.972 431.972;\n      background-color: transparent;\n    \" xml:space=\"preserve\">\n  <g>\n    <path d=\"M393.146,14.279c-3.713-5.333-8.713-9.233-14.989-11.707c-3.997-1.711-8.186-2.568-12.565-2.568V0H66.378\n     c-4.377,0-8.562,0.857-12.56,2.568c-6.28,2.472-11.278,6.377-14.989,11.707c-3.71,5.33-5.568,11.228-5.568,17.701v368.019\n     c0,6.475,1.858,12.371,5.568,17.706c3.711,5.329,8.709,9.233,14.989,11.704c3.994,1.711,8.183,2.566,12.56,2.566\n     c8.949,0,16.844-3.142,23.698-9.418l125.91-121.062l125.91,121.065c6.663,6.081,14.562,9.127,23.695,9.127\n     c4.76,0,8.948-0.756,12.565-2.279c6.276-2.471,11.276-6.375,14.989-11.711c3.71-5.328,5.564-11.225,5.564-17.699V31.98\n     C398.71,25.507,396.852,19.609,393.146,14.279z M362.166,391.139L241.397,275.224l-25.411-24.264l-25.409,24.264L69.809,391.139\n     V36.549h292.357V391.139L362.166,391.139z\" />\n  </g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g>\n  <g></g></svg>";
  var questionHeadline = createElement({
    type: 'h3',
    target: newCard
  });
  questionHeadline.textContent = 'Question:';
  var newQuestion = createElement({
    type: 'p',
    target: newCard
  });
  newQuestion.textContent = question || 'Question: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremqueaspernatur mollitia cum ratione quaerat. Illo esse, dolor, aliquid ipsa officia quibusdam dolore dolorum tempora reprehenderit adipiscinumquam nesciunt. Explicabo, dolorem!';
  var showAnswerButton = createElement({
    type: 'button',
    className: "hide__button",
    dataJs: 'showAnswerButton',
    target: newCard
  });
  showAnswerButton.textContent = "Show Answer";
  var hideButton = createElement({
    type: 'button',
    className: "dn show__button",
    dataJs: 'hideAnswerButton',
    target: newCard
  });
  hideButton.textContent = "Hide Answer";
  var answerHead = createElement({
    type: 'h3',
    className: "dn card__answer1",
    dataJs: 'showAnswerHead',
    target: newCard
  });
  answerHead.textContent = 'Answer:';
  var answerText = createElement({
    type: 'p',
    className: "dn card__answer1",
    dataJs: 'showAnswerText',
    target: newCard
  });
  answerText.textContent = answer || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dol ';
  (0, _cardAnswerButtons.setButtonEvents)({
    showAnswerButton: showAnswerButton,
    hideButton: hideButton,
    answerHead: answerHead,
    answerText: answerText
  });
  var listElementCard = createElement({
    type: 'ul',
    className: "card__taglist",
    dataJs: 'tagList',
    target: newCard
  });
  tags.forEach(createTag);

  function createTag(tag) {
    var tagElement = createElement({
      type: 'li',
      className: "card__tag",
      dataJs: 'tag',
      target: listElementCard
    });
    tagElement.textContent = tag;
  }
}

function createElement() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? 'section' : _ref2$type,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      _ref2$dataJs = _ref2.dataJs,
      dataJs = _ref2$dataJs === void 0 ? '' : _ref2$dataJs,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? cardSection : _ref2$target;

  var el = document.createElement(type);
  el.className = className;
  el.setAttribute('data-js', dataJs);
  target.appendChild(el);
  return el;
}

function createSvg() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$type = _ref3.type,
      type = _ref3$type === void 0 ? 'section' : _ref3$type,
      _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? '' : _ref3$className,
      _ref3$dataJs = _ref3.dataJs,
      dataJs = _ref3$dataJs === void 0 ? '' : _ref3$dataJs,
      _ref3$target = _ref3.target,
      target = _ref3$target === void 0 ? cardSection : _ref3$target;

  var el = document.createElement(type);
  el.className = className;
  el.setAttribute('data-js', dataJs);
  svg.setAttribute('width', '432');
  svg.setAttribute('height', '432');
  svg.setAttribute('viewBox', '0 0 432 432');
  target.appendChild(el);
  return el;
}

function get(selector) {
  return document.querySelector(selector);
}
},{"./cardAnswerButtons.js":"src/js/cardAnswerButtons.js"}],"src/js/form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.form = form;

var _cards = require("./cards.js");

function form() {
  //Create new card - use the submit button to clear inputs
  var cardQuestion1 = document.querySelector('[data-js=question]');
  var cardAnswer1 = document.querySelector('[data-js=answer]');
  var cardTags1 = document.querySelector('[data-js=taglist]');
  var formCreateCard = document.querySelector('[data-js=formCreateCard]');
  var form = document.querySelector('form');
  formCreateCard.addEventListener('submit', function (event) {
    var question = cardQuestion1.value;
    var answer = cardAnswer1.value;
    var tags = cardTags1.value.split(',');
    (0, _cards.createCard)({
      question: question,
      answer: answer,
      tags: tags
    });
    event.preventDefault();
    form.reset();
  });
}
},{"./cards.js":"src/js/cards.js"}],"src/js/mode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mode = mode;

function mode() {
  var body = document.querySelector('body');
  var buttonLightMode = document.querySelector('.button--light');
  var buttonDarkMode = document.querySelector('.button--dark');
  buttonLightMode.addEventListener('click', function () {
    body.classList.add('body--lightmode');
    buttonDarkMode.classList.remove('dn');
    buttonLightMode.classList.add('dn');
  });
  buttonDarkMode.addEventListener('click', function () {
    body.classList.remove('body--lightmode');
    buttonDarkMode.classList.add('dn');
    buttonLightMode.classList.remove('dn');
  });
}
},{}],"src/js/readMoreButtonBio.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readMoreButtonBio = readMoreButtonBio;

function readMoreButtonBio() {
  var showReadMoreBio = document.querySelector('.readmore__button');
  var readMoreTextBio = document.querySelector('.readmorebio__text');
  var readLessBio = document.querySelector('.readless__button');
  showReadMoreBio.addEventListener('click', function () {
    readMoreTextBio.classList.remove('dn');
    showReadMoreBio.classList.add('dn');
    readLessBio.classList.remove('dn');
  });
  readLessBio.addEventListener('click', function () {
    readMoreTextBio.classList.add('dn');
    showReadMoreBio.classList.remove('dn');
    readLessBio.classList.add('dn');
  });
}
},{}],"src/js/navigation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigation = navigation;

function navigation() {
  var mainHome = document.querySelector('#maindashboard');
  var mainBookmark = document.querySelector('#mainbookmark');
  var mainCreate = document.querySelector('#maincreate');
  var mainProfile = document.querySelector('#mainprofile');
  var navHome = document.querySelector('#nav_home');
  var navBookmark = document.querySelector('#nav_bookmark');
  var navCreate = document.querySelector('#nav_create');
  var navProfile = document.querySelector('#nav_profile');

  var hideAllSections = function hideAllSections() {
    mainHome.classList.add('dn');
    mainBookmark.classList.add('dn');
    mainCreate.classList.add('dn');
    mainProfile.classList.add('dn');
  };

  var inactiveAllSections = function inactiveAllSections() {
    navHome.classList.remove('nav--active');
    navBookmark.classList.remove('nav--active');
    navCreate.classList.remove('nav--active');
    navProfile.classList.remove('nav--active');
  };

  navHome.addEventListener('click', function () {
    hideAllSections();
    inactiveAllSections();
    mainHome.classList.remove('dn');
    navHome.classList.add('nav--active');
  });
  navBookmark.addEventListener('click', function () {
    hideAllSections();
    inactiveAllSections();
    mainBookmark.classList.remove('dn');
    navBookmark.classList.add('nav--active');
  });
  navCreate.addEventListener('click', function () {
    hideAllSections();
    inactiveAllSections();
    mainCreate.classList.remove('dn');
    navCreate.classList.add('nav--active');
  });
  navProfile.addEventListener('click', function () {
    hideAllSections();
    inactiveAllSections();
    mainProfile.classList.remove('dn');
    navProfile.classList.add('nav--active');
  });
}
},{}],"src/js/index.js":[function(require,module,exports) {
"use strict";

var _bookmarks = require("./bookmarks.js");

var _cards = require("./cards.js");

var _form = require("./form.js");

var _mode = require("./mode.js");

var _readMoreButtonBio = require("./readMoreButtonBio.js");

var _navigation = require("./navigation.js");

(0, _cards.cards)();
(0, _form.form)();
(0, _mode.mode)();
(0, _readMoreButtonBio.readMoreButtonBio)();
(0, _navigation.navigation)();
(0, _bookmarks.bookmarks)();
},{"./bookmarks.js":"src/js/bookmarks.js","./cards.js":"src/js/cards.js","./form.js":"src/js/form.js","./mode.js":"src/js/mode.js","./readMoreButtonBio.js":"src/js/readMoreButtonBio.js","./navigation.js":"src/js/navigation.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63656" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=/js.d818e0ef.js.map