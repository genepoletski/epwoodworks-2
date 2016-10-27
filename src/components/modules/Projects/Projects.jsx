/**
 * @module Projects
 * @class Projects
 *
 * React component for projects collection with filtering and pagination
 */
import React from 'react';

export default React.createClass({
  displayName: 'Projects',
  render() {
    return (
      <div
        className='container mod-projects'>
        <h2>
          Проекты домов и бань
        </h2>
        <div className='row'>

          <form
            className='col-md-3 mod-projects__filter'>
            <fieldset
              className='filter__field'>
              <legend>площадь</legend>
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

          <div className='col-md-9'>

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

            <div className='row mod-projects__gallery'>

              <div className='col-md-4 gallery-item'>
                <img src='#' />
                <h4
                  className='gallery-item__title'>
                  проект ПБ-001
                </h4>
                <span
                  className='gallery-item__param'>
                  100 м2
                </span>
                <span
                  className='gallery-item__param'>
                  профилированный брус
                </span>
                <span
                  className='gallery-item__param'>
                  построен 2016-III
                </span>
              </div>

              <div className='col-md-4 gallery-item'>
                <img src='#' />
                <h4
                  className='gallery-item__title'>
                  проект ПБ-001
                </h4>
                <span
                  className='gallery-item__param'>
                  100 м2
                </span>
                <span
                  className='gallery-item__param'>
                  профилированный брус
                </span>
                <span
                  className='gallery-item__param'>
                  построен 2016-III
                </span>
              </div>

              <div className='col-md-4 gallery-item'>
                <img src='#' />
                <h4
                  className='gallery-item__title'>
                  проект ПБ-001
                </h4>
                <span
                  className='gallery-item__param'>
                  100 м2
                </span>
                <span
                  className='gallery-item__param'>
                  профилированный брус
                </span>
                <span
                  className='gallery-item__param'>
                  построен 2016-III
                </span>
              </div>

              <div className='col-md-4 gallery-item'>
                <img src='#' />
                <h4
                  className='gallery-item__title'>
                  проект ПБ-001
                </h4>
                <span
                  className='gallery-item__param'>
                  100 м2
                </span>
                <span
                  className='gallery-item__param'>
                  профилированный брус
                </span>
                <span
                  className='gallery-item__param'>
                  построен 2016-III
                </span>
              </div>

              <div className='col-md-4 gallery-item'>
                <img src='#' />
                <h4
                  className='gallery-item__title'>
                  проект ПБ-001
                </h4>
                <span
                  className='gallery-item__param'>
                  100 м2
                </span>
                <span
                  className='gallery-item__param'>
                  профилированный брус
                </span>
                <span
                  className='gallery-item__param'>
                  построен 2016-III
                </span>
              </div>

              <div className='col-md-4 gallery-item'>
                <img src='#' />
                <h4
                  className='gallery-item__title'>
                  проект ПБ-001
                </h4>
                <span
                  className='gallery-item__param'>
                  100 м2
                </span>
                <span
                  className='gallery-item__param'>
                  профилированный брус
                </span>
                <span
                  className='gallery-item__param'>
                  построен 2016-III
                </span>
              </div>

            </div>

            <div className='row mod-projects__pager'>
              <div className='pager__pages'>
                <ul className='pages-list'>
                  <li className='pages-list__page'>1</li>
                  <li className='pages-list__page'>2</li>
                  <li className='pages-list__page'>3</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
});
