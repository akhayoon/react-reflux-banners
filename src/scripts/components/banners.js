/** @jsx React.DOM */
var React       = require('react');
var Reflux      = require('reflux');
//var BannerStore = require('../stores/BannerStore')

// link to react router
var Link = require('react-router').Link;

// get our initial banners from our store
function getBanners() {
  return { banners: 'banners for our store'}
}

var Banners = React.createClass({

  getInitialState: function() {
    return getBanners();
  },

  render: function() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>URL</th>
              <th>Active?</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    )
  }

});

React.render(<Banners />, document.getElementById('app'));


module.exports = Banners;