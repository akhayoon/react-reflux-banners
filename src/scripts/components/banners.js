/** @jsx React.DOM */
var React = require('react');

var Banners = React.createClass({
  render: function() {
    return (
      <div className="banner">
        Hello, world! I am a Banner.
      </div>
    );
  }
});

React.render(
  <Banners />,
  document.getElementById('app')
);

module.exports = Banners;