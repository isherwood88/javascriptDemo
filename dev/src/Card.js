define(function (require, exports, module) {

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
});
