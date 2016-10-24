import React from 'react';

export default React.createClass({
  displayName: 'FooterNav',
  propTypes: {
    pages: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },
  render: function() {
    const pages = this.props.pages;
    const count = pages.length;

    const getNavItemNodes = function(navItems, startIndex, endIndex) {
      const selNavItemNodes = [];
      for (let i = startIndex; i <= endIndex; i++) {
        selNavItemNodes.push(
          <li
            className='footer-nav__list-item'
            key={i + startIndex}>
            <a
              className='footer-nav__list-item-title'
              href={'#' + navItems[i].id}>
              {navItems[i].title}
            </a>
          </li>
        );
      }
      return selNavItemNodes;
    };

    return (
      <div className='footer-nav row'>
        <ul className='footer-nav__list col-md-6'>
          {getNavItemNodes(pages, 0, Math.ceil(count / 2) - 1)}
        </ul>
        <ul className='footer-nav__list col-md-6'>
          {getNavItemNodes(pages, Math.ceil(count / 2), count - 1)}
        </ul>
      </div>

    );
  }
});
