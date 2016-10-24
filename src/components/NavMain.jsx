import React from 'react';

export default React.createClass({
  displayName: 'NavMain',
  propTypes: {
    navTree: React.PropTypes.object.isRequired
  },
  render: function() {
    const pages = this.props.navTree.pages;
    const navItems = pages.map( (page, i) => {
      return (
        <li key={i}>
          <a href={'#' + page.id}>
            {page.title}
          </a>
        </li>
      );
    });

    return (
      <nav>
        <ul>
          {navItems}
        </ul>
      </nav>
    );
  }
});
