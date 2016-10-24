import React from 'react';

export default React.createClass({
  displayName: 'NavMain',
  propTypes: {
    pages: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },
  render: function() {
    const pages = this.props.pages;
    const navItems = pages.map( (page, i) => {
      return (
        <li
          className='nav-main__top-list-item'
          key={i}>
          <a
            className='nav-main__top-list-item-title'
            href={'#' + page.id}>
            {page.title}
          </a>
        </li>
      );
    });

    return (
      <nav className='nav-main'>
        <ul className='nav-main__top-list'>
          {navItems}
        </ul>
      </nav>
    );
  }
});
