/**
 * @module Landing
 * @class Arcticle
 *
 * React component for landing page articles
 */
import React from 'react';
import ArticleLink from './ArticleLink';

export default React.createClass({
  displayName: 'Article',
  propTypes: {
    className: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    link: React.PropTypes.objectOf(React.PropTypes.string)
  },
  render() {
    return (
      <div
        className={this.props.className}>
        <h3>{this.props.title}</h3>
        <p className='lead'>{this.props.text}</p>
        <span className='mod__landing__article__link'>
          <ArticleLink {...this.props.link}/>
        </span>
      </div>
    );
  }
});
