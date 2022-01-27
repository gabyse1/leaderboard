/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  font-family: \"Comfortaa\", cursive;\n  font-size: 1rem;\n  font-weight: 200;\n  letter-spacing: normal;\n  line-height: 1.1rem;\n  color: #023047;\n  text-transform: normal;\n}\n\nbody > * {\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 1.5rem auto;\n}\nbody > * h1,\nbody > * h2 {\n  font-family: \"Comfortaa\", cursive;\n  font-size: 1.6rem;\n  font-weight: bold;\n  letter-spacing: normal;\n  line-height: 1.3rem;\n  color: #023047;\n  text-transform: uppercase;\n  align-self: center;\n}\nbody > * h2 {\n  font-size: 1.25rem;\n  line-height: 1.3rem;\n}\nbody > * p {\n  margin: 0.5rem 0;\n}\n\nheader {\n  margin-bottom: 0;\n  border: 1px solid #ced4da;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\nmain > * {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\nmain > * > * {\n  width: 100%;\n}\n@media (min-width: 50rem) {\n  main {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: flex-start;\n    justify-content: space-between;\n  }\n  main > * {\n    padding: 0 1rem;\n  }\n  main .score__box {\n    width: 50%;\n  }\n  main .form__box {\n    width: 50%;\n    margin-top: 0;\n  }\n}\n@media (min-width: 56.25rem) {\n  main > * {\n    padding: 0 2rem;\n  }\n}\n\n.btn {\n  border: 2px solid #219ebc;\n  border-radius: 3px;\n  padding: 0.5rem 1rem;\n  font-family: \"Comfortaa\", cursive;\n  font-size: 1rem;\n  font-weight: 200;\n  letter-spacing: normal;\n  line-height: 1.1rem;\n  color: #219ebc;\n  text-transform: normal;\n  background-color: transparent;\n  transition: background-color ease-out 250ms;\n}\n\n.btn:hover {\n  background-color: #219ebc;\n  color: #fff;\n  cursor: pointer;\n}\n\n.main__box-title {\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.score__list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  border: 1px solid #ced4da;\n}\n.score__list .score__list-item {\n  width: 100%;\n  padding: 0.25rem 0.5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n}\n.score__list .score__list-item .score__item-score {\n  margin-left: 1rem;\n}\n@media (min-width: 31.25rem) {\n  .score__list .score__list-item {\n    padding: 0.25rem 1rem;\n  }\n}\n.score__list .score__list-item:nth-child(even) {\n  background-color: #dee2e6;\n}\n\n.form__box {\n  margin-top: 1rem;\n}\n.form__box .main__box-title {\n  justify-content: center;\n}\n.form__box #form__input {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-items: center;\n  padding: 1rem;\n}\n.form__box #form__input .input__field {\n  width: 100%;\n  max-width: 500px;\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n  border: none;\n  outline: 1px solid #ced4da;\n  font-family: \"Comfortaa\", cursive;\n  font-size: 1rem;\n  font-weight: 200;\n  letter-spacing: normal;\n  line-height: 1.1rem;\n  color: #023047;\n  text-transform: normal;\n}\n.form__box #form__input .input__field:focus {\n  outline: 1px solid #219ebc;\n}\n.form__box #form__input .btn {\n  margin-top: 1rem;\n  align-self: flex-end;\n}\n\n/* FORM VALIDATION */\n.form__message {\n  display: none;\n  padding: 0.3rem;\n  margin: 0.5rem 0;\n  color: #05d3b1;\n}\n\n.error-message {\n  color: #fd3f3f;\n}\n\n.visible {\n  display: block;\n}", "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/_typography.scss"],"names":[],"mappings":"AAEA;;;EAGE,sBAAA;AAAF;;AAGA;EACE,WAAA;EACA,UAAA;EACA,SAAA;ECSA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EAbA,iCARG;EASH,eAFc;EAGd,gBAHwB;EAIxB,sBAJ6C;EAK7C,mBALiC;EAMjC,cAZK;EAaL,sBAPwE;ADa1E;;AALA;EACE,UAAA;ECEA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EDDA,mBAAA;AASF;AAPE;;ECdA,iCARG;EASH,iBDeqB;ECdrB,iBDc6C;ECb7C,sBAJ6C;EAK7C,mBDYiC;ECXjC,cAZK;EAaL,yBDUwD;EAEtD,kBAAA;AAcJ;AAXE;EACE,kBAAA;EACA,mBAAA;AAaJ;AAVE;EACE,gBAAA;AAYJ;;AARA;EACE,gBAAA;EACA,yBAAA;AAWF;;AARA;EC1BE,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;ADsCF;AAZE;EACE,WAAA;EC9BF,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;AD6CF;AAdI;EACE,WAAA;AAgBN;ACrCE;EDYF;ICnBE,aAAA;IACA,mBAAA;IACA,2BAAA;IACA,uBAAA;IDgCE,8BAAA;EAiBF;EAfE;IACE,eAAA;EAiBJ;EAdE;IACE,UAAA;EAgBJ;EAbE;IACE,UAAA;IACA,aAAA;EAeJ;AACF;ACxDE;ED6CE;IACE,eAAA;EAcJ;AACF;;AAVA;EACE,yBAAA;EACA,kBAAA;EACA,oBAAA;EC9EA,iCARG;EASH,eAFc;EAGd,gBAHwB;EAIxB,sBAJ6C;EAK7C,mBALiC;EAMjC,cAXO;EAYP,sBAPwE;EDmFxE,6BAAA;EACA,2CAAA;AAiBF;;AAdA;EACE,yBC7FO;ED8FP,WAAA;EACA,eAAA;AAiBF;;AAdA;EACE,aAAA;EC5EA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,uBAAA;ED6EA,8BAAA;EACA,mBAAA;AAkBF;;AAfA;EACE,gBAAA;EACA,SAAA;EACA,UAAA;EACA,yBAAA;AAkBF;AAhBE;EACE,WAAA;EACA,uBAAA;EC5FF,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,uBAAA;ED6FE,8BAAA;EACA,mBAAA;AAmBJ;AAjBI;EACE,iBAAA;AAmBN;AChHE;EDmFA;IAcI,qBAAA;EAmBJ;AACF;AAhBE;EACE,yBClIS;ADoJb;;AAdA;EACE,gBAAA;AAiBF;AAfE;EACE,uBAAA;AAiBJ;AAdE;EC/HA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;ED+HE,mBAAA;EACA,aAAA;AAkBJ;AAhBI;EACE,WAAA;EACA,gBAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;EACA,0BAAA;ECrJJ,iCARG;EASH,eAFc;EAGd,gBAHwB;EAIxB,sBAJ6C;EAK7C,mBALiC;EAMjC,cAZK;EAaL,sBAPwE;AD+K1E;AApBI;EACE,0BAAA;AAsBN;AAnBI;EACE,gBAAA;EACA,oBAAA;AAqBN;;AAhBA,oBAAA;AACA;EACE,aAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;AAmBF;;AAhBA;EACE,cAAA;AAmBF;;AAhBA;EACE,cAAA;AAmBF","sourcesContent":["@import 'typography';\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n\r\n  @include flex-colum();\r\n  @include font();\r\n}\r\n\r\nbody > * {\r\n  width: 90%;\r\n\r\n  @include flex-colum();\r\n\r\n  margin: 1.5rem auto;\r\n\r\n  h1,\r\n  h2 {\r\n    @include font($fs: 1.6rem, $lh:1.3rem, $fw:bold, $tt: uppercase);\r\n\r\n    align-self: center;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 1.25rem;\r\n    line-height: 1.3rem;\r\n  }\r\n\r\n  p {\r\n    margin: 0.5rem 0;\r\n  }\r\n}\r\n\r\nheader {\r\n  margin-bottom: 0;\r\n  border: 1px solid $gray-dark;\r\n}\r\n\r\nmain {\r\n  @include flex-colum();\r\n\r\n  > * {\r\n    width: 100%;\r\n\r\n    @include flex-colum();\r\n\r\n    > * {\r\n      width: 100%;\r\n    }\r\n  }\r\n\r\n  @include mq() {\r\n    @include flex-row();\r\n\r\n    justify-content: space-between;\r\n\r\n    > * {\r\n      padding: 0 1rem;\r\n    }\r\n\r\n    .score__box {\r\n      width: 50%;\r\n    }\r\n\r\n    .form__box {\r\n      width: 50%;\r\n      margin-top: 0;\r\n    }\r\n  }\r\n\r\n  @include mq($mw: 56.25rem) {\r\n    > * {\r\n      padding: 0 2rem;\r\n    }\r\n  }\r\n}\r\n\r\n.btn {\r\n  border: 2px solid $accent;\r\n  border-radius: 3px;\r\n  padding: 0.5rem 1rem;\r\n\r\n  @include font($color: $accent);\r\n\r\n  background-color: transparent;\r\n  transition: background-color ease-out 250ms;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: $accent;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.main__box-title {\r\n  padding: 1rem;\r\n\r\n  @include flex-row();\r\n\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.score__list {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 1px solid $gray-dark;\r\n\r\n  .score__list-item {\r\n    width: 100%;\r\n    padding: 0.25rem 0.5rem;\r\n\r\n    @include flex-row();\r\n\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n    .score__item-score {\r\n      margin-left: 1rem;\r\n    }\r\n\r\n    @include mq($mw: 31.25rem) {\r\n      padding: 0.25rem 1rem;\r\n    }\r\n  }\r\n\r\n  .score__list-item:nth-child(even) {\r\n    background-color: $gray-light;\r\n  }\r\n}\r\n\r\n.form__box {\r\n  margin-top: 1rem;\r\n\r\n  .main__box-title {\r\n    justify-content: center;\r\n  }\r\n\r\n  #form__input {\r\n    @include flex-colum();\r\n\r\n    align-items: center;\r\n    padding: 1rem;\r\n\r\n    .input__field {\r\n      width: 100%;\r\n      max-width: 500px;\r\n      margin-bottom: 1rem;\r\n      padding: 0.5rem;\r\n      border: none;\r\n      outline: 1px solid $gray-dark;\r\n\r\n      @include font();\r\n    }\r\n\r\n    .input__field:focus {\r\n      outline: 1px solid $accent;\r\n    }\r\n\r\n    .btn {\r\n      margin-top: 1rem;\r\n      align-self: flex-end;\r\n    }\r\n  }\r\n}\r\n\r\n/* FORM VALIDATION */\r\n.form__message {\r\n  display: none;\r\n  padding: 0.3rem;\r\n  margin: 0.5rem 0;\r\n  color: #05d3b1;\r\n}\r\n\r\n.error-message {\r\n  color: #fd3f3f;\r\n}\r\n\r\n.visible {\r\n  display: block;\r\n}\r\n","@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');\r\n\r\n$ff: 'Comfortaa', cursive;\r\n$base: #023047;\r\n$accent: #219ebc;\r\n$pink: #e68ab4;\r\n$gray-light: #dee2e6;\r\n$gray-dark: #ced4da;\r\n\r\n@mixin font($fs:1rem, $fw:200, $lh:1.1rem, $ls:normal, $color: $base, $tt:normal) {\r\n  font-family: $ff;\r\n  font-size: $fs;\r\n  font-weight: $fw;\r\n  letter-spacing: $ls;\r\n  line-height: $lh;\r\n  color: $color;\r\n  text-transform: $tt;\r\n}\r\n\r\n@mixin flex-colum {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n@mixin flex-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n@mixin mq ($mw:50rem) {\r\n  @media (min-width: $mw) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dataBoard.js":
/*!**************************!*\
  !*** ./src/dataBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataBoard)
/* harmony export */ });
class DataBoard {
  constructor() {
    this.data = [];
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
    this.idGame = '';
    this.message = '';
  }

