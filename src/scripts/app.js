import createHistory from 'history/lib/createHashHistory';

var React         = require('react');
var ReactDOM      = require('react-dom');



// Opt-out of persistent state, not recommended.
var history = createHistory({
  
});


// routes
// var Router        = require('react-router');
// var RouterHandler = Router.RouterHandler;
// var Route         = Router.Route;
// var DefaultRoute  = Router.DefaultRoute;

var ReactRouter = require('react-router');
import { IndexRoute } from 'react-router';
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// components
var ViewBanner    = require('./components/view');
var AddBanner     = require('./components/add');
var Banners       = require('./components/banners');
var Test          = require('./components/test')

// var routes = (
//   <Route handler={ BannerManager }>
//     <Route name="banner" path="/banner/:_id" handler={ ViewBanner} />
//     <DefaultRoute name="home" handler= { Banners} />
//     <Route name="add" path="/add" handler={ AddBanner } />
//     <Route name="test" path="/test" handler={ Test } />
//   </Route>
// );

// var BannerManager = React.createClass({
//   render: function() {
//     return (
//       <RouteHandler/>
//     );
//   }
// });

// Router.run(routes, function(Handler) {
//   React.render(<Handler />, document.getElementById('app'));
// });

const App = React.createClass({

  render() {
    return (
      <div>
        {this.props.children || <Banners/>}
      </div>
    )
  }
})

ReactDOM.render((
  <Router history={createHistory({queryKey: false})}>
    <Route path='/' component={App}>
      <Route name="home" path="/" component={Banners} />
      <Route name="add" path="add" component={AddBanner} />
      <Route name="banner" path="/banner/:_id" component={ViewBanner} />
    </Route>
  </Router>
), document.getElementById('app'))
