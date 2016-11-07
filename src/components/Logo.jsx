import React from 'react';

export default React.createClass({
  displayName: 'Logo',
  render: function() {
    return (
      <div
        className='logo row'>
        <div
          className='logo-symbol col-sm-12 col-md-4 col-lg-3'
          >
          <span>Woodhouse</span>
          <span>PRO</span>
        </div>
        <div className='col-xs-12 col-md-8 col-lg-9'>
          <h1
            className='logo-type'>
            Проекты деревянных домов и бань
          </h1>
          <span
            className='logo-slogan'>
            с профессиональным подходом
          </span>
        </div>
      </div>
    );
  }
});
