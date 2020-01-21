import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/layout/Navbar.component';

function App() {
  return (
    <BrowserRouter>
      <div className='App'></div>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
