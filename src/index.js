import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/contactpage.css';
import './styles/navbar.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from './components/NavBar';
import Projects from './pages/projects';
import ContactForm from './pages/ContactForm';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
        <Switch>
            <Route exact path='/'><Projects/></Route> 
            <Route exact path='/ContactForm'><ContactForm/></Route>
        </Switch>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


