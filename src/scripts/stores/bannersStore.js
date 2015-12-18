/** @jsx React.DOM */
var Reflux  = require('reflux');
var _       = require('lodash');
var actions = require('../actions/actions'); 

var defaultBanners = function() {
  return [
    {"id": 1, "name": "banner 1", "imageUrl": "http://somegif.com", "targetUrl": "http://www.topcoder.com", "active": "Yes"},
    {"id": 2, "name": "banner 4", "imageUrl": "http://anothergif.com", "targetUrl": "http://www.appirio.com", "active": "Yes"},
    {"id": 3, "name": "banner 2", "imageUrl": "http://one-more-gif.com", "targetUrl": "http://www.topcoder.com/blog", "active": "Yes"}
  ]
}

var _banners = [];


var bannersStore = Reflux.createStore({

  init: function() {
    // set _banners array to our default values
    _banners = defaultBanners();
    // register toggleStatus action & bind to toggle function
    this.listenTo(actions.toggleStatus, this.toggle);
  },

  // return all banners from private array
  getBanners: function(){
    return _banners;
  },

  // get a banner by id
  getBanner: function(bannerId) {
    return _.where(_banners, {'id': bannerId })[0];
  },



  // callback for toggle action
  toggle: function(bannerId){
    var banner = _.where(_banners, {'id': bannerId})[0];
    // toggle the banner status object
    banner.active = banner.active === 'Yes' ? 'No' : 'Yes';
    // pass the data to toggleStatus listenere in view.js
    this.trigger();
  }

});

module.exports = bannersStore;