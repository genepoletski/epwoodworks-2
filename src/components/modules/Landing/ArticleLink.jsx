/**
 * @module Landing
 * @class ArcticleLink
 *
 * React component for landing page article link
 */
import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  displayName: 'ArcticleLink',
  propTypes: {
    path: React.PropTypes.string.isRequired,
    text: React.PropTypes.string
  },
  render() {
    return (
      <Link
        to={this.props.path}>
        {this.props.text}
      </Link>
    );
  }
});
