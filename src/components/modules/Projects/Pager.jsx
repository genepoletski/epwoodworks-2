/**
 *  @module Projects
 *  @class Pager
 *
 * React component for projects set pagination
 */
import React from 'react';

export default React.createClass({
  displayName: 'mod-Projects__Pager',
  propTypes: {
    className: React.PropTypes.string
  },
  render() {
    return (
      <div
        className={this.props.className}>
        <div className='pager__pages'>
          <ul className='pages-list'>
            <li className='pages-list__page'>1</li>
            <li className='pages-list__page'>2</li>
            <li className='pages-list__page'>3</li>
          </ul>
        </div>
      </div>
    );
  }
});
