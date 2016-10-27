import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const navTree = {
  pages: [
    {
      id: 'main',
      title: 'главная'
    },
    {
      id: 'projects',
      title: 'проекты'
    },
    {
      id: 'costs',
      title: 'стоимость'
    },
    {
      id: 'contacts',
      title: 'контакты'
    }
  ]
};

export default React.createClass({
  displayName: 'App',
  propTypes: {
    children: React.PropTypes.element.isRequired
  },
  render: function() {
    return (
      <div>
        <Header navTree={navTree} />
        <div className='app__main-section'>
          {this.props.children}
        </div>
        <Footer navTree={navTree} />
      </div>
    );
  }
});
