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
})({"index.js":[function(require,module,exports) {
"use strict";

var bookmark1 = document.querySelector('#bookmark1');
bookmark1.addEventListener('click', function () {
  bookmark1.classList.toggle('card__bookmark--on');
});
var bookmark2 = document.querySelector('#bookmark2');
bookmark2.addEventListener('click', function () {
  bookmark2.classList.toggle('card__bookmark--on');
});
var bookmark3 = document.querySelector('#bookmark3');
bookmark3.addEventListener('click', function () {
  bookmark3.classList.toggle('card__bookmark--on');
});
var bookmark4 = document.querySelector('#bookmark4');
bookmark4.addEventListener('click', function () {
  bookmark4.classList.toggle('card__bookmark--on');
});
var bookmark5 = document.querySelector('#bookmark5');
bookmark5.addEventListener('click', function () {
  bookmark5.classList.toggle('card__bookmark--on');
});
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
var showAnswerButton1 = document.querySelector('.card__showanswer1');
var answerText1 = document.querySelector('.card__answer1');
var hideButton1 = document.querySelector('.card__hideanswer1');
showAnswerButton1.addEventListener('click', function () {
  answerText1.classList.remove('dn');
  showAnswerButton1.classList.add('dn');
  hideButton1.classList.remove('dn');
});
hideButton1.addEventListener('click', function () {
  answerText1.classList.add('dn');
  showAnswerButton1.classList.remove('dn');
  hideButton1.classList.add('dn');
});
var showAnswerButton2 = document.querySelector('.card__showanswer2');
var answerText2 = document.querySelector('.card__answer2');
var hideButton2 = document.querySelector('.card__hideanswer2');
showAnswerButton2.addEventListener('click', function () {
  answerText2.classList.remove('dn');
  showAnswerButton2.classList.add('dn');
  hideButton2.classList.remove('dn');
});
hideButton2.addEventListener('click', function () {
  answerText2.classList.add('dn');
  showAnswerButton2.classList.remove('dn');
  hideButton2.classList.add('dn');
});
var showAnswerButton3 = document.querySelector('.card__showanswer3');
var answerText3 = document.querySelector('.card__answer3');
var hideButton3 = document.querySelector('.card__hideanswer3');
showAnswerButton3.addEventListener('click', function () {
  answerText3.classList.remove('dn');
  showAnswerButton3.classList.add('dn');
  hideButton3.classList.remove('dn');
});
hideButton3.addEventListener('click', function () {
  answerText3.classList.add('dn');
  showAnswerButton3.classList.remove('dn');
  hideButton3.classList.add('dn');
});
var showAnswerButton4 = document.querySelector('.card__showanswer4');
var answerText4 = document.querySelector('.card__answer4');
var hideButton4 = document.querySelector('.card__hideanswer4');
showAnswerButton4.addEventListener('click', function () {
  answerText4.classList.remove('dn');
  showAnswerButton4.classList.add('dn');
  hideButton4.classList.remove('dn');
});
hideButton4.addEventListener('click', function () {
  answerText4.classList.add('dn');
  showAnswerButton4.classList.remove('dn');
  hideButton4.classList.add('dn');
});
var showAnswerButton5 = document.querySelector('.card__showanswer5');
var answerText5 = document.querySelector('.card__answer5');
var hideButton5 = document.querySelector('.card__hideanswer5');
showAnswerButton5.addEventListener('click', function () {
  answerText5.classList.remove('dn');
  showAnswerButton5.classList.add('dn');
  hideButton5.classList.remove('dn');
});
hideButton5.addEventListener('click', function () {
  answerText5.classList.add('dn');
  showAnswerButton5.classList.remove('dn');
  hideButton5.classList.add('dn');
});
var cardQuestion1 = document.querySelector('.card__question1');
var cardAnswer1 = document.querySelector('.answer1');
var cardTags1 = document.querySelector('.tags1');
var cardSubmitButton1 = document.querySelector('.createcard__button');
cardSubmitButton1.addEventListener('submit', function (event) {
  event.preventDefault();
  cardQuestion1.value = '';
  cardAnswer1.value = '';
  cardTags1.value = '';
});
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
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58590" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/quiz-app.e31bb0bc.js.map