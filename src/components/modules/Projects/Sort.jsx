/**
 *  @module Projects
 *  @class Sort
 *
 * React component for sorting tool
 */
import React from 'react';

export default React.createClass({
  displayName: 'mod-Projects__Sort',
  render() {
    return (
      <div className='mod-projects__sort'>
        сортировать
        <ul
          className='sort-list'>
          <li
            className='sort-list__item'>
            площадь
          </li>
          <li
            className='sort-list__item'>
            технология
          </li>
          <li
            className='sort-list__item'>
            наименование
          </li>
        </ul>
      </div>
    );
  }
});
