import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import Calcs from './components/modules/Calcs/Calcs';
import Contacts from  './components/modules/Contacts/Contacts';
import Costs from     './components/modules/Costs/Costs';
import Landing from   './components/modules/Landing/Landing';
import Projects from  './components/modules/Projects/Projects';
import Project from   './components/modules/Projects/Project';

export default React.createClass ({
  displayName: 'Router',
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Landing} />
          <Route path='/main' component={Landing} />
          <Route path='/projects' component={Projects} />
          <Route path='/projects/project/:projectID' component={Project} />
          <Route path='/costs' component={Costs} />
          <Route path='/calcs' component={Calcs} />
          <Route path='/contacts' component={Contacts} />
        </Route>
      </Router>
    );
  }
});
