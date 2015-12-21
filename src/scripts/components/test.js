var React        = require('react');
var Reflux       = require('reflux');
var BannersStore = require('../stores/bannersStore');
var Router       = require('react-router')

// link to react router
var Link = require('react-router').Link;

var Test = React.createClass({


  render: function() {

    return (
      <div>
      	<h3> testing </h3>
      </div>
    )
  }

});

module.exports = Test;