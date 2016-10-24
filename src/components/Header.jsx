import React from 'react';
import Logo from './Logo';
import NavMain from './NavMain';

export default React.createClass({
  displayName: 'Header',
  propTypes: {
    navTree: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <div>
        <Logo />
        <NavMain navTree={this.props.navTree} />
      </div>
    );
  }
});
