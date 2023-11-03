/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/STYLES/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/STYLES/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../ASSETS/image3.jpg */ "./src/ASSETS/image3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
   --primary-bg-clr:#181818;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    height: 100vh;
    background-color: #181818;
    color: #ffffff;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.container{
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
  
 
}


/* working with the sidebar */
.sidebar{
    /* background-color: black; */
    box-shadow: 5px 5px 10px 5px black;
    grid-row: span 2;
    padding: 20px;
    border-radius: 10px;
}
.sidebar-column-container{
    display: flex;
    gap: 5px;
  

}
.sidebar-one{
    box-shadow: 5px 5px 10px 5px black;
    border-radius: 40px;
    margin-right: 20px;
    border: none;
}
.sidebar-two{
    flex: 2;
    background-color: var(--primary-bg-clr);
    padding: 20px;
    color: white;
}

.sidebar-headings{
    padding-top: 20px;
    text-align: center;
    color: #d81159;
   
}
.sidebar-headings i{
    font-size: 2.5rem;
    padding-bottom: 10px;
    color: #edf6f9;
}
.sidebar-details{
    padding: 20px;
    position: relative;
}

.sidebar-details li{
    padding-top: 20px;
    list-style-type: none;
    font-size: 1.7rem;
    color: turquoise;
    cursor: pointer;
}

#notification{
   padding-top: 100px;
    
}

.user-input input{
    padding: 10px 30px 10px 30px;
    border: none;
    outline: none;
    background-color: #413839;
    border-radius: 10px;
    color: turquoise;
    margin-top: 10px;

     
}
.user-input input:focus{
    outline:1px solid  aqua;
}
.user-input>label{
   text-align: center;
   color: #f5f5f5;
}
.myInput{
    /* text-align: center; */
}

.location-container{
    margin-top: 20px;
    display: flex;
    gap: 5px;
   
}
.location-details{
/* background-color: green; */
padding: 10px;
}
.weather-details{
    /* background-color: turquoise; */
    /* padding: 20px; */
    color: aqua;

}
.mYminmax{
    color: #d81159;
    font-weight: bold;
    font-size: 2.5rem;
}

.image-icon{
    margin-right: 10px;


}
.image-icon span{
    padding-left: 10px;
    color: aqua;
   
}
.longLat-details{
    padding-top: 50px;
}
.longLat-details p{
    color: aqua;
    font-size: 1.5rem;
    font-weight: bold;
}
.longLat-details span{
    color: #d81159;
}

.main-one{
    box-shadow: 5px 5px 10px 5px turquoise;
    border-radius: 10px;
    padding: 20px;
    grid-column-start: 2;
    grid-column-end: 6;
    margin: 10px;
}
.row-one, .row-three{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
}
.one i{
    font-size: 2rem;
   

}
.one p{
    padding-bottom: 20px;
}
.one span{
    color: #d81159;
}

.row-two{
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 10px; */
    font-weight: bold;
}
.row-three{

}




.main-two{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    grid-column-start: 2;
    grid-column-end: 6;
    box-shadow: 5px 5px 10px 5px black;
    border-radius: 10px;
    padding: 30px;
    margin: 10px;
   
}











