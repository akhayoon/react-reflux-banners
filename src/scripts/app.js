/** @jsx React.DOM */
var React         = require('react');

// routes
var Router        = require('react-router');
var RouterHandler = Router.RouterHandler;
var Route         = Router.Route;
var DefaultRoute  = Router.DefaultRoute;

// components
var ViewBanner    = require('./components/view');
 var AddBanner     = require('./components/add');
var Banners       = require('./components/banners');


var routes = (
  <Route handler={ BannerManager }>
    <Route name="banner" path="/banner/:_id" handler={ ViewBanner} />
    <DefaultRoute name="home" handler= { Banners} />
    <Route name="add" path="/add" handler={ AddBanner } />
  </Route>
);

var BannerManager = React.createClass({
  render: function() {
    return (
      <RouteHandler/>
    );
  }
});

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});
