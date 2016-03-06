/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	var App = __webpack_require__(1);
	window.app = new App();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	
	  var CardCreator = __webpack_require__(2);
	  var FlickrParser = __webpack_require__(3);
	
	
	  var App = function() {
	    this.flickrParser = new FlickrParser();
	    this.cardCreator = new CardCreator();
	  }
	
	  App.prototype = Object.create(Object.prototype);
	
	  App.prototype.loadContentCards = function(data, listElement) {
	    console.log(data);
	    this.contentList = this.flickrParser.parseData(data.items);
	
	    for (var i = 0; i < this.contentList.length; i++) {
	      var contentItem = this.contentList[i];
	      contentItem.setElement(this.cardCreator.makeCardElement(contentItem));
	
	      listElement.appendChild(contentItem.element);
	    }
	  }
	
	  module.exports = App;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	
	  var CardCreator = __webpack_require__(2);
	
	
	  var CardCreator = function() {
	  }
	
	  CardCreator.prototype = Object.create(Object.prototype);
	
	  CardCreator.prototype.makeCardElement = function(card) {
	    var div = makeDiv("content-card-list__content-card");
	    var img = makeImage(card.imageUrl);
	
	    div.appendChild(img);
	
	    return div;
	  }
	
	  function makeImage(src) {
	    var img = document.createElement('img');
	    img.src = src;
	
	    return img;
	  }
	
	  function makeDiv(className) {
	    var div = document.createElement('div');
	    div.className = className;
	
	    return div;
	  }
	
	  module.exports = CardCreator;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	
	  var Card = __webpack_require__(4);
	
	  var FlickrParser = function() {
	  }
	
	  FlickrParser.prototype = Object.create(Object.prototype);
	
	  FlickrParser.prototype.parseData = function(items) {
	    var cardList = [];
	
	    for (var i = 0; i < items.length; i++) {
	      var item = items[i];
	      if(hasImageUrl(item)) {
	        cardList.push(new Card(item.media.m));
	      }
	    }
	
	    return cardList;
	  }
	
	  function hasImageUrl(item) {
	    return item.media && item.media.m;
	  }
	
	  module.exports = FlickrParser;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	
	  var Card = function(imageUrl) {
	    this.imageUrl = imageUrl;
	    this.element;
	  };
	
	  Card.prototype = Object.create(Object.prototype);
	
	  Card.prototype.onClick = function(e) {
	    if(isFavourited.call(this)) {
	
	      console.log('deselected');
	      unfavourite.call(this);
	
	    } else {
	
	      console.log('selected');
	      favourite.call(this);
	
	    }
	  };
	
	  Card.prototype.setElement = function(element) {
	    this.element = element;
	    this.element.addEventListener('click', this.onClick.bind(this));
	
	    if(isFavourited.call(this)) {
	      favourite.call(this);
	    }
	  }
	
	  function isFavourited() {
	    var isFavourited = localStorage[this.imageUrl];
	
	    if(isFavourited === 'undefined') {
	      return false;
	    } else {
	      return isFavourited === 'true';
	    }
	  };
	
	  function favourite() {
	    localStorage[this.imageUrl] = true;
	
	    this.element.classList.remove('content-card-list__content-card');
	    this.element.classList.add('content-card-list__content-card--selected');
	
	    this.element.getElementsByTagName('img')[0].classList.add('selected');
	  }
	
	  function unfavourite() {
	    localStorage[this.imageUrl] = false;
	
	    this.element.classList.remove('content-card-list__content-card--selected');
	    this.element.classList.add('content-card-list__content-card');
	
	    this.element.getElementsByTagName('img')[0].classList.remove('selected');
	  }
	
	  module.exports = Card;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map