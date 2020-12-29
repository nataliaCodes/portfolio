// import React, { Fragment } from 'react'

import './App.scss';

import Navbar from './Navbar';
import Contact from './Contact';
import Summary from './Summary';
import Info from './Info';
import Languages from './Languages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <Summary />
      <div className="Information">
        <Contact />
        <Languages />
      </div>
    </div>
  );
}

export default App;
