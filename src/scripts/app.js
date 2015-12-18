/** @jsx React.DOM */
var React         = require('react');

// routes
var Router        = require('react-router');
var RouterHandler = Router.RouterHandler;
var Route         = Router.Route;
var DefaultRoute  = Router.DefaultRoute;

// components
var ViewBanner    = require('./components/view');


var routes = (
  <Route handler={ BannerManager }>
    <DefaultRoute name="home" handler= { Banners} />
  </Route>
);

var BannerManager = React.createClass({
  render: function() {
    return (
      <RouteHandler/>
    );
  }
});