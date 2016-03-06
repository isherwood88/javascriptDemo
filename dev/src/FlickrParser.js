define(function (require, exports, module) {

  var Card = require('root/Card');

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
});
