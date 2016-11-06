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
      text: 'Изучайте проекты реальных деревянных домов, бань и прочих построек и конструкций. Используйте фильтры для поиска по заданным параметрам. Сохраняйте ссылки на понравивишиеся проекты и обменивайтесь ими. Получайте объемы основных материалов и конструкций для оценки стоимости строительства и проектирования таких же или аналогичных домов и бань.',
      link: {
        path: '/projects'
      }
    },
    {
      title: 'Оценка стоимости',
      text: 'Получите оценочный расчет стоимости проектирования и строительства деревянного дома или бани. Меняйте параметры проекта под свои нужды и выбирайте итоговый вариант. Определяйтесь с окончательным решением, которое максимально соотвествует вашей ситуации, и получайте его стоимость. Сохраняйте ссылки на различные варианты расчетов.',
      link: {
        path: '/costs'
      }
    },
    {
      title: 'Расчет балок',
      text: 'Проверяйте, можно ли использовать деревянную балку с заданными параметрами в вашей конкретной ситуации. Задавайте или выбирайте нагрузки от конструкций и снега. Меняйте состав конструкций в соответствии с вашими требованиями и видениями. Сохраняйте ссылки на результаты расчетов чтобы всегда иметь несколько альтернатив под рукой.',
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
