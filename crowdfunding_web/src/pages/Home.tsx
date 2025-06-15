import React, { useState, useEffect } from "react";
import './Home.css';

// Same fixed campaigns as in CreateCampaign
const FIXED_CAMPAIGNS = [
  {
    id: 'fixed-1',
    title: 'Clean Water for All',
    description: 'Help us provide clean and safe water to remote villages.',
    goal: 5000,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    duration: null,
    durationUnit: null,
    createdAt: 0,
    isFixed: true
  },
  {
    id: 'fixed-2',
    title: 'Education for Every Child',
    description: 'Support our mission to build schools in rural areas.',
    goal: 10000,
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    duration: null,
    durationUnit: null,
    createdAt: 0,
    isFixed: true
  },
  {
    id: 'fixed-3',
    title: 'Healthcare Access Fund',
    description: 'Provide essential healthcare to those in need.',
    goal: 8000,
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    duration: null,
    durationUnit: null,
    createdAt: 0,
    isFixed: true
  }
];

const CAMPAIGNS_KEY = 'campaigns';

function getCampaigns() {
  const data = localStorage.getItem(CAMPAIGNS_KEY);
  return data ? JSON.parse(data) : [];
}

export default function Home() {
  const [campaigns, setCampaigns] = useState(getCampaigns());

  useEffect(() => {
    // Listen for campaign changes in localStorage (if multiple tabs)
    const handleStorage = () => setCampaigns(getCampaigns());
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Combine fixed and user campaigns for display
  const allCampaigns = [...FIXED_CAMPAIGNS, ...campaigns.filter(c => !c.isFixed)];

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to <span className="gradient-text">CrowdStats</span></h1>
        <p>Support innovative projects and ideas</p>
        <a href="/create-campaign" className="cta-button">
          Start a Campaign
        </a>
      </section>

      <section className="campaigns-section">
        <h2>Active Campaigns</h2>
        {allCampaigns.length === 0 ? (
          <div className="no-campaigns">
            <p>No campaigns have been created yet.</p>
            <a href="/create-campaign">Create the first campaign</a>
          </div>
        ) : (
          <div className="campaigns-grid">
            {allCampaigns.map((c) => (
              <div key={c.id} className="campaign-card">
                {c.image && (
                  <img
                    src={c.image}
                    alt={c.title}
                    className="campaign-image"
                  />
                )}
                <h3>{c.title}</h3>
                <p className="campaign-description">{c.description}</p>
                <p className="campaign-goal">Goal: ${c.goal}</p>
                {c.duration && c.durationUnit && (
                  <p className="campaign-active">
                    Active for: {c.duration} {c.durationUnit}
                  </p>
                )}
                {c.isFixed && (
                  <span className="fixed-label">Featured</span>
                )}
                {/* Add more campaign info or actions as needed */}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