  refreshScores = () => {
    this.data.sort((a, b) => b.score - a.score);
  }

  getScores = async () => {
    try {
      await fetch(`${this.url}games/${this.idGame}/scores/`)
        .then((response) => response.json())
        .then((data) => {
          this.data = data.result;
          this.refreshScores();
          if (this.data.length === 0) {
            this.data = [{ user: `Game with ID: ${this.idGame} is empty. </br> Add scores`, score: '' }];
          }
        });
    } catch {
      this.data = [{ user: 'Data is not available for now. Try again later.', score: '' }];
    }
    return this.data;
  }

  addScore = async (user1, score1) => {
    try {
      await fetch(`${this.url}games/${this.idGame}/scores/`, {
        method: 'POST',
        body: JSON.stringify({ user: user1, score: score1 }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result === 'Leaderboard score created correctly.') this.message = 'Successful';
          else this.message = data.result;
        });
    } catch {
      this.message = 'The score could not be saved. Try it again later.';
    }
  }

  addGame = async () => {
    try {
      if (!this.loadLocalStorage()) {
        await fetch(`${this.url}games/`, {
          method: 'POST',
          body: JSON.stringify({ name: "Gaby's game" }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            this.idGame = data.result.slice(14, 34);
            if (data.result === `Game with ID: ${this.idGame} added.`) {
              this.message = 'Successful';
              this.saveLocalStorage();
            } else this.message = data.result;
          });
      } else this.message = 'Successful';
    } catch {
      this.message = 'The game could not be created. Try it again later.';
    }
  }

  saveLocalStorage = () => {
    localStorage.setItem('GAMES', JSON.stringify({ idG: this.idGame, nameG: "Gaby's game" }));
  };

  loadLocalStorage = () => {
    const localGames = JSON.parse(localStorage.getItem('GAMES'));
    if (localGames && localGames.idG) {
      this.idGame = localGames.idG;
      return true;
    }
    return false;
  };
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _dataBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataBoard.js */ "./src/dataBoard.js");



const data = new _dataBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
const refreshBtn = document.querySelector('#btn__refresh');
const inputForm = document.querySelector('#form__input');
const inputUser = document.querySelector('#inp__user');
const inputScore = document.querySelector('#inp__score');
const scoreList = document.querySelector('#score__list');
const formMessage = document.querySelector('#form__message');

const displayMessage = (err) => {
  if (err) {
    formMessage.textContent = err;
    formMessage.classList.add('error-message');
  }
  formMessage.classList.add('visible');
  setTimeout(() => {
    formMessage.classList.remove('visible');
  }, 5000);
};

const validateForm = () => {
  formMessage.classList.remove('error-message');
  if (inputUser.value === '') {
    inputUser.focus();
    formMessage.textContent = 'User field is required.';
    formMessage.classList.add('error-message');
    return false;
  }
  if (inputScore.value === '' || inputScore.value <= 0) {
    inputScore.focus();
    formMessage.textContent = 'Score field must be a positive number.';
    formMessage.classList.add('error-message');
    return false;
  }
  return true;
};

const getScoresList = () => {
  data.getScores().then((elements) => {
    scoreList.innerHTML = '';
    elements.forEach((el) => {
      const listItem = document.createElement('li');
      listItem.classList.add('score__list-item');
      listItem.innerHTML = `<p class="score__item-name">${el.user}</p>
          <span class="score__item-score">${el.score}</span>`;
      scoreList.appendChild(listItem);
    });
  });
};

const addNewScore = () => {
  data.addScore(inputUser.value, inputScore.value).then(() => {
    if (data.message !== 'Successful') displayMessage(data.message);
    else getScoresList();
  });
};

const addNewGame = () => {
  data.addGame().then(() => {
    if (data.message !== 'Successful') displayMessage(data.message);
    else getScoresList();
  });
};

// events listener
refreshBtn.addEventListener('click', getScoresList);

inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    addNewScore();
    inputUser.value = '';
    inputScore.value = '';
    formMessage.textContent = 'Score added successfully';
  }
  displayMessage();
});

