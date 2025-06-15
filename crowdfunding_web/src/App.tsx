import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WalletConnect from './component/WalletConnect';
import Home from "./pages/Home";
import CreateCampaign from './pages/CreateCampaign';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Navbar from "./component/Navbar";
import { CampaignProvider } from './context/CampaignContext';

export default function App() {
  return (
    <CampaignProvider>
      <Router>
        <div style={{ padding: 20 }}>
          <header style={{ marginBottom: 20 }}>
            <WalletConnect />
            <Navbar />   {/* Only here! */}
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-campaign" element={<CreateCampaign />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CampaignProvider>
  );
}

