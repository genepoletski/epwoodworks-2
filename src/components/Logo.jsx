import React from 'react';

export default React.createClass({
  displayName: 'Logo',
  render: function() {
    return (
      <div
        className='logo row'>
        <img
          className='logo__symbol col-md-3'
          src="#" />
          <div className='col-md-9'>
            <h1
              className='logo__type'>
              Проекты деревянных домов и бань
            </h1>
            <span
              className='logo__slogan'>
              с профессиональным подходом
            </span>
          </div>
        </div>
    );
  }
});