window.addEventListener('load', addNewGame);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz8yZTRkIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvZGF0YUJvYXJkLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21mb3J0YWE6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ29tZm9ydGFhXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vcm1hbDtcXG59XFxuXFxuYm9keSA+ICoge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW46IDEuNXJlbSBhdXRvO1xcbn1cXG5ib2R5ID4gKiBoMSxcXG5ib2R5ID4gKiBoMiB7XFxuICBmb250LWZhbWlseTogXFxcIkNvbWZvcnRhYVxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XFxuICBjb2xvcjogIzAyMzA0NztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbmJvZHkgPiAqIGgyIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XFxufVxcbmJvZHkgPiAqIHAge1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbm1haW4gPiAqIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxubWFpbiA+ICogPiAqIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTByZW0pIHtcXG4gIG1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICBtYWluID4gKiB7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gIH1cXG4gIG1haW4gLnNjb3JlX19ib3gge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbiAgbWFpbiAuZm9ybV9fYm94IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDU2LjI1cmVtKSB7XFxuICBtYWluID4gKiB7XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gIH1cXG59XFxuXFxuLmJ0biB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMjE5ZWJjO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LWZhbWlseTogXFxcIkNvbWZvcnRhYVxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjFyZW07XFxuICBjb2xvcjogIzIxOWViYztcXG4gIHRleHQtdHJhbnNmb3JtOiBub3JtYWw7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMjUwbXM7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOWViYztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFpbl9fYm94LXRpdGxlIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNjb3JlX19saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcXG59XFxuLnNjb3JlX19saXN0IC5zY29yZV9fbGlzdC1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNjb3JlX19saXN0IC5zY29yZV9fbGlzdC1pdGVtIC5zY29yZV9faXRlbS1zY29yZSB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMxLjI1cmVtKSB7XFxuICAuc2NvcmVfX2xpc3QgLnNjb3JlX19saXN0LWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuICB9XFxufVxcbi5zY29yZV9fbGlzdCAuc2NvcmVfX2xpc3QtaXRlbTpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcXG59XFxuXFxuLmZvcm1fX2JveCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4uZm9ybV9fYm94IC5tYWluX19ib3gtdGl0bGUge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb3JtX19ib3ggI2Zvcm1fX2lucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmZvcm1fX2JveCAjZm9ybV9faW5wdXQgLmlucHV0X19maWVsZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICNjZWQ0ZGE7XFxuICBmb250LWZhbWlseTogXFxcIkNvbWZvcnRhYVxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjFyZW07XFxuICBjb2xvcjogIzAyMzA0NztcXG4gIHRleHQtdHJhbnNmb3JtOiBub3JtYWw7XFxufVxcbi5mb3JtX19ib3ggI2Zvcm1fX2lucHV0IC5pbnB1dF9fZmllbGQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICMyMTllYmM7XFxufVxcbi5mb3JtX19ib3ggI2Zvcm1fX2lucHV0IC5idG4ge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4vKiBGT1JNIFZBTElEQVRJT04gKi9cXG4uZm9ybV9fbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gIGNvbG9yOiAjMDVkM2IxO1xcbn1cXG5cXG4uZXJyb3ItbWVzc2FnZSB7XFxuICBjb2xvcjogI2ZkM2YzZjtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL190eXBvZ3JhcGh5LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztFQUdFLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUNTQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBYkEsaUNBUkc7RUFTSCxlQUZjO0VBR2QsZ0JBSHdCO0VBSXhCLHNCQUo2QztFQUs3QyxtQkFMaUM7RUFNakMsY0FaSztFQWFMLHNCQVB3RTtBRGExRTs7QUFMQTtFQUNFLFVBQUE7RUNFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VEREEsbUJBQUE7QUFTRjtBQVBFOztFQ2RBLGlDQVJHO0VBU0gsaUJEZXFCO0VDZHJCLGlCRGM2QztFQ2I3QyxzQkFKNkM7RUFLN0MsbUJEWWlDO0VDWGpDLGNBWks7RUFhTCx5QkRVd0Q7RUFFdEQsa0JBQUE7QUFjSjtBQVhFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQWFKO0FBVkU7RUFDRSxnQkFBQTtBQVlKOztBQVJBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBQVdGOztBQVJBO0VDMUJFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QURzQ0Y7QUFaRTtFQUNFLFdBQUE7RUM5QkYsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBRDZDRjtBQWRJO0VBQ0UsV0FBQTtBQWdCTjtBQ3JDRTtFRFlGO0lDbkJFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDJCQUFBO0lBQ0EsdUJBQUE7SURnQ0UsOEJBQUE7RUFpQkY7RUFmRTtJQUNFLGVBQUE7RUFpQko7RUFkRTtJQUNFLFVBQUE7RUFnQko7RUFiRTtJQUNFLFVBQUE7SUFDQSxhQUFBO0VBZUo7QUFDRjtBQ3hERTtFRDZDRTtJQUNFLGVBQUE7RUFjSjtBQUNGOztBQVZBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VDOUVBLGlDQVJHO0VBU0gsZUFGYztFQUdkLGdCQUh3QjtFQUl4QixzQkFKNkM7RUFLN0MsbUJBTGlDO0VBTWpDLGNBWE87RUFZUCxzQkFQd0U7RURtRnhFLDZCQUFBO0VBQ0EsMkNBQUE7QUFpQkY7O0FBZEE7RUFDRSx5QkM3Rk87RUQ4RlAsV0FBQTtFQUNBLGVBQUE7QUFpQkY7O0FBZEE7RUFDRSxhQUFBO0VDNUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUQ2RUEsOEJBQUE7RUFDQSxtQkFBQTtBQWtCRjs7QUFmQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQWtCRjtBQWhCRTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQzVGRixhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VENkZFLDhCQUFBO0VBQ0EsbUJBQUE7QUFtQko7QUFqQkk7RUFDRSxpQkFBQTtBQW1CTjtBQ2hIRTtFRG1GQTtJQWNJLHFCQUFBO0VBbUJKO0FBQ0Y7QUFoQkU7RUFDRSx5QkNsSVM7QURvSmI7O0FBZEE7RUFDRSxnQkFBQTtBQWlCRjtBQWZFO0VBQ0UsdUJBQUE7QUFpQko7QUFkRTtFQy9IQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VEK0hFLG1CQUFBO0VBQ0EsYUFBQTtBQWtCSjtBQWhCSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQ3JKSixpQ0FSRztFQVNILGVBRmM7RUFHZCxnQkFId0I7RUFJeEIsc0JBSjZDO0VBSzdDLG1CQUxpQztFQU1qQyxjQVpLO0VBYUwsc0JBUHdFO0FEK0sxRTtBQXBCSTtFQUNFLDBCQUFBO0FBc0JOO0FBbkJJO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQXFCTjs7QUFoQkEsb0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBbUJGOztBQWhCQTtFQUNFLGNBQUE7QUFtQkY7O0FBaEJBO0VBQ0UsY0FBQTtBQW1CRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICd0eXBvZ3JhcGh5JztcXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIGZsZXgtY29sdW0oKTtcXHJcXG4gIEBpbmNsdWRlIGZvbnQoKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSA+ICoge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIGZsZXgtY29sdW0oKTtcXHJcXG5cXHJcXG4gIG1hcmdpbjogMS41cmVtIGF1dG87XFxyXFxuXFxyXFxuICBoMSxcXHJcXG4gIGgyIHtcXHJcXG4gICAgQGluY2x1ZGUgZm9udCgkZnM6IDEuNnJlbSwgJGxoOjEuM3JlbSwgJGZ3OmJvbGQsICR0dDogdXBwZXJjYXNlKTtcXHJcXG5cXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgaDIge1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBwIHtcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkZ3JheS1kYXJrO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIEBpbmNsdWRlIGZsZXgtY29sdW0oKTtcXHJcXG5cXHJcXG4gID4gKiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtKCk7XFxyXFxuXFxyXFxuICAgID4gKiB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1xKCkge1xcclxcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xcclxcblxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgID4gKiB7XFxyXFxuICAgICAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zY29yZV9fYm94IHtcXHJcXG4gICAgICB3aWR0aDogNTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb3JtX19ib3gge1xcclxcbiAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgbXEoJG13OiA1Ni4yNXJlbSkge1xcclxcbiAgICA+ICoge1xcclxcbiAgICAgIHBhZGRpbmc6IDAgMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICRhY2NlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIGZvbnQoJGNvbG9yOiAkYWNjZW50KTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dCAyNTBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYWluX19ib3gtdGl0bGUge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIGZsZXgtcm93KCk7XFxyXFxuXFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVfX2xpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkZ3JheS1kYXJrO1xcclxcblxcclxcbiAgLnNjb3JlX19saXN0LWl0ZW0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XFxyXFxuXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgLnNjb3JlX19pdGVtLXNjb3JlIHtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAaW5jbHVkZSBtcSgkbXc6IDMxLjI1cmVtKSB7XFxyXFxuICAgICAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2NvcmVfX2xpc3QtaXRlbTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1saWdodDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1fX2JveCB7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcblxcclxcbiAgLm1haW5fX2JveC10aXRsZSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2Zvcm1fX2lucHV0IHtcXHJcXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bSgpO1xcclxcblxcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgICAuaW5wdXRfX2ZpZWxkIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICBvdXRsaW5lOiAxcHggc29saWQgJGdyYXktZGFyaztcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBmb250KCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmlucHV0X19maWVsZDpmb2N1cyB7XFxyXFxuICAgICAgb3V0bGluZTogMXB4IHNvbGlkICRhY2NlbnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ0biB7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBGT1JNIFZBTElEQVRJT04gKi9cXHJcXG4uZm9ybV9fbWVzc2FnZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXHJcXG4gIGNvbG9yOiAjMDVkM2IxO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItbWVzc2FnZSB7XFxyXFxuICBjb2xvcjogI2ZkM2YzZjtcXHJcXG59XFxyXFxuXFxyXFxuLnZpc2libGUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29tZm9ydGFhOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4kZmY6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xcclxcbiRiYXNlOiAjMDIzMDQ3O1xcclxcbiRhY2NlbnQ6ICMyMTllYmM7XFxyXFxuJHBpbms6ICNlNjhhYjQ7XFxyXFxuJGdyYXktbGlnaHQ6ICNkZWUyZTY7XFxyXFxuJGdyYXktZGFyazogI2NlZDRkYTtcXHJcXG5cXHJcXG5AbWl4aW4gZm9udCgkZnM6MXJlbSwgJGZ3OjIwMCwgJGxoOjEuMXJlbSwgJGxzOm5vcm1hbCwgJGNvbG9yOiAkYmFzZSwgJHR0Om5vcm1hbCkge1xcclxcbiAgZm9udC1mYW1pbHk6ICRmZjtcXHJcXG4gIGZvbnQtc2l6ZTogJGZzO1xcclxcbiAgZm9udC13ZWlnaHQ6ICRmdztcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAkbHM7XFxyXFxuICBsaW5lLWhlaWdodDogJGxoO1xcclxcbiAgY29sb3I6ICRjb2xvcjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiAkdHQ7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmbGV4LWNvbHVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmbGV4LXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gbXEgKCRtdzo1MHJlbSkge1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtdykge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YUJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy51cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvJztcbiAgICB0aGlzLmlkR2FtZSA9ICcnO1xuICAgIHRoaXMubWVzc2FnZSA9ICcnO1xuICB9XG5cbiAgcmVmcmVzaFNjb3JlcyA9ICgpID0+IHtcbiAgICB0aGlzLmRhdGEuc29ydCgoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmUpO1xuICB9XG5cbiAgZ2V0U2NvcmVzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBmZXRjaChgJHt0aGlzLnVybH1nYW1lcy8ke3RoaXMuaWRHYW1lfS9zY29yZXMvYClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoU2NvcmVzKCk7XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IFt7IHVzZXI6IGBHYW1lIHdpdGggSUQ6ICR7dGhpcy5pZEdhbWV9IGlzIGVtcHR5LiA8L2JyPiBBZGQgc2NvcmVzYCwgc2NvcmU6ICcnIH1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aGlzLmRhdGEgPSBbeyB1c2VyOiAnRGF0YSBpcyBub3QgYXZhaWxhYmxlIGZvciBub3cuIFRyeSBhZ2FpbiBsYXRlci4nLCBzY29yZTogJycgfV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBhZGRTY29yZSA9IGFzeW5jICh1c2VyMSwgc2NvcmUxKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGZldGNoKGAke3RoaXMudXJsfWdhbWVzLyR7dGhpcy5pZEdhbWV9L3Njb3Jlcy9gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXI6IHVzZXIxLCBzY29yZTogc2NvcmUxIH0pLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PT0gJ0xlYWRlcmJvYXJkIHNjb3JlIGNyZWF0ZWQgY29ycmVjdGx5LicpIHRoaXMubWVzc2FnZSA9ICdTdWNjZXNzZnVsJztcbiAgICAgICAgICBlbHNlIHRoaXMubWVzc2FnZSA9IGRhdGEucmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9ICdUaGUgc2NvcmUgY291bGQgbm90IGJlIHNhdmVkLiBUcnkgaXQgYWdhaW4gbGF0ZXIuJztcbiAgICB9XG4gIH1cblxuICBhZGRHYW1lID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXRoaXMubG9hZExvY2FsU3RvcmFnZSgpKSB7XG4gICAgICAgIGF3YWl0IGZldGNoKGAke3RoaXMudXJsfWdhbWVzL2AsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWU6IFwiR2FieSdzIGdhbWVcIiB9KSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaWRHYW1lID0gZGF0YS5yZXN1bHQuc2xpY2UoMTQsIDM0KTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PT0gYEdhbWUgd2l0aCBJRDogJHt0aGlzLmlkR2FtZX0gYWRkZWQuYCkge1xuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnU3VjY2Vzc2Z1bCc7XG4gICAgICAgICAgICAgIHRoaXMuc2F2ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHRoaXMubWVzc2FnZSA9IGRhdGEucmVzdWx0O1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHRoaXMubWVzc2FnZSA9ICdTdWNjZXNzZnVsJztcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9ICdUaGUgZ2FtZSBjb3VsZCBub3QgYmUgY3JlYXRlZC4gVHJ5IGl0IGFnYWluIGxhdGVyLic7XG4gICAgfVxuICB9XG5cbiAgc2F2ZUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnR0FNRVMnLCBKU09OLnN0cmluZ2lmeSh7IGlkRzogdGhpcy5pZEdhbWUsIG5hbWVHOiBcIkdhYnkncyBnYW1lXCIgfSkpO1xuICB9O1xuXG4gIGxvYWRMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9jYWxHYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0dBTUVTJykpO1xuICAgIGlmIChsb2NhbEdhbWVzICYmIGxvY2FsR2FtZXMuaWRHKSB7XG4gICAgICB0aGlzLmlkR2FtZSA9IGxvY2FsR2FtZXMuaWRHO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgRGF0YUJvYXJkIGZyb20gJy4vZGF0YUJvYXJkLmpzJztcblxuY29uc3QgZGF0YSA9IG5ldyBEYXRhQm9hcmQoKTtcbmNvbnN0IHJlZnJlc2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuX19yZWZyZXNoJyk7XG5jb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9faW5wdXQnKTtcbmNvbnN0IGlucHV0VXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnBfX3VzZXInKTtcbmNvbnN0IGlucHV0U2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wX19zY29yZScpO1xuY29uc3Qgc2NvcmVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlX19saXN0Jyk7XG5jb25zdCBmb3JtTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX19tZXNzYWdlJyk7XG5cbmNvbnN0IGRpc3BsYXlNZXNzYWdlID0gKGVycikgPT4ge1xuICBpZiAoZXJyKSB7XG4gICAgZm9ybU1lc3NhZ2UudGV4dENvbnRlbnQgPSBlcnI7XG4gICAgZm9ybU1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZXJyb3ItbWVzc2FnZScpO1xuICB9XG4gIGZvcm1NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZm9ybU1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICB9LCA1MDAwKTtcbn07XG5cbmNvbnN0IHZhbGlkYXRlRm9ybSA9ICgpID0+IHtcbiAgZm9ybU1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3ItbWVzc2FnZScpO1xuICBpZiAoaW5wdXRVc2VyLnZhbHVlID09PSAnJykge1xuICAgIGlucHV0VXNlci5mb2N1cygpO1xuICAgIGZvcm1NZXNzYWdlLnRleHRDb250ZW50ID0gJ1VzZXIgZmllbGQgaXMgcmVxdWlyZWQuJztcbiAgICBmb3JtTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvci1tZXNzYWdlJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChpbnB1dFNjb3JlLnZhbHVlID09PSAnJyB8fCBpbnB1dFNjb3JlLnZhbHVlIDw9IDApIHtcbiAgICBpbnB1dFNjb3JlLmZvY3VzKCk7XG4gICAgZm9ybU1lc3NhZ2UudGV4dENvbnRlbnQgPSAnU2NvcmUgZmllbGQgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlci4nO1xuICAgIGZvcm1NZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1lc3NhZ2UnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBnZXRTY29yZXNMaXN0ID0gKCkgPT4ge1xuICBkYXRhLmdldFNjb3JlcygpLnRoZW4oKGVsZW1lbnRzKSA9PiB7XG4gICAgc2NvcmVMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdzY29yZV9fbGlzdC1pdGVtJyk7XG4gICAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJzY29yZV9faXRlbS1uYW1lXCI+JHtlbC51c2VyfTwvcD5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNjb3JlX19pdGVtLXNjb3JlXCI+JHtlbC5zY29yZX08L3NwYW4+YDtcbiAgICAgIHNjb3JlTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkTmV3U2NvcmUgPSAoKSA9PiB7XG4gIGRhdGEuYWRkU2NvcmUoaW5wdXRVc2VyLnZhbHVlLCBpbnB1dFNjb3JlLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICBpZiAoZGF0YS5tZXNzYWdlICE9PSAnU3VjY2Vzc2Z1bCcpIGRpc3BsYXlNZXNzYWdlKGRhdGEubWVzc2FnZSk7XG4gICAgZWxzZSBnZXRTY29yZXNMaXN0KCk7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkTmV3R2FtZSA9ICgpID0+IHtcbiAgZGF0YS5hZGRHYW1lKCkudGhlbigoKSA9PiB7XG4gICAgaWYgKGRhdGEubWVzc2FnZSAhPT0gJ1N1Y2Nlc3NmdWwnKSBkaXNwbGF5TWVzc2FnZShkYXRhLm1lc3NhZ2UpO1xuICAgIGVsc2UgZ2V0U2NvcmVzTGlzdCgpO1xuICB9KTtcbn07XG5cbi8vIGV2ZW50cyBsaXN0ZW5lclxucmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldFNjb3Jlc0xpc3QpO1xuXG5pbnB1dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAodmFsaWRhdGVGb3JtKCkpIHtcbiAgICBhZGROZXdTY29yZSgpO1xuICAgIGlucHV0VXNlci52YWx1ZSA9ICcnO1xuICAgIGlucHV0U2NvcmUudmFsdWUgPSAnJztcbiAgICBmb3JtTWVzc2FnZS50ZXh0Q29udGVudCA9ICdTY29yZSBhZGRlZCBzdWNjZXNzZnVsbHknO1xuICB9XG4gIGRpc3BsYXlNZXNzYWdlKCk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhZGROZXdHYW1lKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==