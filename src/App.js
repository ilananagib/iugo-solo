import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';
import SideNavBar from './components/SideNavBar/SideNavBar';
import AboutPage from './components/AboutPage/AboutPage';
import CategoriesPage from './components/CategoriesPage/CategoriesPage';
import ContactPage from './components/ContactPage/ContactPage';


import './styles/main.css';


const App = () => (
  <div>
    <Header />
    <SideNavBar/>
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/info"
          component={InfoPage}
        />
         <Route
          path="/about"
          component={AboutPage}
        />
         <Route
          path="/categories"
          component={CategoriesPage}
        />

       <Route
          path="/contact"
          component={ContactPage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
