/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_gride__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/gride */ \"./src/components/gride.js\");\n/* harmony import */ var _components_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/timer */ \"./src/components/timer.js\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal */ \"./src/components/modal.js\");\n\n\n\nvar gride = new _components_gride__WEBPACK_IMPORTED_MODULE_0__.Gride();\nvar timer = new _components_timer__WEBPACK_IMPORTED_MODULE_1__.Timer();\nvar modal = new _components_modal__WEBPACK_IMPORTED_MODULE_2__.Modal();\n\n//# sourceURL=webpack://html-training/./src/app.js?");

/***/ }),

/***/ "./src/components/gride.js":
/*!*********************************!*\
  !*** ./src/components/gride.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gride\": () => (/* binding */ Gride)\n/* harmony export */ });\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./src/components/timer.js\");\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score */ \"./src/components/score.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ \"./src/components/modal.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Gride = /*#__PURE__*/function () {\n  // foo = () => {\n  //     this.doStuff();\n  // }\n  function Gride() {\n    var _this = this;\n\n    _classCallCheck(this, Gride);\n\n    _defineProperty(this, \"cells\", void 0);\n\n    _defineProperty(this, \"winnerList\", void 0);\n\n    _defineProperty(this, \"markList\", void 0);\n\n    _defineProperty(this, \"timeoutId\", void 0);\n\n    _defineProperty(this, \"timer\", void 0);\n\n    _defineProperty(this, \"score\", void 0);\n\n    _defineProperty(this, \"index\", void 0);\n\n    _defineProperty(this, \"mark\", void 0);\n\n    _defineProperty(this, \"pause\", void 0);\n\n    _defineProperty(this, \"figures\", void 0);\n\n    _defineProperty(this, \"player\", void 0);\n\n    this.timer = new _timer__WEBPACK_IMPORTED_MODULE_0__.Timer();\n    this.btnStart = document.querySelector(\"#timerStart\");\n    this.btnPause = document.querySelector(\"#timerPause\");\n    this.btnResume = document.querySelector(\"#timerResume\");\n    this.score = new _score__WEBPACK_IMPORTED_MODULE_1__.Score();\n    this.cells = document.querySelectorAll(\".case\");\n    this.winnerList = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];\n    this.markList = [];\n    this.pause = true;\n    this.figures = ['cross', 'circle'];\n    this.btnStart.addEventListener(\"click\", function () {\n      return _this.startGame();\n    });\n    this.btnPause.addEventListener(\"click\", function () {\n      return _this.pauseGame();\n    });\n    this.btnResume.addEventListener(\"click\", function () {\n      return _this.resumeGame();\n    }); // this.btnStart.addEventListener(\"click\", () => this.initGame());\n  }\n\n  _createClass(Gride, [{\n    key: \"startGame\",\n    value: function startGame() {\n      var _this2 = this;\n\n      this.cells.forEach(function (cell, idx) {\n        cell.addEventListener(\"click\", function () {\n          return _this2.markCircle(idx);\n        });\n      });\n      this.pause = false;\n    }\n  }, {\n    key: \"pauseGame\",\n    value: function pauseGame() {\n      this.pause = true;\n    }\n  }, {\n    key: \"resumeGame\",\n    value: function resumeGame() {\n      this.pause = false;\n    }\n  }, {\n    key: \"isWinner\",\n    value: function isWinner(player) {\n      var playerCells = this.markList.filter(function (_, i) {\n        return i % 2 === player;\n      });\n\n      var _iterator = _createForOfIteratorHelper(this.winnerList),\n          _step;\n\n      try {\n        var _loop = function _loop() {\n          var comb = _step.value;\n          var k = playerCells.reduce(function (k, x) {\n            return k + comb.includes(x);\n          }, 0);\n\n          if (k === 3) {\n            return {\n              v: true\n            };\n          }\n        };\n\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var _ret = _loop();\n\n          if (_typeof(_ret) === \"object\") return _ret.v;\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      return false;\n    }\n  }, {\n    key: \"markCircle\",\n    value: function markCircle(idx) {\n      var _this3 = this;\n\n      if (this.pause) return;\n      var classList = this.cells[idx].classList;\n      if (classList.contains(this.figures[0]) || classList.contains(this.figures[1])) return;\n      this.cells[idx].classList.add(this.figures[0]);\n      this.markList.push(idx);\n\n      if (this.isWinner(0)) {\n        console.log('You win!');\n        this.pause = true;\n        return;\n      }\n\n      var freeCells = [0, 1, 2, 3, 4, 5, 6, 7, 8].filter(function (x) {\n        return !_this3.markList.includes(x);\n      });\n      var compMove = freeCells[Math.floor(Math.random() * freeCells.length)];\n      this.markList.push(compMove);\n      this.cells[compMove].classList.add(this.figures[1]);\n\n      if (this.isWinner(1)) {\n        console.log('You lose!');\n        this.pause = true;\n      }\n    } // startGame() {\n    //     this.cells.forEach((cell) => {\n    //         cell.addEventListener(\"click\", () => this.target(cell));\n    //         //cell = this.cells.indexOf(cell); \n    //         console.log(\"Start\");\n    //     });\n    // }\n    // pauseGame() {\n    //     this.cells.forEach((cell) => {\n    //         clearTimeout(this.timeoutId);\n    //         cell.removeEventListener(\"click\", () => this.target(cell));\n    //         console.log(\"Pause\");\n    //     });\n    // };\n    // markCircle(e) {\n    //     if (this.mark(e.target, \"circle\")) {\n    //         this.pauseGame();\n    //         this.timeoutId = setTimeout(() => this.markCross(), 2000);\n    //     };\n    // }\n    // markCross() {\n    //     this.timeoutId = null;\n    //     console.log(\"CPU mark\");\n    //     let freeCase = [];\n    //     for (let i = 0; i < 9; i++) {\n    //         if (!this.markList[i]) {\n    //             freeCase.push(i);\n    //         }\n    //     }\n    //     const index = freeCase[Math.round(Math.random() * (freeCase.length - 1))];\n    //     if (0 !== index && !index) {\n    //         this.startGame();\n    //     } else if (this.mark(this.cells[index], \"cross\")) {\n    //         this.resumeGame();\n    //     };\n    // };\n    // //fonction qui peut servir pour deux\n    // mark(cell, mark) {\n    //     const index = parseInt(cell.id.substr(4));\n    //     if (this.markList[index]) {\n    //         //j'ai pas marqué, ca s'est arrêté.\n    //         return false;\n    //     }\n    //     cell.classList.add(this.mark);\n    //     this.markList[index] = this.mark;\n    //     // mettre 5 quand il y aura l'ordi\n    //     if (5 > this.markList.length || !this.hasWin(this.mark)) {\n    //         return true;\n    //         //j'ai marqué et j'ai pas gagné \n    //     }\n    //     this.stopGame();\n    //     \"circle\" === mark ? this.incrementPlayer() : this.incrementCPU();\n    //     return false;\n    // };\n    // stopGame () {\n    //     stop();\n    //     disapearAppear(btnPause, btnStart);\n    //     pauseGame();\n    //     popUpWin();\n    // };\n    // hasWin (mark) {\n    //     for (const win of this.winnerList) {\n    //         if (mark === this.markList[win[0]] &&\n    //             mark === this.markList[win[1]] &&\n    //             mark === this.markList[win[2]]\n    //         ) {\n    //             console.log(\"Vous avez gagné!\");\n    //             console.log();\n    //             //pop up win\n    //             //popUpWin();\n    //             return true;\n    //         }\n    //     }\n    //     //console.log(\"je vérifie la victoire\");\n    //     return false;\n    // }\n    // startGame() {\n    //     this.cells.forEach((cell) => {\n    //         cell.addEventListener(\"click\", () => markCircle());\n    //     });\n    // };\n    // //desable\n    // pauseGame() {\n    //     this.cells.forEach((cell) => {\n    //         clearTimeout(this.timeoutId);\n    //         cell.removeEventListener(\"click\", () => markCircle());\n    //     });\n    // };\n    // //enable\n    // resumeGame() {\n    //     if (this.timeoutId) {\n    //         this.markCross();\n    //     }\n    //     this.cells.forEach((cell) => {\n    //         cell.addEventListener(\"click\", () => markCircle());\n    //     });\n    // };\n    // initGame() {\n    //     this.markList.splice(0);\n    //     this.cells.forEach((cell) => {\n    //         cell.classList.remove(\"circle\", \"cross\");\n    //     });\n    //     this.resumeGame();\n    // };\n\n  }]);\n\n  return Gride;\n}();\n\n//# sourceURL=webpack://html-training/./src/components/gride.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Modal = function Modal() {\n  _classCallCheck(this, Modal);\n}; // const popUpWin = () => {\n//     const divContainerWin = document.createElement(\"div\");\n//     divContainerWin.classList.add(\"modal\");\n//     divContainerWin.tabindex = \"-1\";\n//     divContainerWin.innerHTML = `\n//       <div class=\"modal-dialog\">\n//         <div class=\"modal-content\">\n//           <div class=\"modal-header\">\n//             <h5 class=\"modal-title\">Félicitations!</h5>\n//             <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n//           </div>\n//           <div class=\"modal-body\">\n//             <p>Vous avez gagné!</p>\n//           </div>\n//           <div class=\"modal-footer\">\n//             <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\n//           </div>\n//         </div>\n//       </div>`;\n//     const main = document.querySelector(\"main\");\n//     main.appendChild(divContainerWin);\n//     let myModal = new bootstrap.Modal(divContainerWin);\n//     myModal.show();\n//     };\n\n//# sourceURL=webpack://html-training/./src/components/modal.js?");

