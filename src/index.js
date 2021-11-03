import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/navbar.css';
import './styles/contactspopup.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import TopBar from './components/TopBar';
import Projects from './pages/projects';
import About from './pages/aboutme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TopBar/>
        <Switch>
            <Route exact path='/PersonalWebsite'><Projects/></Route> 
            <Route exact path='/PersonalWebsite/about'><About/></Route>
        </Switch>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


