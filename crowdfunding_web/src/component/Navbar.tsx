import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">CrowdStats</Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/create-campaign">Create Campaign</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </nav>
  );
}
