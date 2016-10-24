import React from 'react';
import FooterContacts from './FooterContacts';
import FooterNav from './FooterNav';

export default React.createClass({
  displayName: 'Footer',
  propTypes: {
    navTree: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <div className='app__footer footer__wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <FooterContacts />
            </div>
            <div className='col-md-4'>

            </div>
            <div className='col-md-4'>
              <FooterNav {...this.props.navTree} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});
