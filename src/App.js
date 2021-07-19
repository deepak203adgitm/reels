import React, { useState } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Feeds from './Components/Feeds';
import Header from './Components/Header';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Signup from './Components/Signup';


function App() {
  return (
    <div className="App">
      <Header> </Header>

      <Router>
        <Switch>

   <Route path ='/login' component ={Login}></Route>
   <Route path ='/feeds' component ={Feeds}></Route>
   <Route path ='/profile' component ={Profile}></Route>
   <Route path ='/signup' component ={Signup}></Route>
      </Switch>

      </Router>
     

    </div>
  );
}

export default App;
