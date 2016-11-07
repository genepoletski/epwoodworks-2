/**
 * @module Landing
 * @class Article
 *
 * React component for landing page articles
 */
import React from 'react';
import ArticleLink from './ArticleLink';
import marked from 'marked';

export default React.createClass({
  displayName: 'Article',

  propTypes: {
    className: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    link: React.PropTypes.objectOf(React.PropTypes.string)
  },

  createMarkup(markupSource) {
    return {
      __html: marked(markupSource)
    };
  },

  render() {
    return (
      <div
        className={this.props.className + ' article'}>
        <h3>{this.props.title}</h3>
        <div
          className='article-text'
          dangerouslySetInnerHTML={this.createMarkup(this.props.text)}>
        </div>
        <span className='article-link'>
          <ArticleLink {...this.props.link}/>
        </span>
      </div>
    );
  }
});
