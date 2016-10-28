/**
 * @module Projects
 * @class Projects
 *
 * React component for projects collection with filtering and pagination
 */
import React from 'react';

import expect from 'expect';

import Gallery from './Gallery';
import Filters from './Filters';
import Pager from './Pager';
import Sort from './Sort';

const data = {
  assets_path: 'assets/app_modules/mod_projects',
  projects: [
    {
      id: 'pb_15001',
      title: 'ПБ-15.001',
      img: 'pb_15001.jpg',
      params: {
        area: 100,
        floors: 1,
        type: [
          'house'
        ],
        techs: [
          'profiled_beam'
        ],
        status: 'построен 2016-II'
      }
    },
    {
      id: 'pb_15002',
      title: 'ПБ-15.002',
      img: 'pb_15002.jpg',
      params: {
        area: 150,
        floors: 2,
        type: [
          'house'
        ],
        techs: [
          'profiled_beam'
        ],
        status: 'построен 2016-III'
      }
    },
    {
      id: 'pb_15003',
      title: 'ПБ-15.003',
      img: 'pb_15003.jpg',
      params: {
        area: 180,
        floors: 2,
        type: [
          'house'
        ],
        techs: [
          'profiled_beam',
          'aerial_concrete'
        ],
        status: 'построен 2016-IV'
      }
    },
  ],
  filters: [

  ],
  sort: [

  ],
  pager: [

  ]
};

const translateTech = function( tech ) {
  const dictionary = {
    aerial_concrete: 'газобетон',
    profiled_beam: 'профилированный брус'
  };
  const translatedTech = dictionary[tech] || tech;
  return translatedTech;
};

const convertProjects = ( projects ) => {
  const transformParams = ( params ) => {
    const params_rev = {};
    let techs = '';
    params_rev.area = String(params.area);
    params_rev.status = params.status;
    params.techs.forEach( (tech, i, arr) => {
      techs += translateTech( tech );
      if ( arr.length > 1 && i < arr.length - 1) { techs += ', '; }
    } );
    params_rev.techs = techs;
    return params_rev;
  };
  const projects_rev = projects.map( (project) => {
    const project_rev = {};

    for (let prop in project) {
      switch (prop) {
        case 'img':
          project_rev[prop] = data.assets_path;
          project_rev[prop] += '/gallery_imgs/' + project[prop];
          break;
        case 'params':
          project_rev[prop] = transformParams( project[prop] );
          break;
        default:
          project_rev[prop] = project[prop];
      }
    }

    return project_rev;
  } );
  return projects_rev;
};

const testConvertProjects = () => {
  const projectsBefore = [
    {
      id: 'pb_15001',
      title: 'ПБ-15.001',
      img: 'pb_15001.jpg',
      params: {
        area: 100,
        floors: 1,
        type: [
          'house'
        ],
        techs: [
          'profiled_beam',
          'aerial_concrete'
        ],
        status: 'построен 2016-II'
      }
    }
  ];
  const projectsAfter = [
    {
      id: 'pb_15001',
      title: 'ПБ-15.001',
      img: 'assets/app_modules/mod_projects/gallery_imgs/pb_15001.jpg',
      params: {
        area: '100',
        techs: 'профилированный брус, газобетон',
        status: 'построен 2016-II'
      }
    }
  ];

  Object.freeze(projectsBefore);

  expect(
    convertProjects(projectsBefore)
  ).toEqual(projectsAfter);
};

testConvertProjects();

console.log('All tests passed.');

export default React.createClass({
  displayName: 'Projects',
  render() {
    return (
      <div
        className='container mod-projects'>
        <h2>
          Проекты домов и бань
        </h2>
        <div className='row'>
          <Filters className='col-md-3'/>
          <div className='col-md-9'>
            <Sort />
            <Gallery
              className='row mod-projects__gallery'
              projects={convertProjects(data.projects)} />
            <Pager className='row mod-projects__pager' />
          </div>
        </div>
      </div>
    );
  }
});
