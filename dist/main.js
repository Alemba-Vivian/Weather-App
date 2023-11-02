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











`, "",{"version":3,"sources":["webpack://./src/STYLES/style.css"],"names":[],"mappings":"AAAA;GACG,wBAAwB;AAC3B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,cAAc;IACd,mJAAmJ;AACvJ;AACA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,SAAS;;;AAGb;;;AAGA,6BAA6B;AAC7B;IACI,6BAA6B;IAC7B,kCAAkC;IAClC,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,QAAQ;;;AAGZ;AACA;IACI,kCAAkC;IAClC,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,OAAO;IACP,uCAAuC;IACvC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;;AAElB;AACA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,cAAc;AAClB;AACA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;GACG,kBAAkB;;AAErB;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;;;AAGpB;AACA;IACI,uBAAuB;AAC3B;AACA;GACG,kBAAkB;GAClB,cAAc;AACjB;AACA;IACI,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,QAAQ;;AAEZ;AACA;AACA,6BAA6B;AAC7B,aAAa;AACb;AACA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,WAAW;;AAEf;AACA;IACI,cAAc;IACd,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;;;AAGtB;AACA;IACI,kBAAkB;IAClB,WAAW;;AAEf;AACA;IACI,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,cAAc;AAClB;;AAEA;IACI,sCAAsC;IACtC,mBAAmB;IACnB,aAAa;IACb,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,6BAA6B;AACjC;AACA;IACI,eAAe;;;AAGnB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,iBAAiB;AACrB;AACA;;AAEA;;;;;AAKA;IACI,yDAA6C;IAC7C,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,oBAAoB;IACpB,kBAAkB;IAClB,kCAAkC;IAClC,mBAAmB;IACnB,aAAa;IACb,YAAY;;AAEhB","sourcesContent":[":root{\n   --primary-bg-clr:#181818;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    height: 100vh;\n    background-color: #181818;\n    color: #ffffff;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n.container{\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: 10px;\n  \n \n}\n\n\n/* working with the sidebar */\n.sidebar{\n    /* background-color: black; */\n    box-shadow: 5px 5px 10px 5px black;\n    grid-row: span 2;\n    padding: 20px;\n    border-radius: 10px;\n}\n.sidebar-column-container{\n    display: flex;\n    gap: 5px;\n  \n\n}\n.sidebar-one{\n    box-shadow: 5px 5px 10px 5px black;\n    border-radius: 40px;\n    margin-right: 20px;\n    border: none;\n}\n.sidebar-two{\n    flex: 2;\n    background-color: var(--primary-bg-clr);\n    padding: 20px;\n    color: white;\n}\n\n.sidebar-headings{\n    padding-top: 20px;\n    text-align: center;\n    color: #d81159;\n   \n}\n.sidebar-headings i{\n    font-size: 2.5rem;\n    padding-bottom: 10px;\n    color: #edf6f9;\n}\n.sidebar-details{\n    padding: 20px;\n    position: relative;\n}\n\n.sidebar-details li{\n    padding-top: 20px;\n    list-style-type: none;\n    font-size: 1.7rem;\n    color: turquoise;\n}\n\n#notification{\n   padding-top: 100px;\n    \n}\n\n.user-input input{\n    padding: 10px 30px 10px 30px;\n    border: none;\n    outline: none;\n    background-color: #413839;\n    border-radius: 10px;\n    color: turquoise;\n    margin-top: 10px;\n\n     \n}\n.user-input input:focus{\n    outline:1px solid  aqua;\n}\n.user-input>label{\n   text-align: center;\n   color: #f5f5f5;\n}\n.myInput{\n    /* text-align: center; */\n}\n\n.location-container{\n    margin-top: 20px;\n    display: flex;\n    gap: 5px;\n   \n}\n.location-details{\n/* background-color: green; */\npadding: 10px;\n}\n.weather-details{\n    /* background-color: turquoise; */\n    /* padding: 20px; */\n    color: aqua;\n\n}\n.mYminmax{\n    color: #d81159;\n    font-weight: bold;\n    font-size: 2.5rem;\n}\n\n.image-icon{\n    margin-right: 10px;\n\n\n}\n.image-icon span{\n    padding-left: 10px;\n    color: aqua;\n   \n}\n.longLat-details{\n    padding-top: 50px;\n}\n.longLat-details p{\n    color: aqua;\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n.longLat-details span{\n    color: #d81159;\n}\n\n.main-one{\n    box-shadow: 5px 5px 10px 5px turquoise;\n    border-radius: 10px;\n    padding: 20px;\n    grid-column-start: 2;\n    grid-column-end: 6;\n    margin: 10px;\n}\n.row-one, .row-three{\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n.one i{\n    font-size: 2rem;\n   \n\n}\n.one p{\n    padding-bottom: 20px;\n}\n.one span{\n    color: #d81159;\n}\n\n.row-two{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* padding: 10px; */\n    font-weight: bold;\n}\n.row-three{\n\n}\n\n\n\n\n.main-two{\n    background-image: url(\"../ASSETS/image3.jpg\");\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    grid-column-start: 2;\n    grid-column-end: 6;\n    box-shadow: 5px 5px 10px 5px black;\n    border-radius: 10px;\n    padding: 30px;\n    margin: 10px;\n   \n}\n\n\n\n\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
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
// const input = document.querySelector('.myInput');
const input = prompt("Enter the name of the location", "Kenya");
const img = document.querySelector('img');
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
const uv = document.querySelector('.uv');
const precip_in = document.querySelector('.precip_in');
const precip_mm = document.querySelector('.precip_mm');
const temp_c = document.querySelector('.temp_c');
const temp_f = document.querySelector('.temp_f');




async function fetchWeatherAPI(){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8f4531915fce4da6a2e133242232310&q=${input}`);
    const weatherData = await response.json();
    console.log(weatherData); 

    img.src = weatherData.current.condition.icon;
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
    uv.textContent =`${weatherData.current.uv}`;
    precip_in.textContent =`${weatherData.current.precip_in}`;
    precip_mm.textContent =`${weatherData.current.precip_mm}`;
    temp_c.textContent =`${weatherData.current.temp_c}`;
    temp_f.textContent =`${weatherData.current.temp_f}`;




    
    // if(weatherData.current.condition.text==='Sunny'){
    //     container.style.backgroundColor ='red';
    // }else if(weatherData.current.condition.text==='Cloudy'){
    //     container.style.backgroundColor ='green';
    // }else if(weatherData.current.condition.text==='Moderate rain'){
    //     container.style.backgroundColor ='yellow';
    // }

}
fetchWeatherAPI();


