import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import TargetMarket from './pages/TargetMarket.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/target-market" element={<Layout><TargetMarket /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
