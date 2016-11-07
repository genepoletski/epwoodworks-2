/**
 *  @module Projects
 *  @class Gallery
 *
 * React component for showing processed set of projects
 */
import React from 'react';

import GalleryItem from './GalleryItem';

export default React.createClass({
  displayName: 'mod-Projects__Gallery',
  propTypes: {
    className: React.PropTypes.string,
    projects: React.PropTypes.arrayOf( React.PropTypes.object )
  },
  render () {
    const projectNodes = this.props.projects.map((project) => {
      return (
        <GalleryItem
          key={project.id}
          className='col-md-4'
          title={project.title}
          img={project.img}
          area={project.params.area}
          techs={project.params.techs}
          status={project.params.status}
          />
      );
    });
    return (
      <div
        className={this.props.className}>
        {projectNodes}
      </div>
    );
  }
});
