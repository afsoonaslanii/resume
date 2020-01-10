import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import DefaultLayout from './layouts';
import AboutMe from './about-me';
import Contact from './contact';
import Education from './education-exprience';
import WorkSample from './work-sample';

function App() {
  return (
    <Router>
      <Switch>
        <DefaultLayout exact path='/' component={AboutMe}/>
        <DefaultLayout exact path='/contact' component={Contact}/>
        <DefaultLayout exact path='/education' component={Education}/>
        <DefaultLayout exact path='/work-sample' component={WorkSample}/>
      </Switch>
    </Router>
  );
}

export default App;
