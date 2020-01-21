import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashBoard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar.component';

function App() {
  return (
    <BrowserRouter>
      <div className='App'></div>
      <Navbar />
      {/* Rotes */}
      <Switch>
        <Route path='/' component={DashBoard}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