/***/ }),

/***/ "./src/components/score.js":
/*!*********************************!*\
  !*** ./src/components/score.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Score\": () => (/* binding */ Score)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Score = function Score() {\n  _classCallCheck(this, Score);\n}; // let scorePlayer = 0;\n// let scoreCPU = 0;\n// const incrementPlayer = () => {\n//     scorePlayer +=1;\n//     document.querySelector(\"#scorePlayer\").innerText = scorePlayer;\n// };\n// const incrementCPU = () => {\n//     scoreCPU +=1;\n//     document.querySelector(\"#scoreCPU\").innerText = scoreCPU;\n// };\n\n//# sourceURL=webpack://html-training/./src/components/score.js?");

/***/ }),

/***/ "./src/components/timer.js":
/*!*********************************!*\
  !*** ./src/components/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Timer\": () => (/* binding */ Timer)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Timer = /*#__PURE__*/function () {\n  function Timer() {\n    var _this = this;\n\n    _classCallCheck(this, Timer);\n\n    _defineProperty(this, \"btnStart\", void 0);\n\n    _defineProperty(this, \"btnPause\", void 0);\n\n    _defineProperty(this, \"btnResume\", void 0);\n\n    _defineProperty(this, \"timer\", void 0);\n\n    _defineProperty(this, \"date\", void 0);\n\n    _defineProperty(this, \"intervalId\", void 0);\n\n    _defineProperty(this, \"disapearAppear\", function (disapear, appear) {\n      disapear.classList.replace(\"d-block\", \"d-none\");\n      appear.classList.replace(\"d-none\", \"d-block\");\n    });\n\n    this.btnStart = document.querySelector(\"#timerStart\");\n    this.btnPause = document.querySelector(\"#timerPause\");\n    this.btnResume = document.querySelector(\"#timerResume\");\n    this.timer = document.querySelector(\"#timerTime\");\n    this.date = new Date(0);\n    this.intervalId = 0;\n    this.btnStart.addEventListener(\"click\", function () {\n      return _this.start();\n    });\n    this.btnPause.addEventListener(\"click\", function () {\n      return _this.pause();\n    });\n    this.btnResume.addEventListener(\"click\", function () {\n      return _this.resume();\n    });\n  }\n\n  _createClass(Timer, [{\n    key: \"increment\",\n    value: function increment() {\n      this.timer.innerText = this.date.toISOString().substr(14, 5);\n      this.date.setSeconds(this.date.getSeconds() + 1);\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      var _this2 = this;\n\n      this.date.setTime(0);\n      this.increment();\n      this.disapearAppear(this.btnStart, this.btnPause);\n      this.intervalId = setInterval(function () {\n        return _this2.increment();\n      }, 1000);\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this.disapearAppear(this.btnPause, this.btnResume);\n      this.stop();\n    }\n  }, {\n    key: \"resume\",\n    value: function resume() {\n      var _this3 = this;\n\n      this.disapearAppear(this.btnResume, this.btnPause);\n      this.intervalId = setInterval(function () {\n        return _this3.increment();\n      }, 1000);\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      clearInterval(this.intervalId);\n    }\n  }]);\n\n  return Timer;\n}();\n\n//# sourceURL=webpack://html-training/./src/components/timer.js?");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://html-training/./src/app.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/app.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.scss");
/******/ 	
/******/ })()
;