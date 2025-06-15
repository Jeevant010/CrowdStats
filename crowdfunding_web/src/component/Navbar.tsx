import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/create-campaign", label: "Create Campaign" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" ? "light" : "dark"
  );
  const [sidebarMode, setSidebarMode] = useState(false); // false = topbar, true = sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false); // for mobile hamburger
  const location = useLocation();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Always show sidebar in sidebar mode (desktop)
  // Only show sidebar on mobile when hamburger is open
  const isMobile = window.innerWidth <= 900;

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const toggleSidebarMode = () => setSidebarMode((prev) => !prev);
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  // Sidebar content
  const SidebarContent = (
    <aside className={`sidebar${sidebarMode ? " permanent" : ""}${sidebarOpen ? " open" : ""}`}>
      <div className="sidebar-header">
        <Link to="/" className="sidebar-logo" onClick={closeSidebar}>
          ⚡ CrowdStats
        </Link>
        {!sidebarMode && (
          <button className="sidebar-close-btn" onClick={closeSidebar}>
            ×
          </button>
        )}
      </div>
      <div className="sidebar-links">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={location.pathname === link.to ? "active" : ""}
            onClick={closeSidebar}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="sidebar-actions">
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
        <button className="sidebar-toggle-btn" onClick={toggleSidebarMode}>
          {sidebarMode ? "Topbar" : "Sidebar"}
        </button>
      </div>
    </aside>
  );

  return (
    <>
      {/* Top Navbar (hidden in sidebarMode on desktop) */}
      {(!sidebarMode || isMobile) && (
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/" className="navbar-logo">
              <span className="logo-bolt" role="img" aria-label="bolt">⚡</span>
              <span className="logo-text">CrowdStats</span>
            </Link>
          </div>
          <div className="navbar-center">
            <div className="navbar-links">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={location.pathname === link.to ? "active" : ""}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="navbar-right">
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {theme === "dark" ? "🌞" : "🌙"}
            </button>
            <button
              className="sidebar-toggle-btn"
              onClick={toggleSidebarMode}
              title="Switch to Sidebar"
            >
              {sidebarMode ? <span role="img" aria-label="topbar">☰</span> : <span role="img" aria-label="sidebar">📑</span>}
            </button>
            <button
              className="hamburger-btn"
              onClick={openSidebar}
              aria-label="Open Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      )}

      {/* Sidebar: always visible in sidebarMode on desktop, or as overlay on mobile */}
      {(sidebarMode && !isMobile) && SidebarContent}
      {(sidebarOpen && isMobile) && (
        <>
          <div className="sidebar-overlay open" onClick={closeSidebar} />
          {SidebarContent}
        </>
      )}
    </>
  );
}
