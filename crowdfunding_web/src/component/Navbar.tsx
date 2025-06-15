import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">CrowdStats</a>
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/create">Create</a>
          <a href="/profile">Profile</a>
        </div>
      </div>
    </nav>
  );
}
