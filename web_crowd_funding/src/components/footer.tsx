import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>CrowdFund3</h3>
          <p>The future of decentralized crowdfunding with IP protection through Story Protocol.</p>
        </div>

        <div className="footer-section">
          <h3>Navigation</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/campaigns">Campaigns</Link></li>
            <li><Link to="/create">Create Campaign</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul className="footer-links">
            <li><a href="https://story.xyz" target="_blank" rel="noopener noreferrer">Story Protocol</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Documentation</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">API</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Help Center</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Discord</a>
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CrowdFund3. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;