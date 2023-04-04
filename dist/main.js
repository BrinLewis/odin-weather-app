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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n  font-family: \\\"Inter\\\", sans-serif;\\n  font-weight: 900;\\n  text-shadow: 0 0 3px rgba(255, 255, 255, 0.466);\\n}\\n\\nbody {\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.bg {\\n  position: absolute;\\n  height: 100vh;\\n  width: 100vw;\\n  object-fit: cover;\\n  z-index: 0;\\n}\\n\\n.main-container {\\n  z-index: 1;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 30px;\\n}\\n\\n#header {\\n  font-size: 70px;\\n  font-weight: 200;\\n  padding-top: 30px;\\n}\\n\\n.search-container {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n#search-input {\\n  border-radius: 15px;\\n  border: 1px solid black;\\n  background-color: rgba(0, 0, 0, 0.199);\\n  padding-left: 7px;\\n  font-size: 20px;\\n}\\n\\n#search-input::placeholder {\\n  color: black;\\n}\\n\\n#search-button {\\n  border: none;\\n  background-color: transparent;\\n  cursor: pointer;\\n  margin-left: 5px;\\n  padding: 2px;\\n  height: 28px;\\n  width: 50px;\\n}\\n\\n#search-button:hover {\\n  background-color: rgba(0, 0, 0, 0.199);\\n  border-radius: 15px;\\n}\\n\\n#search-icon {\\n  height: 25px;\\n  width: 25px;\\n}\\n\\n.heading {\\n  font-size: 30px;\\n  margin-top: 30px;\\n}\\n\\n.today-weather {\\n  display: grid;\\n  grid-template-columns: max-content max-content max-content;\\n  gap: 15px;\\n}\\n\\n.main-icon-container {\\n  display: flex;\\n}\\n\\n.main-icon {\\n  width: 128px;\\n  align-self: center;\\n}\\n\\n.icon {\\n  width: 64px;\\n}\\n\\n.main-info {\\n  display: grid;\\n  grid-template-columns: max-content max-content;\\n  grid-template-rows: max-content max-content;\\n  column-gap: 15px;\\n  row-gap: 10px;\\n}\\n\\n.day-location-container {\\n  grid-column: span 2;\\n}\\n\\n.current-day {\\n  font-size: 20px;\\n}\\n\\n.location {\\n  font-size: 25px;\\n}\\n\\n.current-temp {\\nfont-size: 60px;\\n}\\n\\n.current-time {\\n  font-size: 30px;\\n  font-weight: 200;\\n}\\n\\n.hourly-info-container {\\n  display: flex;\\n  gap: 10px;\\n  padding-top: 6px;\\n}\\n\\n.hourly-info {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.hourly-temp {\\n  font-size: 25px;\\n  padding-bottom: 5px;\\n}\\n\\n.hourly-time {\\n  font-size: 20px;\\n  font-weight: 200;\\n}\\n\\n.extra-info ul {\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n}\\n\\n.extra-info li {\\n  padding-bottom: 10px;\\n  font-weight: 900;\\n}\\n\\n.main-icon-container,\\n.day-location-container,\\n.current-values,\\n.hourly-info-container,\\n.extra-info,\\n.weekly-info {\\n  padding: 10px;\\n  background-color: rgba(0, 0, 0, 0.274);\\n  border: 1px solid rgba(0, 0, 0, 0.281);\\n  border-radius: 10px;\\n  \\n  box-shadow: 0 0 3px 1px rgba(255, 255, 255, 0.205);\\n}\\n\\n.weekly-info-container {\\n  display: flex;\\n  gap: 30px;\\n}\\n\\n.weekly-info {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 90px;\\n}\\n\\n.upcoming-day {\\n  font-size: 20px;\\n  padding-bottom: 10px;\\n}\\n\\n.upcoming-temp {\\n  font-size: 20px;\\n}\\n\\n.credits {\\n  position: absolute;\\n  bottom: 10px;\\n  align-self: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-weather-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-weather-app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/background-logic.js":
/*!*********************************!*\
  !*** ./src/background-logic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setBackgroundImg\": () => (/* binding */ setBackgroundImg)\n/* harmony export */ });\n/* harmony import */ var _assets_cloudy_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/cloudy.jpg */ \"./src/assets/cloudy.jpg\");\n/* harmony import */ var _assets_foggy_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/foggy.jpg */ \"./src/assets/foggy.jpg\");\n/* harmony import */ var _assets_rainy_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/rainy.jpg */ \"./src/assets/rainy.jpg\");\n/* harmony import */ var _assets_snowy_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/snowy.jpg */ \"./src/assets/snowy.jpg\");\n/* harmony import */ var _assets_stormy_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/stormy.jpg */ \"./src/assets/stormy.jpg\");\n/* harmony import */ var _assets_sunny_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/sunny.jpg */ \"./src/assets/sunny.jpg\");\n/* harmony import */ var _assets_default_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/default.jpg */ \"./src/assets/default.jpg\");\n\n\n\n\n\n\n\n\nlet image = \"default\";\n\nfunction setBackgroundImg(data) {\n  const condition = data.condition;\n\n  const allConditions = {\n    cloudy: [\"cloud\", \"overcast\"],\n    foggy: [\"mist\", \"fog\"],\n    rainy: [\"rain\", \"drizzle\"],\n    snowy: [\"snow\", \"ice\", \"icy\", \"sleet\", \"blizzard\"],\n    stormy: [\"thunder\"],\n    sunny: [\"sunny\", \"clear\"],\n  };\n\n  for (const [key, wordlist] of Object.entries(allConditions)) {\n    wordlist.forEach((word) => {\n      if (condition.toLowerCase().includes(word)) {\n        console.log(key)\n        return image = key;\n      }\n    });\n  }\n\n  const backgroundImg = document.querySelector(\".bg\");\n  backgroundImg.src = `./assets/${image}.jpg`;\n}\n\n\n//# sourceURL=webpack://odin-weather-app/./src/background-logic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _assets_magnify_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/magnify.svg */ \"./src/assets/magnify.svg\");\n/* harmony import */ var _background_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background-logic */ \"./src/background-logic.js\");\n\n\n\n\nconst searchIcon = document.getElementById(\"search-icon\");\nsearchIcon.src = \"./assets/magnify.svg\";\n\nlet defaultLocation = \"London\";\n\nasync function fetchData(location) {\n  try {\n    const response = await fetch(\n      `http://api.weatherapi.com/v1/forecast.json?key=222ad05058b944fc8ab123938232303&q=${location}&days=3&aqi=no&alerts=no`,\n      { mode: \"cors\" }\n    );\n    const data = await response.json();\n\n    // API can resolve the promise but return an error object with a message, if that happens, return the error message.\n    if (data.error) {\n      return [undefined, data.error.message];\n    } else {\n      return [data, undefined];\n    }\n  } catch {\n    return [undefined , \"Something went wrong, please refresh or try again later\"];\n  }\n}\n\nfunction getRelevantData(allData) {\n  let relevantData = {\n    refNum: allData.current.last_updated_epoch,\n    city: allData.location.name,\n    country: allData.location.country,\n    currentTempC: allData.current.temp_c,\n    currentTempF: allData.current.temp_f,\n    currentDateTime: allData.current.last_updated,\n    condition: allData.current.condition.text,\n    icon: allData.current.condition.icon,\n    feelsLikeC: allData.current.feelslike_c,\n    feelsLikeF: allData.current.feelslike_f,\n    humidity: allData.current.humidity,\n    chanceOfRainToday: allData.forecast.forecastday[0].day.daily_chance_of_rain,\n    windSpeed: allData.current.wind_mph,\n    allWeekForecast: allData.forecast.forecastday,\n    allDayForecast: allData.forecast.forecastday[0].hour,\n  };\n\n  return relevantData;\n}\n\nconst searchBar = document.getElementById(\"search-input\");\nsearchBar.addEventListener(\"keydown\", (e) => {\n  if (e.key === \"Enter\") {\n    renderPage();\n  }\n});\n\nconst searchBtn = document.getElementById(\"search-button\");\nsearchBtn.addEventListener(\"click\", () => {\n  renderPage();\n});\n\nfunction getLocation() {\n  let loc;\n  if (searchBar.value !== \"\") {\n    loc = searchBar.value;\n  } else {\n    loc = defaultLocation;\n  }\n  return loc;\n}\n\nasync function renderPage() {\n  const location = getLocation();\n\n  // fetchData will return either [data,] or [, errorMsg], if there is an error, alert msg and exit function.\n  const [data, errorMsg] = await fetchData(location);\n  if (errorMsg) {\n    alert(errorMsg);\n    return;\n  }\n  const relevantData = getRelevantData(data);\n  \n  (0,_background_logic__WEBPACK_IMPORTED_MODULE_2__.setBackgroundImg)(relevantData);\n  renderCurrent(relevantData);\n  renderNextHours(relevantData);\n  renderNextDays(relevantData);\n}\n\nfunction renderCurrent(data) {\n  const locationEl = document.querySelector(\".location\");\n  locationEl.textContent = `${data.city}, ${data.country}`;\n\n  const iconEl = document.querySelector(\".main-icon\");\n  const iconSrc = data.icon.replace(\"64x64\", \"128x128\");\n  iconEl.src = `http:${iconSrc}`;\n  iconEl.alt = `${data.condition} icon`;\n  iconEl.title = `${data.condition}`;\n\n  const dayEl = document.querySelector(\".current-day\");\n  const dateData = data.currentDateTime.split(\" \")[0];\n  const date = new Date(dateData);\n  const day = date.toLocaleDateString(\"en-GB\", { weekday: \"long\" });\n  dayEl.textContent = day;\n\n  const tempEl = document.querySelector(\".current-temp\");\n  tempEl.textContent = `${data.currentTempC}°`;\n\n  const timeEl = document.querySelector(\".current-time\");\n  const timeData = data.currentDateTime.split(\" \")[1];\n  timeEl.textContent = timeData;\n\n  const feelslikeEl = document.getElementById(\"feelslike\");\n  feelslikeEl.textContent = `Feels Like: ${data.feelsLikeC}°`;\n\n  const humidityEl = document.getElementById(\"humidity\");\n  humidityEl.textContent = `Humidity: ${data.humidity}%`;\n\n  const corEl = document.getElementById(\"chanceofrain\");\n  corEl.textContent = `Chance of Rain Today: ${data.chanceOfRainToday}%`;\n\n  const windspeedEl = document.getElementById(\"windspeed\");\n  windspeedEl.textContent = `Wind Speed: ${data.windSpeed}mph`;\n}\n\nfunction renderNextHours(data) {\n  let i = 0;\n  data.allDayForecast.forEach((hour) => {\n    if (data.refNum < hour.time_epoch && i < 4) {\n      createHourlyTab(hour, i);\n      i++;\n    }\n  });\n}\n\nfunction createHourlyTab(hour, i) {\n  const container = document.getElementById(`hour-${i + 1}`);\n\n  const temp = container.querySelector(\".hourly-temp\");\n  temp.textContent = `${Math.round(hour.temp_c)}°`;\n\n  const timeEl = container.querySelector(\".hourly-time\");\n  const timeData = hour.time.split(\" \")[1];\n  timeEl.textContent = timeData;\n\n  const icon = container.querySelector(\".icon\");\n  icon.src = `http:${hour.condition.icon}`;\n  icon.alt = `${hour.condition.text} icon`;\n  icon.title = `${hour.condition.text}`;\n}\n\nfunction renderNextDays(data) {\n  data.allWeekForecast.forEach((day, index) => {\n    if (index !== 0) {\n      createDayTab(day, index);\n    }\n  });\n}\n\nfunction createDayTab(dayData, dayIndex) {\n  const container = document.getElementById(`day-${dayIndex}`);\n\n  const date = new Date(dayData.date).toDateString();\n  const day = date.split(\" \")[0];\n  const dayEl = container.querySelector(\".upcoming-day\");\n  dayEl.textContent = day;\n\n  const temp = container.querySelector(\".upcoming-temp\");\n  temp.textContent = `${Math.round(dayData.day.mintemp_c)}° - ${Math.round(dayData.day.maxtemp_c)}°`;\n\n  const icon = container.querySelector(\".icon\");\n  icon.src = `http:${dayData.day.condition.icon}`;\n  icon.alt = `${dayData.day.condition.icon} icon`;\n  icon.title = `${dayData.day.condition.text}`;\n}\n\nrenderPage();\n\n\n//# sourceURL=webpack://odin-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/assets/cloudy.jpg":