`, "",{"version":3,"sources":["webpack://./src/STYLES/style.css"],"names":[],"mappings":"AAAA;GACG,wBAAwB;AAC3B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,cAAc;IACd,mJAAmJ;AACvJ;AACA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,SAAS;;;AAGb;;;AAGA,6BAA6B;AAC7B;IACI,6BAA6B;IAC7B,kCAAkC;IAClC,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,QAAQ;;;AAGZ;AACA;IACI,kCAAkC;IAClC,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,OAAO;IACP,uCAAuC;IACvC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;;AAElB;AACA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,cAAc;AAClB;AACA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;GACG,kBAAkB;;AAErB;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;;;AAGpB;AACA;IACI,uBAAuB;AAC3B;AACA;GACG,kBAAkB;GAClB,cAAc;AACjB;AACA;IACI,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,QAAQ;;AAEZ;AACA;AACA,6BAA6B;AAC7B,aAAa;AACb;AACA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,WAAW;;AAEf;AACA;IACI,cAAc;IACd,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;;;AAGtB;AACA;IACI,kBAAkB;IAClB,WAAW;;AAEf;AACA;IACI,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,cAAc;AAClB;;AAEA;IACI,sCAAsC;IACtC,mBAAmB;IACnB,aAAa;IACb,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,6BAA6B;AACjC;AACA;IACI,eAAe;;;AAGnB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,iBAAiB;AACrB;AACA;;AAEA;;;;;AAKA;IACI,yDAA6C;IAC7C,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,oBAAoB;IACpB,kBAAkB;IAClB,kCAAkC;IAClC,mBAAmB;IACnB,aAAa;IACb,YAAY;;AAEhB","sourcesContent":[":root{\n   --primary-bg-clr:#181818;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    height: 100vh;\n    background-color: #181818;\n    color: #ffffff;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n.container{\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: 10px;\n  \n \n}\n\n\n/* working with the sidebar */\n.sidebar{\n    /* background-color: black; */\n    box-shadow: 5px 5px 10px 5px black;\n    grid-row: span 2;\n    padding: 20px;\n    border-radius: 10px;\n}\n.sidebar-column-container{\n    display: flex;\n    gap: 5px;\n  \n\n}\n.sidebar-one{\n    box-shadow: 5px 5px 10px 5px black;\n    border-radius: 40px;\n    margin-right: 20px;\n    border: none;\n}\n.sidebar-two{\n    flex: 2;\n    background-color: var(--primary-bg-clr);\n    padding: 20px;\n    color: white;\n}\n\n.sidebar-headings{\n    padding-top: 20px;\n    text-align: center;\n    color: #d81159;\n   \n}\n.sidebar-headings i{\n    font-size: 2.5rem;\n    padding-bottom: 10px;\n    color: #edf6f9;\n}\n.sidebar-details{\n    padding: 20px;\n    position: relative;\n}\n\n.sidebar-details li{\n    padding-top: 20px;\n    list-style-type: none;\n    font-size: 1.7rem;\n    color: turquoise;\n    cursor: pointer;\n}\n\n#notification{\n   padding-top: 100px;\n    \n}\n\n.user-input input{\n    padding: 10px 30px 10px 30px;\n    border: none;\n    outline: none;\n    background-color: #413839;\n    border-radius: 10px;\n    color: turquoise;\n    margin-top: 10px;\n\n     \n}\n.user-input input:focus{\n    outline:1px solid  aqua;\n}\n.user-input>label{\n   text-align: center;\n   color: #f5f5f5;\n}\n.myInput{\n    /* text-align: center; */\n}\n\n.location-container{\n    margin-top: 20px;\n    display: flex;\n    gap: 5px;\n   \n}\n.location-details{\n/* background-color: green; */\npadding: 10px;\n}\n.weather-details{\n    /* background-color: turquoise; */\n    /* padding: 20px; */\n    color: aqua;\n\n}\n.mYminmax{\n    color: #d81159;\n    font-weight: bold;\n    font-size: 2.5rem;\n}\n\n.image-icon{\n    margin-right: 10px;\n\n\n}\n.image-icon span{\n    padding-left: 10px;\n    color: aqua;\n   \n}\n.longLat-details{\n    padding-top: 50px;\n}\n.longLat-details p{\n    color: aqua;\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n.longLat-details span{\n    color: #d81159;\n}\n\n.main-one{\n    box-shadow: 5px 5px 10px 5px turquoise;\n    border-radius: 10px;\n    padding: 20px;\n    grid-column-start: 2;\n    grid-column-end: 6;\n    margin: 10px;\n}\n.row-one, .row-three{\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n.one i{\n    font-size: 2rem;\n   \n\n}\n.one p{\n    padding-bottom: 20px;\n}\n.one span{\n    color: #d81159;\n}\n\n.row-two{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* padding: 10px; */\n    font-weight: bold;\n}\n.row-three{\n\n}\n\n\n\n\n.main-two{\n    background-image: url(\"../ASSETS/image3.jpg\");\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    grid-column-start: 2;\n    grid-column-end: 6;\n    box-shadow: 5px 5px 10px 5px black;\n    border-radius: 10px;\n    padding: 30px;\n    margin: 10px;\n   \n}\n\n\n\n\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/STYLES/style.css":
/*!******************************!*\
  !*** ./src/STYLES/style.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/STYLES/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/ASSETS/image3.jpg":
/*!*******************************!*\
  !*** ./src/ASSETS/image3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce248d4447ef6b9ca9d7.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _STYLES_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./STYLES/style.css */ "./src/STYLES/style.css");


//DOM MANIPULATION--REFERENCES
const form = document.querySelector('form');
const inputValueFromHTML = document.querySelector('.myInput').value;

const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');

const container = document.querySelector('.container');

//LOCATION
const country = document.querySelector('.location-country');
const country2 = document.querySelector('.location-country2');
const country3 = document.querySelector('.location-country3');

const localTime = document.querySelector('.localtime');
const localTime2 = document.querySelector('.localtime2');

const localtimeEpoch = document.querySelector('.localtime_epoch');
const weather_text = document.querySelector('.text');

const name = document.querySelector('.name');
const name2 = document.querySelector('.name2');

const region = document.querySelector('.region');
const tzID = document.querySelector('.tz_id');
const lat = document.querySelector('.lat');
const lon = document.querySelector('.lon');

//CURRENT
const pressure_in = document.querySelector('.pressure_in');
const pressure_mb = document.querySelector('.pressure_mb');

const pressure_in2 = document.querySelector('.pressure_in2');
const pressure_mb2 = document.querySelector('.pressure_mb2');

const pressure_in3 = document.querySelector('.pressure_in3');

const uv = document.querySelector('.uv');
const precip_in = document.querySelector('.precip_in');
const precip_mm = document.querySelector('.precip_mm');
const temp_c = document.querySelector('.temp_c');
const temp_f = document.querySelector('.temp_f');

const wind_degree = document.querySelector('.wind_degree');
const wind_kph = document.querySelector('.wind_kph');
const wind_mph = document.querySelector('.wind_mph');

const humidity = document.querySelector('.humidity');

const feelslike_c = document.querySelector('.feelslike_c');
const feelslike_f = document.querySelector('.feelslike_f');

const gust_kph= document.querySelector('.gust_kph');
const gust_mph= document.querySelector('.gust_mph');





form.addEventListener('submit', (e)=>{
    e.preventDefault(e);
     
    let input = document.querySelector('.myInput').value;
    const url =`http://api.weatherapi.com/v1/current.json?key=8f4531915fce4da6a2e133242232310&q=${input}`;

    if(input === ""){
        alert("Enter a location name");
    }else{
    fetch(url).then(function(response){
        if(response.ok){
            return response.json();
        }else{
            throw new Error(Error);
        }
    })
    .then(function(weatherData){
        img1.src = weatherData.current.condition.icon;
        img2.src = weatherData.current.condition.icon;
  
    //location
    country.textContent =`${weatherData.location.country}`;
    country2.textContent =`${weatherData.location.country}`;
    country3.textContent =`${weatherData.location.country}`;

    localTime.textContent =`${weatherData.location.localtime}`;
    localTime2.textContent =`${weatherData.location.localtime}`;

    localtimeEpoch.textContent =`${weatherData.location.localtime_epoch}`;
    lat.textContent =`${weatherData.location.lat}`;
    lon.textContent =`${weatherData.location.lon}`;

    name.textContent =`${weatherData.location.name}`;
    name2.textContent =`${weatherData.location.name}`;

    region.textContent =`${weatherData.location.region}`;
    tzID.textContent =`${weatherData.location.tz_id}`;

    //current
    weather_text.textContent =weatherData.current.condition.text;
    pressure_in.textContent =`${weatherData.current.pressure_in}`;
    pressure_mb.textContent =`${weatherData.current.pressure_mb}`;

    pressure_in2.textContent =`${weatherData.current.pressure_in}`;
    pressure_in3.textContent =`${weatherData.current.pressure_in}`;
    pressure_mb2.textContent =`${weatherData.current.pressure_mb}`;
    


    uv.textContent =`${weatherData.current.uv}`;
    precip_in.textContent =`${weatherData.current.precip_in}`;
    precip_mm.textContent =`${weatherData.current.precip_mm}`;
    temp_c.textContent =`${weatherData.current.temp_c}`;
    temp_f.textContent =`${weatherData.current.temp_f}`;

    wind_degree.textContent =`${weatherData.current.wind_degree}`;
    wind_kph.textContent =`${weatherData.current.wind_kph}`;
    wind_mph.textContent =`${weatherData.current.wind_mph}`;

    humidity.textContent =`${weatherData.current.humidity}`;

    feelslike_c.textContent =`${weatherData.current.feelslike_c}`;
    feelslike_f.textContent =`${weatherData.current.feelslike_f}`;

    gust_kph.textContent =`${weatherData.current.gust_kph}`;
    gust_mph.textContent =`${weatherData.current.gust_mph}`;    

   
    })
    
    .catch(function(error){
        console.log(error);
    });    
}


});


