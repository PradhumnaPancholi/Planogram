import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import DashBoard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar.component';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <div className='App'></div>
      <Navbar />
      {/* Rotes */}
      <Switch>
        <Route exact path='/' component={DashBoard} />
        <Route path='/projects/:id' component={ProjectDetails} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
