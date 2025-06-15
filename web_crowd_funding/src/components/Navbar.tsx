import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  const { isConnected, account, connectWallet, disconnectWallet } = useWallet();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          CrowdFund3
          <span className="beta-tag">BETA</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/CampaignPage" 
              className={`nav-link ${isActive('/CampaignPage')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Campaigns
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="./pages/CreateCampaignPage" 
              className={`nav-link ${isActive('/CreateCampaignPage')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Create
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="./pages/DashboardPage" 
              className={`nav-link ${isActive('/DashboardPage')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          </li>
        </ul>

        <div className="wallet-button">
          {!isConnected ? (
            <button className="connect-wallet-btn" onClick={connectWallet}>
              Connect Wallet
            </button>
          ) : (
            <div className="wallet-connected">
              <span className="wallet-address">{formatAddress(account!)}</span>
              <button className="disconnect-btn" onClick={disconnectWallet}>
                Disconnect
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;