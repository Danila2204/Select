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

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.js */ \"./js/select.js\");\n\r\n\r\nconst select = new _select_js__WEBPACK_IMPORTED_MODULE_0__.Select(\"#select\", {\r\n  placeholder: \"Выбери пожалуйста элемент\",\r\n  selectedId: \"4\",\r\n  data: [\r\n    {id: \"1\", value: \"React\"},\r\n    {id: \"2\", value: \"React Native\"},\r\n    {id: \"3\", value: \"Vue\"},\r\n    {id: \"4\", value: \"Angular\"},\r\n    {id: \"5\", value: \"Swelte\"},\r\n    {id: \"6\", value: \"JQuery\"},\r\n    {id: \"7\", value: \"JavaScript\"},\r\n  ],\r\n  onSelect(item) {\r\n    console.log(\"Selected item\", item);\r\n  }\r\n});\r\n\r\nwindow.s = select;\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/select.js":
/*!**********************!*\
  !*** ./js/select.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Select: () => (/* binding */ Select)\n/* harmony export */ });\nfunction getTemplate(data = [], placeholder, selectedId) {\r\n  let text = placeholder ?? \"Выберите элемент\";\r\n\r\n  const items = data.map(item => {\r\n    let myClass = \"\";\r\n    if (item.id === selectedId) {\r\n      text = item.value;\r\n      myClass = \"selected\";\r\n    }\r\n\r\n    return `\r\n      <li class=\"select__item ${myClass}\" data-type=\"item\" data-id=\"${item.id}\">${item.value}</li>\r\n    `;\r\n  });\r\n  return `\r\n  <div class=\"select__backdrop\" data-type=\"backdrop\"></div>\r\n    <div class=\"select__input\" data-type=\"input\">\r\n      <span data-type=\"value\">${text}</span>\r\n      <svg class=\"arrow\" xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"15\" viewBox=\"0 0 320 512\"><path d=\"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z\"/></svg>\r\n    </div>\r\n    <div class=\"select__drop-down\" data-type=\"drop-down\">\r\n      <ul class=\"select__list\">\r\n        ${items.join(\"\")}\r\n      </ul>\r\n    </div>\r\n  `\r\n}\r\n\r\nclass Select {\r\n  constructor(selector, options) {\r\n    this.$element = document.querySelector(selector);\r\n    this.options = options;\r\n    this.selectedId = options.selectedId;\r\n\r\n    this.#render();\r\n    this.#setup();\r\n  }\r\n\r\n  #render() {\r\n    const { placeholder, data } = this.options;\r\n    this.$element.classList.add(\"select\");\r\n    this.$element.innerHTML = getTemplate(data, placeholder, this.selectedId);\r\n  }\r\n\r\n  #setup() {\r\n    this.clickHandler = this.clickHandler.bind(this);\r\n    this.$element.addEventListener(\"click\", this.clickHandler);\r\n    this.$value = this.$element.querySelector(\"[data-type='value']\");\r\n  }\r\n\r\n  get isOpen() {\r\n    return this.$element.classList.contains(\"open\");\r\n  }\r\n\r\n  get current() {\r\n    return this.options.data.find(item => item.id === this.selectedId);\r\n  }\r\n  \r\n  toggle() {\r\n    this.isOpen ? this.close() : this.open();\r\n  }\r\n  \r\n  clickHandler(event) {\r\n    const { type } = event.target.dataset;\r\n    \r\n    if (type === \"input\") this.toggle();\r\n    else if (type === \"item\") {\r\n      this.select(event.target.dataset.id);\r\n    } else if (type === \"backdrop\") this.close();\r\n  }\r\n  \r\n  select(id) {\r\n    this.selectedId = id;\r\n    this.$value.textContent = this.current.value;\r\n\r\n    this.$element.querySelectorAll(`[data-type=\"item\"]`).forEach(element => {\r\n      element.classList.remove(\"selected\");\r\n    })\r\n    this.$element.querySelector(`[data-id=\"${this.selectedId}\"]`).classList.add(\"selected\");\r\n\r\n    this.options.onSelect ? this.options.onSelect(this.current) : null;\r\n\r\n    this.close();\r\n  }\r\n\r\n  open() {\r\n    this.$element.classList.add(\"open\");\r\n  }\r\n\r\n  close() {\r\n    this.$element.classList.remove(\"open\");\r\n  }\r\n\r\n  destroy() {\r\n    this.$element.removeEventListener(\"click\", this.clickHandler);\r\n    this.$element.innerHTML = \"\";\r\n  }\r\n}\n\n//# sourceURL=webpack:///./js/select.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;