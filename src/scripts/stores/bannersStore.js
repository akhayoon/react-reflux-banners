var Reflux  = require('reflux');
var _       = require('lodash');
var actions = require('../actions/actions');
var $       = require('jquery'); 

var defaultBanners = function() {

  // quick way to get data from .ajax fucnction
   var myJsonObj = JSON.parse($.ajax({
       type: 'GET',
       url: 'http://localhost:3000/',
       dataType: 'json',
       async:false,
       success: function(data) {
           return data;
       }
   }).responseText);
 

  return myJsonObj;
  // return [
  //   {"id": 1, "name": "banner 1", "imageUrl": "http://somegif.com", "targetUrl": "http://www.topcoder.com", "active": "Yes"},
  //   {"id": 2, "name": "banner 4", "imageUrl": "http://anothergif.com", "targetUrl": "http://www.appirio.com", "active": "Yes"},
  //   {"id": 3, "name": "banner 2", "imageUrl": "http://one-more-gif.com", "targetUrl": "http://www.topcoder.com/blog", "active": "Yes"}
  // ]
}

var _banners = [];


var bannersStore = Reflux.createStore({

  init: function() {
    // set _banners array to our default values
    _banners = defaultBanners();
    // register toggleStatus action & bind to toggle function
    this.listenTo(actions.toggleStatus, this.toggle);
    // register addBanner action & bind to addBanner function
    this.listenTo(actions.addBanner, this.addBanner);
  },

  // return all banners from private array
  getBanners: function(){
    return _banners;
  },

  // get a banner by id
  getBanner: function(bannerId) {
    return _.where(_banners, {'_id': bannerId })[0];
  },

  addBanner: function(banner) {
    // Submit form via jQuery/AJAX
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/',
      data: banner
    })
    .done(function(data) {
      console.log('success');
      _banners.push(banner);
      console.log(banner);
    })
    .fail(function(jqXhr) {
      console.log('failed to register');
    });
  },

  // callback for toggle action
  toggle: function(bannerId){
    var banner = _.where(_banners, {'_id': bannerId})[0];
    // toggle the banner status object
    banner.active = banner.active === 'Yes' ? 'No' : 'Yes';
    // pass the data to toggleStatus listenere in view.js
    this.trigger();
  }

});

module.exports = bannersStore; 