async function fetchWeatherAPI(){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8f4531915fce4da6a2e133242232310&q=${inputValueFromHTML}`);
    const weatherData = await response.json();
    console.log(weatherData); 

    img1.src = weatherData.current.condition.icon;
    img2.src = weatherData.current.condition.icon;
  
    //location
    country.textContent =`${weatherData.location.country}`;
    country2.textContent =`${weatherData.location.country}`;
    country3.textContent =`${weatherData.location.country}`;

    localTime.textContent =`${weatherData.location.localtime}`;
    localTime2.textContent =`${weatherData.location.localtime}`;

    localtimeEpoch.textContent =`${weatherData.location.localtime_epoch}`;
    lat.textContent =`${weatherData.location.lat}`;
    lon.textContent =`${weatherData.location.lon}`;

    name.textContent =`${weatherData.location.name}`;
    name2.textContent =`${weatherData.location.name}`;

    region.textContent =`${weatherData.location.region}`;
    tzID.textContent =`${weatherData.location.tz_id}`;

    //current
    weather_text.textContent =weatherData.current.condition.text;
    pressure_in.textContent =`${weatherData.current.pressure_in}`;
    pressure_mb.textContent =`${weatherData.current.pressure_mb}`;

    pressure_in2.textContent =`${weatherData.current.pressure_in}`;
    pressure_in3.textContent =`${weatherData.current.pressure_in}`;

    pressure_mb2.textContent =`${weatherData.current.pressure_mb}`;
   


    uv.textContent =`${weatherData.current.uv}`;
    precip_in.textContent =`${weatherData.current.precip_in}`;
    precip_mm.textContent =`${weatherData.current.precip_mm}`;
    temp_c.textContent =`${weatherData.current.temp_c}`;
    temp_f.textContent =`${weatherData.current.temp_f}`;

    wind_degree.textContent =`${weatherData.current.wind_degree}`;
    wind_kph.textContent =`${weatherData.current.wind_kph}`;
    wind_mph.textContent =`${weatherData.current.wind_mph}`;

    humidity.textContent =`${weatherData.current.humidity}`;

    feelslike_c.textContent =`${weatherData.current.feelslike_c}`;
    feelslike_f.textContent =`${weatherData.current.feelslike_f}`;

    gust_kph.textContent =`${weatherData.current.gust_kph}`;
    gust_mph.textContent =`${weatherData.current.gust_mph}`;

}
fetchWeatherAPI();

  








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDZCQUE2Qiw2QkFBNkI7O0FBRTFELDhCQUE4QiwrQkFBK0I7QUFDN0QsK0JBQStCLCtCQUErQjs7QUFFOUQsbUNBQW1DLHFDQUFxQztBQUN4RSx3QkFBd0IseUJBQXlCO0FBQ2pELHdCQUF3Qix5QkFBeUI7O0FBRWpELHlCQUF5QiwwQkFBMEI7QUFDbkQsMEJBQTBCLDBCQUEwQjs7QUFFcEQsMkJBQTJCLDRCQUE0QjtBQUN2RCx5QkFBeUIsMkJBQTJCOztBQUVwRDtBQUNBO0FBQ0EsZ0NBQWdDLGdDQUFnQztBQUNoRSxnQ0FBZ0MsZ0NBQWdDOztBQUVoRSxpQ0FBaUMsZ0NBQWdDO0FBQ2pFLGlDQUFpQyxnQ0FBZ0M7O0FBRWpFLGlDQUFpQyxnQ0FBZ0M7QUFDakU7OztBQUdBLHVCQUF1Qix1QkFBdUI7QUFDOUMsOEJBQThCLDhCQUE4QjtBQUM1RCw4QkFBOEIsOEJBQThCO0FBQzVELDJCQUEyQiwyQkFBMkI7QUFDdEQsMkJBQTJCLDJCQUEyQjs7QUFFdEQsZ0NBQWdDLGdDQUFnQztBQUNoRSw2QkFBNkIsNkJBQTZCO0FBQzFELDZCQUE2Qiw2QkFBNkI7O0FBRTFELDZCQUE2Qiw2QkFBNkI7O0FBRTFELGdDQUFnQyxnQ0FBZ0M7QUFDaEUsZ0NBQWdDLGdDQUFnQzs7QUFFaEUsNkJBQTZCLDZCQUE2QjtBQUMxRCw2QkFBNkIsNkJBQTZCOztBQUUxRDtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvU1RZTEVTL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvU1RZTEVTL3N0eWxlLmNzcz9lZTdiIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vQVNTRVRTL2ltYWdlMy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgLS1wcmltYXJ5LWJnLWNscjojMTgxODE4O1xufVxuXG4qe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHl7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cbi5jb250YWluZXJ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgICBnYXA6IDEwcHg7XG4gIFxuIFxufVxuXG5cbi8qIHdvcmtpbmcgd2l0aCB0aGUgc2lkZWJhciAqL1xuLnNpZGViYXJ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCBibGFjaztcbiAgICBncmlkLXJvdzogc3BhbiAyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zaWRlYmFyLWNvbHVtbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDVweDtcbiAgXG5cbn1cbi5zaWRlYmFyLW9uZXtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggNXB4IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5zaWRlYmFyLXR3b3tcbiAgICBmbGV4OiAyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmctY2xyKTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNpZGViYXItaGVhZGluZ3N7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZDgxMTU5O1xuICAgXG59XG4uc2lkZWJhci1oZWFkaW5ncyBpe1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiAjZWRmNmY5O1xufVxuLnNpZGViYXItZGV0YWlsc3tcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpZGViYXItZGV0YWlscyBsaXtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgY29sb3I6IHR1cnF1b2lzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNub3RpZmljYXRpb257XG4gICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgXG59XG5cbi51c2VyLWlucHV0IGlucHV0e1xuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxMzgzOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiB0dXJxdW9pc2U7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgICBcbn1cbi51c2VyLWlucHV0IGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6MXB4IHNvbGlkICBhcXVhO1xufVxuLnVzZXItaW5wdXQ+bGFiZWx7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBjb2xvcjogI2Y1ZjVmNTtcbn1cbi5teUlucHV0e1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbn1cblxuLmxvY2F0aW9uLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG4gICBcbn1cbi5sb2NhdGlvbi1kZXRhaWxze1xuLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXG5wYWRkaW5nOiAxMHB4O1xufVxuLndlYXRoZXItZGV0YWlsc3tcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7ICovXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cbiAgICBjb2xvcjogYXF1YTtcblxufVxuLm1ZbWlubWF4e1xuICAgIGNvbG9yOiAjZDgxMTU5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4uaW1hZ2UtaWNvbntcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cblxufVxuLmltYWdlLWljb24gc3BhbntcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6IGFxdWE7XG4gICBcbn1cbi5sb25nTGF0LWRldGFpbHN7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG59XG4ubG9uZ0xhdC1kZXRhaWxzIHB7XG4gICAgY29sb3I6IGFxdWE7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubG9uZ0xhdC1kZXRhaWxzIHNwYW57XG4gICAgY29sb3I6ICNkODExNTk7XG59XG5cbi5tYWluLW9uZXtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggNXB4IHR1cnF1b2lzZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA2O1xuICAgIG1hcmdpbjogMTBweDtcbn1cbi5yb3ctb25lLCAucm93LXRocmVle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ub25lIGl7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgXG5cbn1cbi5vbmUgcHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5vbmUgc3BhbntcbiAgICBjb2xvcjogI2Q4MTE1OTtcbn1cblxuLnJvdy10d297XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucm93LXRocmVle1xuXG59XG5cblxuXG5cbi5tYWluLXR3b3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDY7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvU1RZTEVTL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtHQUNHLHdCQUF3QjtBQUMzQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsbUpBQW1KO0FBQ3ZKO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTOzs7QUFHYjs7O0FBR0EsNkJBQTZCO0FBQzdCO0lBQ0ksNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7OztBQUdaO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxPQUFPO0lBQ1AsdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjOztBQUVsQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7R0FDRyxrQkFBa0I7O0FBRXJCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCOzs7QUFHcEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0dBQ0csa0JBQWtCO0dBQ2xCLGNBQWM7QUFDakI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsUUFBUTs7QUFFWjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLGFBQWE7QUFDYjtBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixXQUFXOztBQUVmO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjs7O0FBR3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxlQUFlOzs7QUFHbkI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTs7QUFFQTs7Ozs7QUFLQTtJQUNJLHlEQUE2QztJQUM3QyxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7O0FBRWhCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgIC0tcHJpbWFyeS1iZy1jbHI6IzE4MTgxODtcXG59XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG4uY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGdhcDogMTBweDtcXG4gIFxcbiBcXG59XFxuXFxuXFxuLyogd29ya2luZyB3aXRoIHRoZSBzaWRlYmFyICovXFxuLnNpZGViYXJ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggNXB4IGJsYWNrO1xcbiAgICBncmlkLXJvdzogc3BhbiAyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uc2lkZWJhci1jb2x1bW4tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gIFxcblxcbn1cXG4uc2lkZWJhci1vbmV7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCA1cHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4uc2lkZWJhci10d297XFxuICAgIGZsZXg6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmctY2xyKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkaW5nc3tcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNkODExNTk7XFxuICAgXFxufVxcbi5zaWRlYmFyLWhlYWRpbmdzIGl7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgY29sb3I6ICNlZGY2Zjk7XFxufVxcbi5zaWRlYmFyLWRldGFpbHN7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNpZGViYXItZGV0YWlscyBsaXtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGNvbG9yOiB0dXJxdW9pc2U7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25vdGlmaWNhdGlvbntcXG4gICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICAgIFxcbn1cXG5cXG4udXNlci1pbnB1dCBpbnB1dHtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDEzODM5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjb2xvcjogdHVycXVvaXNlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcblxcbiAgICAgXFxufVxcbi51c2VyLWlucHV0IGlucHV0OmZvY3Vze1xcbiAgICBvdXRsaW5lOjFweCBzb2xpZCAgYXF1YTtcXG59XFxuLnVzZXItaW5wdXQ+bGFiZWx7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIGNvbG9yOiAjZjVmNWY1O1xcbn1cXG4ubXlJbnB1dHtcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbn1cXG5cXG4ubG9jYXRpb24tY29udGFpbmVye1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICBcXG59XFxuLmxvY2F0aW9uLWRldGFpbHN7XFxuLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXFxucGFkZGluZzogMTBweDtcXG59XFxuLndlYXRoZXItZGV0YWlsc3tcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdHVycXVvaXNlOyAqL1xcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xcbiAgICBjb2xvcjogYXF1YTtcXG5cXG59XFxuLm1ZbWlubWF4e1xcbiAgICBjb2xvcjogI2Q4MTE1OTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uaW1hZ2UtaWNvbntcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcblxcbn1cXG4uaW1hZ2UtaWNvbiBzcGFue1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGNvbG9yOiBhcXVhO1xcbiAgIFxcbn1cXG4ubG9uZ0xhdC1kZXRhaWxze1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG59XFxuLmxvbmdMYXQtZGV0YWlscyBwe1xcbiAgICBjb2xvcjogYXF1YTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ubG9uZ0xhdC1kZXRhaWxzIHNwYW57XFxuICAgIGNvbG9yOiAjZDgxMTU5O1xcbn1cXG5cXG4ubWFpbi1vbmV7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCA1cHggdHVycXVvaXNlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA2O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcbi5yb3ctb25lLCAucm93LXRocmVle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4ub25lIGl7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICBcXG5cXG59XFxuLm9uZSBwe1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuLm9uZSBzcGFue1xcbiAgICBjb2xvcjogI2Q4MTE1OTtcXG59XFxuXFxuLnJvdy10d297XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnJvdy10aHJlZXtcXG5cXG59XFxuXFxuXFxuXFxuXFxuLm1haW4tdHdve1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL0FTU0VUUy9pbWFnZTMuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNjtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgIFxcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL1NUWUxFUy9zdHlsZS5jc3MnO1xuXG4vL0RPTSBNQU5JUFVMQVRJT04tLVJFRkVSRU5DRVNcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5jb25zdCBpbnB1dFZhbHVlRnJvbUhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXlJbnB1dCcpLnZhbHVlO1xuXG5jb25zdCBpbWcxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltZzEnKTtcbmNvbnN0IGltZzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1nMicpO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5cbi8vTE9DQVRJT05cbmNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24tY291bnRyeScpO1xuY29uc3QgY291bnRyeTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24tY291bnRyeTInKTtcbmNvbnN0IGNvdW50cnkzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uLWNvdW50cnkzJyk7XG5cbmNvbnN0IGxvY2FsVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhbHRpbWUnKTtcbmNvbnN0IGxvY2FsVGltZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYWx0aW1lMicpO1xuXG5jb25zdCBsb2NhbHRpbWVFcG9jaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhbHRpbWVfZXBvY2gnKTtcbmNvbnN0IHdlYXRoZXJfdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0Jyk7XG5cbmNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuY29uc3QgbmFtZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZTInKTtcblxuY29uc3QgcmVnaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lvbicpO1xuY29uc3QgdHpJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50el9pZCcpO1xuY29uc3QgbGF0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhdCcpO1xuY29uc3QgbG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvbicpO1xuXG4vL0NVUlJFTlRcbmNvbnN0IHByZXNzdXJlX2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX2luJyk7XG5jb25zdCBwcmVzc3VyZV9tYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9tYicpO1xuXG5jb25zdCBwcmVzc3VyZV9pbjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmVfaW4yJyk7XG5jb25zdCBwcmVzc3VyZV9tYjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmVfbWIyJyk7XG5cbmNvbnN0IHByZXNzdXJlX2luMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9pbjMnKTtcblxuY29uc3QgdXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXYnKTtcbmNvbnN0IHByZWNpcF9pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVjaXBfaW4nKTtcbmNvbnN0IHByZWNpcF9tbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVjaXBfbW0nKTtcbmNvbnN0IHRlbXBfYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wX2MnKTtcbmNvbnN0IHRlbXBfZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wX2YnKTtcblxuY29uc3Qgd2luZF9kZWdyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZF9kZWdyZWUnKTtcbmNvbnN0IHdpbmRfa3BoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmRfa3BoJyk7XG5jb25zdCB3aW5kX21waCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kX21waCcpO1xuXG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xuXG5jb25zdCBmZWVsc2xpa2VfYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsc2xpa2VfYycpO1xuY29uc3QgZmVlbHNsaWtlX2YgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHNsaWtlX2YnKTtcblxuY29uc3QgZ3VzdF9rcGg9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndXN0X2twaCcpO1xuY29uc3QgZ3VzdF9tcGg9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndXN0X21waCcpO1xuXG5cblxuXG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15SW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCB1cmwgPWBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9OGY0NTMxOTE1ZmNlNGRhNmEyZTEzMzI0MjIzMjMxMCZxPSR7aW5wdXR9YDtcblxuICAgIGlmKGlucHV0ID09PSBcIlwiKXtcbiAgICAgICAgYWxlcnQoXCJFbnRlciBhIGxvY2F0aW9uIG5hbWVcIik7XG4gICAgfWVsc2V7XG4gICAgZmV0Y2godXJsKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgaWYocmVzcG9uc2Uub2spe1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRXJyb3IpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbih3ZWF0aGVyRGF0YSl7XG4gICAgICAgIGltZzEuc3JjID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgaW1nMi5zcmMgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICBcbiAgICAvL2xvY2F0aW9uXG4gICAgY291bnRyeS50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeX1gO1xuICAgIGNvdW50cnkyLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XG4gICAgY291bnRyeTMudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnl9YDtcblxuICAgIGxvY2FsVGltZS50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lfWA7XG4gICAgbG9jYWxUaW1lMi50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lfWA7XG5cbiAgICBsb2NhbHRpbWVFcG9jaC50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NofWA7XG4gICAgbGF0LnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sYXR9YDtcbiAgICBsb24udGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmxvbn1gO1xuXG4gICAgbmFtZS50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEubG9jYXRpb24ubmFtZX1gO1xuICAgIG5hbWUyLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lfWA7XG5cbiAgICByZWdpb24udGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLnJlZ2lvbn1gO1xuICAgIHR6SUQudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLnR6X2lkfWA7XG5cbiAgICAvL2N1cnJlbnRcbiAgICB3ZWF0aGVyX3RleHQudGV4dENvbnRlbnQgPXdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gICAgcHJlc3N1cmVfaW4udGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmN1cnJlbnQucHJlc3N1cmVfaW59YDtcbiAgICBwcmVzc3VyZV9tYi50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEuY3VycmVudC5wcmVzc3VyZV9tYn1gO1xuXG4gICAgcHJlc3N1cmVfaW4yLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnByZXNzdXJlX2lufWA7XG4gICAgcHJlc3N1cmVfaW4zLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnByZXNzdXJlX2lufWA7XG4gICAgcHJlc3N1cmVfbWIyLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnByZXNzdXJlX21ifWA7XG4gICAgXG5cblxuICAgIHV2LnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnV2fWA7XG4gICAgcHJlY2lwX2luLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnByZWNpcF9pbn1gO1xuICAgIHByZWNpcF9tbS50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEuY3VycmVudC5wcmVjaXBfbW19YDtcbiAgICB0ZW1wX2MudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jfWA7XG4gICAgdGVtcF9mLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZn1gO1xuXG4gICAgd2luZF9kZWdyZWUudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9kZWdyZWV9YDtcbiAgICB3aW5kX2twaC50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEuY3VycmVudC53aW5kX2twaH1gO1xuICAgIHdpbmRfbXBoLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfbXBofWA7XG5cbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEuY3VycmVudC5odW1pZGl0eX1gO1xuXG4gICAgZmVlbHNsaWtlX2MudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2N9YDtcbiAgICBmZWVsc2xpa2VfZi50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfZn1gO1xuXG4gICAgZ3VzdF9rcGgudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmN1cnJlbnQuZ3VzdF9rcGh9YDtcbiAgICBndXN0X21waC50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEuY3VycmVudC5ndXN0X21waH1gOyAgICBcblxuICAgXG4gICAgfSlcbiAgICBcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7ICAgIFxufVxuXG5cbn0pO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckFQSSgpe1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT04ZjQ1MzE5MTVmY2U0ZGE2YTJlMTMzMjQyMjMyMzEwJnE9JHtpbnB1dFZhbHVlRnJvbUhUTUx9YCk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpOyBcblxuICAgIGltZzEuc3JjID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgICBpbWcyLnNyYyA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gIFxuICAgIC8vbG9jYXRpb25cbiAgICBjb3VudHJ5LnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XG4gICAgY291bnRyeTIudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnl9YDtcbiAgICBjb3VudHJ5My50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeX1gO1xuXG4gICAgbG9jYWxUaW1lLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWV9YDtcbiAgICBsb2NhbFRpbWUyLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWV9YDtcblxuICAgIGxvY2FsdGltZUVwb2NoLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2h9YDtcbiAgICBsYXQudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmxhdH1gO1xuICAgIGxvbi50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEubG9jYXRpb24ubG9ufWA7XG5cbiAgICBuYW1lLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lfWA7XG4gICAgbmFtZTIudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWV9YDtcblxuICAgIHJlZ2lvbi50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEubG9jYXRpb24ucmVnaW9ufWA7XG4gICAgdHpJRC50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEubG9jYXRpb24udHpfaWR9YDtcblxuICAgIC8vY3VycmVudFxuICAgIHdlYXRoZXJfdGV4dC50ZXh0Q29udGVudCA9d2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICBwcmVzc3VyZV9pbi50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEuY3VycmVudC5wcmVzc3VyZV9pbn1gO1xuICAgIHByZXNzdXJlX21iLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnByZXNzdXJlX21ifWA7XG5cbiAgICBwcmVzc3VyZV9pbjIudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmN1cnJlbnQucHJlc3N1cmVfaW59YDtcbiAgICBwcmVzc3VyZV9pbjMudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmN1cnJlbnQucHJlc3N1cmVfaW59YDtcblxuICAgIHByZXNzdXJlX21iMi50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEuY3VycmVudC5wcmVzc3VyZV9tYn1gO1xuICAgXG5cblxuICAgIHV2LnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnV2fWA7XG4gICAgcHJlY2lwX2luLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnByZWNpcF9pbn1gO1xuICAgIHByZWNpcF9tbS50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEuY3VycmVudC5wcmVjaXBfbW19YDtcbiAgICB0ZW1wX2MudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jfWA7XG4gICAgdGVtcF9mLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZn1gO1xuXG4gICAgd2luZF9kZWdyZWUudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9kZWdyZWV9YDtcbiAgICB3aW5kX2twaC50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEuY3VycmVudC53aW5kX2twaH1gO1xuICAgIHdpbmRfbXBoLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfbXBofWA7XG5cbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEuY3VycmVudC5odW1pZGl0eX1gO1xuXG4gICAgZmVlbHNsaWtlX2MudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2N9YDtcbiAgICBmZWVsc2xpa2VfZi50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfZn1gO1xuXG4gICAgZ3VzdF9rcGgudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmN1cnJlbnQuZ3VzdF9rcGh9YDtcbiAgICBndXN0X21waC50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEuY3VycmVudC5ndXN0X21waH1gO1xuXG59XG5mZXRjaFdlYXRoZXJBUEkoKTtcblxuICBcblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9