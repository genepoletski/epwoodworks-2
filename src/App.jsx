import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
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
  render: function() {
    return (
      <div>
        <Header navTree={navTree}/>
        <MainSection />
        <Footer navTree={navTree}/>
      </div>
    );
  }
});
