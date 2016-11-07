/**
 * @module Landing
 * @class Landing
 *
 * React component for landing page
 */

import React from 'react';
import Slider from './Slider';
import Article from './Article';

//
// TODO Remove fake articles data on release
// TODO Add text markup capability
//
const content = {
  articles: [
    {
      title: 'Каталог проектов',
      text: '* Изучайте проекты реальных деревянных домов и бань.\n* Используйте фильтры для отсеивания ненужного.\n* Получайте основные объемы материалов и конструкций.\n* Сохраняйте ссылки на проекты и обменивайтесь ими.',
      link: {
        path: '/projects'
      }
    },
    {
      title: 'Оценка стоимости',
      text: '* Оценивайте стоимость проектирования и строительства.\n* Меняйте параметры проекта под свои нужды.\n* Определяйте соотвествующее именно вашей ситуации решение.\n* Сохраняйте ссылки на различные варианты расчетов.',
      link: {
        path: '/costs'
      }
    },
    {
      title: 'Расчет балок',
      text: '* Проверяйте деревянные балки с нужными параметрами.\n* Задавайте или выбирайте нагрузки от конструкций и снега.\n* Меняйте состав конструкций под свои требования.\n* Сохраняйте ссылки на альтернативные результаты расчетов.',
      link: {
        path: '/calcs'
      }
    }
  ]
};

const sliderData = {
  slides: [
    {
      path: 'assets/app_modules/mod_landing/slider_imgs/slide_01.jpg'
    },
    {
      path: 'assets/app_modules/mod_landing/slider_imgs/slide_02.jpg'
    },
    {
      path: 'assets/app_modules/mod_landing/slider_imgs/slide_03.jpg'
    },
    {
      path: 'assets/app_modules/mod_landing/slider_imgs/slide_04.jpg'
    }
  ]
};

export default React.createClass({
  displayName: 'Landing',

  render: function() {
    const ArticleNodes = content.articles.map((article, i) => {
      return (
        <Article
          key={i}
          className='col-md-4' {...article} />
      );
    });
    return (
      <div
        className='container'>
        <div className='row'>
          <Slider className='col-xs-12' {...sliderData} />
        </div>
        <div
          className='row mod-landing__articles'>
          {ArticleNodes}
        </div>
      </div>
    );
  }
});