// function fetchWeatherData(data){
//     console.log(data);
//     img.src = data.current.condition.icon;
//     text.textContent =data.current.condition.text;
//     if(data.current.condition.text==='Sunny'){
//         container.style.backgroundColor ='red';
//     }else if(data.current.condition.text==='Cloudy'){
//         container.style.backgroundColor ='green';
//     }else if(data.current.condition.text==='Moderate rain'){
//         container.style.backgroundColor ='yellow';
//     }
// }   








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCw2QkFBNkIsNkJBQTZCOztBQUUxRCw4QkFBOEIsK0JBQStCO0FBQzdELCtCQUErQiwrQkFBK0I7Ozs7QUFJOUQsbUNBQW1DLHFDQUFxQztBQUN4RSx3QkFBd0IseUJBQXlCO0FBQ2pELHdCQUF3Qix5QkFBeUI7O0FBRWpELHlCQUF5QiwwQkFBMEI7QUFDbkQsMEJBQTBCLDBCQUEwQjs7QUFFcEQsMkJBQTJCLDRCQUE0QjtBQUN2RCx5QkFBeUIsMkJBQTJCOztBQUVwRDtBQUNBO0FBQ0EsZ0NBQWdDLGdDQUFnQztBQUNoRSxnQ0FBZ0MsZ0NBQWdDO0FBQ2hFLHVCQUF1Qix1QkFBdUI7QUFDOUMsOEJBQThCLDhCQUE4QjtBQUM1RCw4QkFBOEIsOEJBQThCO0FBQzVELDJCQUEyQiwyQkFBMkI7QUFDdEQsMkJBQTJCLDJCQUEyQjs7Ozs7QUFLdEQ7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL1NUWUxFUy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL1NUWUxFUy9zdHlsZS5jc3M/ZWU3YiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL0FTU0VUUy9pbWFnZTMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgIC0tcHJpbWFyeS1iZy1jbHI6IzE4MTgxODtcbn1cblxuKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5e1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG4uY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgZ2FwOiAxMHB4O1xuICBcbiBcbn1cblxuXG4vKiB3b3JraW5nIHdpdGggdGhlIHNpZGViYXIgKi9cbi5zaWRlYmFye1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCA1cHggYmxhY2s7XG4gICAgZ3JpZC1yb3c6IHNwYW4gMjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc2lkZWJhci1jb2x1bW4tY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG4gIFxuXG59XG4uc2lkZWJhci1vbmV7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uc2lkZWJhci10d297XG4gICAgZmxleDogMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJnLWNscik7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zaWRlYmFyLWhlYWRpbmdze1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2Q4MTE1OTtcbiAgIFxufVxuLnNpZGViYXItaGVhZGluZ3MgaXtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogI2VkZjZmOTtcbn1cbi5zaWRlYmFyLWRldGFpbHN7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaWRlYmFyLWRldGFpbHMgbGl7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIGNvbG9yOiB0dXJxdW9pc2U7XG59XG5cbiNub3RpZmljYXRpb257XG4gICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgXG59XG5cbi51c2VyLWlucHV0IGlucHV0e1xuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxMzgzOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiB0dXJxdW9pc2U7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgICBcbn1cbi51c2VyLWlucHV0IGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6MXB4IHNvbGlkICBhcXVhO1xufVxuLnVzZXItaW5wdXQ+bGFiZWx7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBjb2xvcjogI2Y1ZjVmNTtcbn1cbi5teUlucHV0e1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbn1cblxuLmxvY2F0aW9uLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG4gICBcbn1cbi5sb2NhdGlvbi1kZXRhaWxze1xuLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXG5wYWRkaW5nOiAxMHB4O1xufVxuLndlYXRoZXItZGV0YWlsc3tcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7ICovXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cbiAgICBjb2xvcjogYXF1YTtcblxufVxuLm1ZbWlubWF4e1xuICAgIGNvbG9yOiAjZDgxMTU5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4uaW1hZ2UtaWNvbntcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cblxufVxuLmltYWdlLWljb24gc3BhbntcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6IGFxdWE7XG4gICBcbn1cbi5sb25nTGF0LWRldGFpbHN7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG59XG4ubG9uZ0xhdC1kZXRhaWxzIHB7XG4gICAgY29sb3I6IGFxdWE7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubG9uZ0xhdC1kZXRhaWxzIHNwYW57XG4gICAgY29sb3I6ICNkODExNTk7XG59XG5cbi5tYWluLW9uZXtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggNXB4IHR1cnF1b2lzZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA2O1xuICAgIG1hcmdpbjogMTBweDtcbn1cbi5yb3ctb25lLCAucm93LXRocmVle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ub25lIGl7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgXG5cbn1cbi5vbmUgcHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5vbmUgc3BhbntcbiAgICBjb2xvcjogI2Q4MTE1OTtcbn1cblxuLnJvdy10d297XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucm93LXRocmVle1xuXG59XG5cblxuXG5cbi5tYWluLXR3b3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDY7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvU1RZTEVTL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtHQUNHLHdCQUF3QjtBQUMzQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsbUpBQW1KO0FBQ3ZKO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTOzs7QUFHYjs7O0FBR0EsNkJBQTZCO0FBQzdCO0lBQ0ksNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7OztBQUdaO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxPQUFPO0lBQ1AsdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjOztBQUVsQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0dBQ0csa0JBQWtCOztBQUVyQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7O0FBR3BCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtHQUNHLGtCQUFrQjtHQUNsQixjQUFjO0FBQ2pCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFFBQVE7O0FBRVo7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixhQUFhO0FBQ2I7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7OztBQUd0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7O0FBRWY7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksZUFBZTs7O0FBR25CO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7SUFDSSx5REFBNkM7SUFDN0Msc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZOztBQUVoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAtLXByaW1hcnktYmctY2xyOiMxODE4MTg7XFxufVxcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuLmNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICBcXG4gXFxufVxcblxcblxcbi8qIHdvcmtpbmcgd2l0aCB0aGUgc2lkZWJhciAqL1xcbi5zaWRlYmFye1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCBibGFjaztcXG4gICAgZ3JpZC1yb3c6IHNwYW4gMjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLnNpZGViYXItY29sdW1uLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICBcXG5cXG59XFxuLnNpZGViYXItb25le1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggNXB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLnNpZGViYXItdHdve1xcbiAgICBmbGV4OiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJnLWNscik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNpZGViYXItaGVhZGluZ3N7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjZDgxMTU5O1xcbiAgIFxcbn1cXG4uc2lkZWJhci1oZWFkaW5ncyBpe1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGNvbG9yOiAjZWRmNmY5O1xcbn1cXG4uc2lkZWJhci1kZXRhaWxze1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zaWRlYmFyLWRldGFpbHMgbGl7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICBjb2xvcjogdHVycXVvaXNlO1xcbn1cXG5cXG4jbm90aWZpY2F0aW9ue1xcbiAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgXFxufVxcblxcbi51c2VyLWlucHV0IGlucHV0e1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweCAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTM4Mzk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiB0dXJxdW9pc2U7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxuICAgICBcXG59XFxuLnVzZXItaW5wdXQgaW5wdXQ6Zm9jdXN7XFxuICAgIG91dGxpbmU6MXB4IHNvbGlkICBhcXVhO1xcbn1cXG4udXNlci1pbnB1dD5sYWJlbHtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgY29sb3I6ICNmNWY1ZjU7XFxufVxcbi5teUlucHV0e1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxufVxcblxcbi5sb2NhdGlvbi1jb250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgIFxcbn1cXG4ubG9jYXRpb24tZGV0YWlsc3tcXG4vKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cXG5wYWRkaW5nOiAxMHB4O1xcbn1cXG4ud2VhdGhlci1kZXRhaWxze1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7ICovXFxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXFxuICAgIGNvbG9yOiBhcXVhO1xcblxcbn1cXG4ubVltaW5tYXh7XFxuICAgIGNvbG9yOiAjZDgxMTU5O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5pbWFnZS1pY29ue1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuXFxuXFxufVxcbi5pbWFnZS1pY29uIHNwYW57XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgY29sb3I6IGFxdWE7XFxuICAgXFxufVxcbi5sb25nTGF0LWRldGFpbHN7XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG4ubG9uZ0xhdC1kZXRhaWxzIHB7XFxuICAgIGNvbG9yOiBhcXVhO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5sb25nTGF0LWRldGFpbHMgc3BhbntcXG4gICAgY29sb3I6ICNkODExNTk7XFxufVxcblxcbi5tYWluLW9uZXtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCB0dXJxdW9pc2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDY7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuLnJvdy1vbmUsIC5yb3ctdGhyZWV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5vbmUgaXtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgIFxcblxcbn1cXG4ub25lIHB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4ub25lIHNwYW57XFxuICAgIGNvbG9yOiAjZDgxMTU5O1xcbn1cXG5cXG4ucm93LXR3b3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucm93LXRocmVle1xcblxcbn1cXG5cXG5cXG5cXG5cXG4ubWFpbi10d297XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vQVNTRVRTL2ltYWdlMy5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA2O1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggNXB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgXFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vU1RZTEVTL3N0eWxlLmNzcyc7XG5cbi8vRE9NIE1BTklQVUxBVElPTi0tUkVGRVJFTkNFU1xuLy8gY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXlJbnB1dCcpO1xuY29uc3QgaW5wdXQgPSBwcm9tcHQoXCJFbnRlciB0aGUgbmFtZSBvZiB0aGUgbG9jYXRpb25cIiwgXCJLZW55YVwiKTtcbmNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuY29uc3QgaW1nMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWcyJyk7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuLy9MT0NBVElPTlxuY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1jb3VudHJ5Jyk7XG5jb25zdCBjb3VudHJ5MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1jb3VudHJ5MicpO1xuY29uc3QgY291bnRyeTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24tY291bnRyeTMnKTtcblxuY29uc3QgbG9jYWxUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2FsdGltZScpO1xuY29uc3QgbG9jYWxUaW1lMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhbHRpbWUyJyk7XG5cbmNvbnN0IGxvY2FsdGltZUVwb2NoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2FsdGltZV9lcG9jaCcpO1xuY29uc3Qgd2VhdGhlcl90ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQnKTtcblxuY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XG5jb25zdCBuYW1lMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lMicpO1xuXG5jb25zdCByZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnaW9uJyk7XG5jb25zdCB0eklEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR6X2lkJyk7XG5jb25zdCBsYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGF0Jyk7XG5jb25zdCBsb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9uJyk7XG5cbi8vQ1VSUkVOVFxuY29uc3QgcHJlc3N1cmVfaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmVfaW4nKTtcbmNvbnN0IHByZXNzdXJlX21iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX21iJyk7XG5jb25zdCB1diA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51dicpO1xuY29uc3QgcHJlY2lwX2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWNpcF9pbicpO1xuY29uc3QgcHJlY2lwX21tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWNpcF9tbScpO1xuY29uc3QgdGVtcF9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBfYycpO1xuY29uc3QgdGVtcF9mID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBfZicpO1xuXG5cblxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJBUEkoKXtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9OGY0NTMxOTE1ZmNlNGRhNmEyZTEzMzI0MjIzMjMxMCZxPSR7aW5wdXR9YCk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpOyBcblxuICAgIGltZy5zcmMgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICAgIGltZzIuc3JjID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgXG4gICAgLy9sb2NhdGlvblxuICAgIGNvdW50cnkudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnl9YDtcbiAgICBjb3VudHJ5Mi50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeX1gO1xuICAgIGNvdW50cnkzLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XG5cbiAgICBsb2NhbFRpbWUudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZX1gO1xuICAgIGxvY2FsVGltZTIudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZX1gO1xuXG5cblxuICAgIGxvY2FsdGltZUVwb2NoLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2h9YDtcbiAgICBsYXQudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmxhdH1gO1xuICAgIGxvbi50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEubG9jYXRpb24ubG9ufWA7XG5cbiAgICBuYW1lLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lfWA7XG4gICAgbmFtZTIudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWV9YDtcblxuICAgIHJlZ2lvbi50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEubG9jYXRpb24ucmVnaW9ufWA7XG4gICAgdHpJRC50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEubG9jYXRpb24udHpfaWR9YDtcblxuICAgIC8vY3VycmVudFxuICAgIHdlYXRoZXJfdGV4dC50ZXh0Q29udGVudCA9d2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICBwcmVzc3VyZV9pbi50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEuY3VycmVudC5wcmVzc3VyZV9pbn1gO1xuICAgIHByZXNzdXJlX21iLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnByZXNzdXJlX21ifWA7XG4gICAgdXYudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmN1cnJlbnQudXZ9YDtcbiAgICBwcmVjaXBfaW4udGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmN1cnJlbnQucHJlY2lwX2lufWA7XG4gICAgcHJlY2lwX21tLnRleHRDb250ZW50ID1gJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnByZWNpcF9tbX1gO1xuICAgIHRlbXBfYy50ZXh0Q29udGVudCA9YCR7d2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2N9YDtcbiAgICB0ZW1wX2YudGV4dENvbnRlbnQgPWAke3dlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mfWA7XG5cblxuXG5cbiAgICBcbiAgICAvLyBpZih3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0PT09J1N1bm55Jyl7XG4gICAgLy8gICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSdyZWQnO1xuICAgIC8vIH1lbHNlIGlmKHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ9PT0nQ2xvdWR5Jyl7XG4gICAgLy8gICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSdncmVlbic7XG4gICAgLy8gfWVsc2UgaWYod2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dD09PSdNb2RlcmF0ZSByYWluJyl7XG4gICAgLy8gICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSd5ZWxsb3cnO1xuICAgIC8vIH1cblxufVxuZmV0Y2hXZWF0aGVyQVBJKCk7XG5cblxuLy8gZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShkYXRhKXtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICBpbWcuc3JjID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuLy8gICAgIHRleHQudGV4dENvbnRlbnQgPWRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbi8vICAgICBpZihkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ9PT0nU3VubnknKXtcbi8vICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9J3JlZCc7XG4vLyAgICAgfWVsc2UgaWYoZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0PT09J0Nsb3VkeScpe1xuLy8gICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0nZ3JlZW4nO1xuLy8gICAgIH1lbHNlIGlmKGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dD09PSdNb2RlcmF0ZSByYWluJyl7XG4vLyAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSd5ZWxsb3cnO1xuLy8gICAgIH1cbi8vIH0gICBcblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9