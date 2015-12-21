var React        = require('react');
var Reflux       = require('reflux');
var Router       = require('react-router');
var BannersStore = require('../stores/bannersStore');
var actions      = require('../actions/actions');

var Display = React.createClass({
  mixins: [
    Router.Navigation,
    Router.State,
    Reflux.ListenerMixin
  ],

  componentDidMount: function() {
    this.listenTo(BannersStore, this.toggleStatus);
  },

  getInitialState: function() {
    var bannerId = this.getParams()._id;
    return {
      banner: BannersStore.getBanner(bannerId)
    }
  },

  toggleStatus: function() {
    this.setState({
        banner: BannersStore.getBanner(this.getParams()._id)
    });
  },

  render: function() {
    return (
      <div>
        <dl className="dl-horizontal">
          <dt>Name</dt>
          <dd>{this.state.banner.name}</dd>
          <dt>Image</dt>
          <dd>{this.state.banner.imageUrl}</dd>
          <dt>Target URL</dt>
          <dd>{this.state.banner.targetUrl}</dd>
          <dt>Active?</dt>
          <dd>{this.state.banner.active}</dd>
        </dl>
        <div className="col-sm-offset-2">
          <button type="button" className="btn btn-primary" 
          onClick= {actions.toggleStatus.bind(this,this.state.banner._id) }>
          Toggle Active</button>
        </div>
      </div>
    );
  }
});

module.exports = Display; 