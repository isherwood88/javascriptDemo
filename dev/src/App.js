define(function (require, exports, module) {

  var CardCreator = require('root/CardCreator');
  var FlickrParser = require('root/FlickrParser');


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
});
