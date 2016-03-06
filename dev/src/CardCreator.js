define(function (require, exports, module) {

  var CardCreator = require('root/CardCreator');


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
});
