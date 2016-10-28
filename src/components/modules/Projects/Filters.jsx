/**
 *  @module Projects
 *  @class Filters
 *
 * React component for filters set
 */
import React from 'react';

export default React.createClass({
  displayName: 'mod-Projects__Filters',
  render() {
    return (
      <form
        className='col-md-3 mod-projects__filter'>
        <fieldset
          className='filter__field'>
          <legend
            className='field__title'>площадь</legend>
          <label>от <input type='number' /></label>
          <label>до <input type='number' /></label>
        </fieldset>
        <fieldset
          className='filter__field'>
          <legend>этажи</legend>
          <label><input type='checkbox' />1</label>
          <label><input type='checkbox' />2</label>
        </fieldset>
        <fieldset
          className='filter__field'>
          <legend>тип</legend>
          <label><input type='checkbox' />дом</label>
          <label><input type='checkbox' />баня</label>
        </fieldset>
        <fieldset
          className='filter__field'>
          <legend>технология</legend>
          <label><input type='checkbox' />профилированный брус</label>
          <label><input type='checkbox' />каркас</label>
          <label><input type='checkbox' />газобетон</label>
        </fieldset>
        <div>
          <button>применить</button>
          <button>сбросить</button>
        </div>
      </form>
    );
  }
});
