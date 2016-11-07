import React from 'react';

export default React.createClass({
  displayName: 'Breadcrumbs',
  render: function() {
    return (
      <ul className='breadcrumbs'>
        <li className='breadcrumbs__item'>
          <a
            className='breadcrumbs__item-title'
            href="#">
            главная
          </a>
        </li>
        <li className='breadcrumbs__item'>
          <a
            className='breadcrumbs__item-title'
            href="#">
            проекты
          </a>
        </li>
      </ul>
    );
  }
});
