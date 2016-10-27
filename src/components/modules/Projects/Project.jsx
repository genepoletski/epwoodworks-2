/**
 *  @module Projects
 *  @class Project
 *
 * React component for detailed project view
 */

import React from 'react';

export default React.createClass({
  displayName: 'Project',
  propTypes: {
    params: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <div>
        <h3>
          Проект {this.props.params.projectID}
        </h3>
      </div>
    );
  }
});
