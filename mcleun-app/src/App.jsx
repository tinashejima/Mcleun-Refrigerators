import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import TargetMarket from './pages/TargetMarket.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import './Index.css'
import Layout from './Components/Layout.jsx';
import About from './pages/About.jsx'

function App() {
  return (

    <>
      <Router>

        {/* <Navbar /> */}
        <Routes>

          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/services' element={<Layout><Services /></Layout>} />
          <Route path='/target-market' element={<Layout><TargetMarket /></Layout>} />
          <Route path='/contact' element={<Layout><Contact /></Layout>} />
          <Route path='/about' element={<Layout><About /></Layout>} />
        </Routes>


      </Router>
    </>
  );
}
export default App;
