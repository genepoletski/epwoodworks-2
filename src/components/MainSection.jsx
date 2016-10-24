import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import Content from './Content';

export default React.createClass({
  displayName: 'MainSection',
  render: function() {
    return (
      <div
        className='app__main-section container'>
        <Breadcrumbs />
        <Content />
      </div>
    );
  }
});
