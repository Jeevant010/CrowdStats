
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>The Future of Crowdfunding is Here</h1>
            <p>
              Protect your IP with Story Protocol while raising funds on the blockchain.
              Transparent, secure, and globally accessible.
            </p>
            <div className="hero-buttons">
              <Link to="/CampaignPage" className="btn btn-primary">
                Explore Campaigns
              </Link>
              <Link to="/CreateCampaignPage" className="btn btn-outline">
                Start Your Campaign
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="process-flow">
              <h3>Web3 Crowdfunding Process Flow</h3>
              <img 
                src="/images/process-flow.png" 
                alt="Crowdfunding Process Flow" 
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/500x350?text=Process+Flow';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose CrowdFund3?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Intellectual Property Protection</h3>
              <p>Secure your creative assets with Story Protocol's on-chain IP registry and licensing infrastructure.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Low Transaction Fees</h3>
              <p>Our platform uses layer-2 solutions to keep gas costs minimal for creators and backers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global Accessibility</h3>
              <p>Anyone with an internet connection and crypto wallet can participate in or create campaigns.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Complete Transparency</h3>
              <p>All transactions are recorded on the blockchain, providing full visibility into funding allocation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Launch Your Campaign?</h2>
            <p>Join the decentralized crowdfunding revolution today</p>
            <Link to="/create" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;