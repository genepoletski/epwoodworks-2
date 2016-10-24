import React from 'react';
import Contacts from './Contacts';
import NavSecondary from './NavSecondary';

export default React.createClass({
  displayName: 'Footer',
  propTypes: {
    navTree: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <div>
        <Contacts />
        <NavSecondary navTree={this.props.navTree} />
      </div>
    );
  }
});
