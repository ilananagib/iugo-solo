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
import AboutPage from './components/AboutPage/AboutPage';
import CategoriesPage from './components/CategoriesPage/CategoriesPage';
import ContactPage from './components/ContactPage/ContactPage';
import HealthcarePage from './components/HealthcarePage/HealthcarePage';
import SupportPage from './components/SupportPage/SupportPage';
import HousingPage from './components/HousingPage/HousingPage';
import FoodPage from './components/FoodPage/FoodPage';
import EducationPage from './components/EducationPage/EducationPage';
import CareerPage from './components/CareerPage/CareerPage';
import './styles/main.css';


const App = () => (
  <div>
    <Header />
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
         <Route
          path="/healthcare"
          component={HealthcarePage}
        />
         <Route
          path="/support"
          component={SupportPage}
        />
         <Route
          path="/housing"
          component={HousingPage}
        />
          <Route
          path="/food"
          component={FoodPage}
        />
           <Route
          path="/education"
          component={EducationPage}
        />
           <Route
          path="/career"
          component={CareerPage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
