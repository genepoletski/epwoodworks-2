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
      <div className='app__header'>
        <div className='logo__wrapper'>
          <div className='container'>
            <Logo />
          </div>
        </div>
        <div
          className='nav-main__wrapper'>
          <div className='container'>
            <NavMain {...this.props.navTree} />
          </div>
        </div>
      </div>
    );
  }
});
