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
})({"utils/events/event-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function on(element, eventType, callback) {
  element.addEventListener(eventType, function (event) {
    return callback(event);
  });
}

var _default = {
  on: on
};
exports.default = _default;
},{}],"utils/api/api-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getRequest(location, callback) {
  fetch(location).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

function postRequest(location, requestBody, callback) {
  fetch(location, {
    method: "POST",
    body: JSON.stringify(requestBody)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

var _default = {
  getRequest: getRequest,
  postRequest: postRequest
};
exports.default = _default;
},{}],"components/Games.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Games;

function Games(games) {
  return games.map(function (game) {
    return "\n                <li class=\"game\">\n                    <img class=\"game__imagepath\" src=\"".concat(game.imagePath, "\"></img>\n                    <p><h3 class=\"game__title\">").concat(game.gameTitle, "</h3>\n                    <h5 class=\"game__yearreleased\">").concat(game.yearReleased, "</h5></p>\n                </li>\n            ");
  }).join('');
}
},{}],"components/GameConsoles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GameConsoles;

var _Games = _interopRequireDefault(require("./Games"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GameConsoles(gameconsoles) {
  return "\n    <div class=\"buttons\">\n        <button class=\"console-trigger\">Add Console</button>\n        <button class=\"game-trigger\">Add Game</button>\n    </div>\n    <div class =\"modal-console\">\n        <div class=\"consolemodal-content\">\n                <span class=\"close-button\">X</span>\n                <input type=\"text\" class=\"add-console__full-name\" placeholder=\"Console Name\">\n                <input type=\"text\" class=\"add-console__short-name\" placeholder=\"Console Short Name\">\n                <input type=\"text\" class=\"add-console__image-path\" placeholder=\"image URL\">\n                <button class=\"add-console__submit\">Add Console</button>\n        </div>\n   </div>\n   <div class =\"modal-game\">\n               <div class=\"gamemodal-content\">\n                       <span class=\"close-button2\">X</span>\n                         <input type=\"text\" class=\"add-game__name\" placeholder=\"Name\">\n                         <input type=\"text\" class=\"add-game__yearreleased\" placeholder=\"Year Released\">\n                     \n                         <button class=\"add-game__submit\">Add Game</button>\n                 </div>\n   </div>\n      <ul class=\"consoles\">\n        ".concat(gameconsoles.map(function (gameconsole) {
    return "\n           <li class=\"console\">\n            <section class=\"console__header\">\n                <img class=\"console__imagepath\" src=\"".concat(gameconsole.imagePath, "\"></img>\n                <h3 class=\"console__name\">").concat(gameconsole.consoleName, "</h3>\n            </section>\n            <ul class=\"games\">\n            ").concat((0, _Games.default)(gameconsole.game), "\n            </ul>\n            </li>\n            ");
  }).join(''), "\n         \n          ");
} // var consolemodal = document.querySelector(".modal-console");
// var consoletrigger = document.querySelector(".console-trigger")
// var closeButton = document.querySelector(".close-button");
// function toggleConsoleModal() {
//   consolemodal.classList.toggle("show-consolemodal");
// }
// function windowOnClick(event) {
//   if (event.target === consolemodal) {
//       toggleConsoleModal();
//   }
// }
// consoletrigger.addEventListener("click", toggleConsoleModal);
// closeButton.addEventListener("click", toggleConsoleModal);
// window.addEventListener("click", windowOnClick);
//     <li class="console">
//     <button class="console-trigger">Add Console</button>
// <button class="game-trigger">Add Console</button>
//    <div class ="modal-console">
//         <div class="consolemodal-content">
//                 <span class="close-button">X</span>
//                 <input type="text" class="add-console__full-name" placeholder="Console Name">
//                 <input type="text" class="add-console__short-name" placeholder="Console Short Name">
//                 <button class="add-console__submit">Add Console</button>
//         </div>
//   </div>
//   <div class ="modal-game">
//        <div class="gamemodal-content">
//                <span class="close-button">X</span>
//                  <input type="text" class="add-game__name" placeholder="Name">
//                  <input type="text" class="add-game__yearreleased" placeholder="Year Released">
//                  <select class="add-game__console" placeholder="Console">${gameconsole.consoleName}</select>
//                  <button class="add-game__submit">Add Game</button>
//          </div>
//    </div>
//     <!--  <select class="add-game__console" placeholder="Console">
//     <option value="0">Select Console</option>
//     <option value="${gameconsole.consoleName}"
//             text="${gameconsole.consoleName}">
//     </option>
//  </select> --!>
},{"./Games":"components/Games.js"}],"app.js":[function(require,module,exports) {
"use strict";

var _eventActions = _interopRequireDefault(require("./utils/events/event-actions"));

var _apiActions = _interopRequireDefault(require("./utils/api/api-actions"));

var _GameConsoles = _interopRequireDefault(require("./components/GameConsoles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

main();

function main() {
  _apiActions.default.getRequest('/consoles', function (gameconsoles) {
    getAppContext().innerHTML = (0, _GameConsoles.default)(gameconsoles);
  });

  _eventActions.default.on(getAppContext(), 'click', function () {
    //console submit
    if (event.target.classList.contains('add-console__submit')) {
      var consoleName = document.querySelector('.add-console__full-name').value;
      var shortName = document.querySelector('.add-console__short-name').value;
      var imagePath = document.querySelector('.add-console__image-path').value;

      _apiActions.default.postRequest('/consoles/add', {
        consoleName: consoleName,
        shortName: shortName,
        imagePath: imagePath
      }, function (gameconsoles) {
        return getAppContext().innerHTML = (0, _GameConsoles.default)(gameconsoles);
      });
    } //add console modal


    if (event.target.classList.contains('console-trigger')) {
      var toggleConsoleModal = function toggleConsoleModal() {
        consolemodal.classList.toggle("show-consolemodal");
      };

      var windowOnConsoleClick = function windowOnConsoleClick(event) {
        if (event.target === consolemodal) {
          toggleConsoleModal();
        }
      };

      var consolemodal = document.querySelector(".modal-console");
      var consoletrigger = document.querySelector(".console-trigger");
      var closeButton = document.querySelector(".close-button");
      consoletrigger.addEventListener("click", toggleConsoleModal);
      closeButton.addEventListener("click", toggleConsoleModal);
      window.addEventListener("click", windowOnConsoleClick);
    } //close button


    if (event.target.classList.contains('close-button')) {
      var closeTheGoddamnModal = function closeTheGoddamnModal() {
        consolemodal.classList.toggle("show-consolemodal");
      };

      var closeButton = document.querySelector(".close-button");
      var consolemodal = document.querySelector(".modal-console");
      closeButton.addEventListener("click", closeTheGoddamnModal);
    } //add game modal


    if (event.target.classList.contains('game-trigger')) {
      var toggleGameModal = function toggleGameModal() {
        gamemodal.classList.toggle("show-gamemodal");
      };

      var windowOnGameClick = function windowOnGameClick(event) {
        if (event.target === gamemodal) {
          toggleGameModal();
        }
      };

      var gamemodal = document.querySelector(".modal-game");
      var gametrigger = document.querySelector(".game-trigger");
      var closeButton2 = document.querySelector(".close-button2");
      gametrigger.addEventListener("click", toggleGameModal);
      closeButton2.addEventListener("click", toggleGameModal);
      window.addEventListener("click", windowOnGameClick);
    } //close button


    if (event.target.classList.contains('close-button2')) {
      var _closeTheGoddamnModal = function _closeTheGoddamnModal() {
        gamemodal.classList.toggle("show-gamemodal");
      };

      var closeButton = document.querySelector(".close-button2");
      var gamemodal = document.querySelector(".modal-game");
      closeButton.addEventListener("click", _closeTheGoddamnModal);
    } //console accordions


    if (event.target.classList.contains('console__header')) {
      var accordion = document.getElementsByClassName("console__header");
      var i;

      for (i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;

          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }
    }
  });
}

function getAppContext() {
  return document.querySelector("#app");
} // if (event.target.classList.contains('console-trigger')){
//   var consolemodal = document.querySelector(".modal-console");
//   var consoletrigger = document.querySelector(".console-trigger")
//   var closeButton = document.querySelector(".close-button");
//   function toggleConsoleModal() {
//     consolemodal.classList.toggle("show-consolemodal");
//   }
//   function windowOnConsoleClick(event) {
//           if (event.target === consolemodal) {
//             toggleConsoleModal();
//           }
//   }
//   consoletrigger.addEventListener("click", toggleConsoleModal);
//   closeButton.addEventListener("click", toggleConsoleModal);
//   window.addEventListener("click", windowOnConsoleClick);
// }
// if (event.target.classList.contains('add-game__submit')) {
//   const gameName = document.querySelector('.add-game__name').value
//   const yearReleased = document.querySelection('.add-game__yearreleased').value
//   const consoleName = document.querySelection('.add-game__console').value
//   const imagePath = document.querySelection('.add-image__path').value
// }
},{"./utils/events/event-actions":"utils/events/event-actions.js","./utils/api/api-actions":"utils/api/api-actions.js","./components/GameConsoles":"components/GameConsoles.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57326" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map