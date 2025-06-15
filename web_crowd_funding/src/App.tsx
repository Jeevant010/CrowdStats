import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProviders } from './context/index';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import HomePage from './pages/HomePage';
import CampaignsPage from './pages/CampaignPage';
import CreateCampaignPage from './pages/CreateCampaignPage';
import DashboardPage from './pages/DashboardPage';
// import CampaignDetailsPage from './pages/CampaignDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/global.css';

function App() {
  return (
    <AppProviders>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/campaigns" element={<CampaignsPage />} />
              {/* <Route path="/campaigns/:id" element={<CampaignDetailsPage />} /> */}
              <Route path="/create" element={<CreateCampaignPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProviders>
  );
}

export default App;
