import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import HomePage from './user/pages/HomePage/HomePage';
import Login from "./user/pages/Login/Login";
import Register from "./user/pages/Register/Register";



const Routes = () => {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
  );
};

Routes.propTypes = {};

export default Routes;
