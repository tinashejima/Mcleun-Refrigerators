import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';

function App() {
  return (

    <>
      <Router>

        <Navbar />
        <Routes>

          <Route path='/' />
        </Routes>


      </Router>
    </>
  );
}

export default App;
