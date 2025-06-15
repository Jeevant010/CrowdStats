import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateCampaign from './pages/CreateCampaign';
// import Profile from '.pages/Profile';
import Navbar from './component/Navbar';
import { CampaignProvider } from './context/CampaignContext';
import './App.css';

function App() {
  return (
    <CampaignProvider>
      <Router>
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </div>
      </Router>
    </CampaignProvider>
  );
}

export default App;
