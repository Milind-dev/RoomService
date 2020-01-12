import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Navbar from  './Component/Navbar'

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import  SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms">
              <Rooms />
        </Route>
        <Route exact path="/rooms/:slug" component={SingleRoom} />  
        <Route component={Error} />
     </Switch>  
    </div>
  );
}

export default App;
