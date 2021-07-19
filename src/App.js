import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Feeds from './Components/Feeds';
import Header from './Components/Header';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Signup from './Components/Signup';
import { AuthContext, AuthProvider } from "./context/AuthProvider";


function App() {
  return (
    <div className="App">
      <Header> </Header>

      <Router>
        <Switch>

          <Route path='/login' component={Login} exact ></Route>
          <Route path='/' component={Feeds} exact ></Route>
          <PrivateRoute path="/" comp={Feeds}></PrivateRoute>
          <PrivateRoute path="/profile" comp={Profile}></PrivateRoute>
        </Switch>

      </Router>


    </div>
  );
}


function PrivateRoute(props) {
  let { comp: Component, path } = props;
  // Feeds ?? loggedIn and path="/"
  let { currentUser } = useContext(AuthContext);
 
  return currentUser ? (
    <Route path={path} component={Component}></Route>
  ) : (
    <Redirect to="/login"></Redirect>
  );
}


export default App;
