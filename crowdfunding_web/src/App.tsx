import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WalletConnect from './component/WalletConnect';
import Home from "./pages/Home";
import CreateCampaign from './pages/CreateCampaign';
// import Profile from './pages/Profile';

import Navbar from "./component/Navbar";
import { CampaignProvider } from './context/CampaignContext';

export default function App() {
  return (
    <CampaignProvider>
      <Router>
        <div style={{ padding: 20 }}>
          <header style={{ marginBottom: 20 }}>
            <WalletConnect />
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-campaign" element={<CreateCampaign />} />
              {/* <Route path="/profile" element={<Profile />} /> */}
            </Routes>
          </main>
        </div>
      </Router>
    </CampaignProvider>
  );
}