/*!*******************************!*\
  !*** ./src/assets/cloudy.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/cloudy.jpg\";\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/cloudy.jpg?");

/***/ }),

/***/ "./src/assets/default.jpg":
/*!********************************!*\
  !*** ./src/assets/default.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/default.jpg\";\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/default.jpg?");

/***/ }),

/***/ "./src/assets/foggy.jpg":
/*!******************************!*\
  !*** ./src/assets/foggy.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/foggy.jpg\";\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/foggy.jpg?");

/***/ }),

/***/ "./src/assets/magnify.svg":
/*!********************************!*\
  !*** ./src/assets/magnify.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/magnify.svg\";\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/magnify.svg?");

/***/ }),

/***/ "./src/assets/rainy.jpg":
/*!******************************!*\
  !*** ./src/assets/rainy.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/rainy.jpg\";\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/rainy.jpg?");

/***/ }),

/***/ "./src/assets/snowy.jpg":
/*!******************************!*\
  !*** ./src/assets/snowy.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/snowy.jpg\";\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/snowy.jpg?");

/***/ }),

/***/ "./src/assets/stormy.jpg":
/*!*******************************!*\
  !*** ./src/assets/stormy.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/stormy.jpg\";\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/stormy.jpg?");

/***/ }),

/***/ "./src/assets/sunny.jpg":
/*!******************************!*\
  !*** ./src/assets/sunny.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/sunny.jpg\";\n\n//# sourceURL=webpack://odin-weather-app/./src/assets/sunny.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;