import React from 'react';
import { Link } from 'react-router';

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
          <Link
            className='nav-main__top-list-item-text'
            to={'/' + page.id}>{page.title}</Link>
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
