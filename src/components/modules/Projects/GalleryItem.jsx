/**
 *  @module Projects
 *  @class GalleryItem
 *
 * React component for displaying project as a gallery item
 */
import React from 'react';

export default React.createClass({
  displayName: 'mod-Projects__GalleryItem',
  propTypes: {
    className: React.PropTypes.string,
    area: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    img: React.PropTypes.string.isRequired,
    techs: React.PropTypes.string,
    title: React.PropTypes.string,
    status: React.PropTypes.string
  },
  render() {
    return (
      <div
        className={this.props.className + ' gallery-item'}>
        <img src={this.props.img} />
        <h4
          className='gallery-item__title'>
          {this.props.title}
        </h4>
        <span
          className='gallery-item__param'>
          {this.props.area} м2
        </span>
        <span
          className='gallery-item__param'>
          {this.props.techs}
        </span>
        <span
          className='gallery-item__param'>
          {this.props.status}
        </span>
      </div>
    );
  }
});
