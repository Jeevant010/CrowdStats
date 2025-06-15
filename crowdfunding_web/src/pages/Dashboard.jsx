import React, { useEffect, useState } from 'react';
import './Dashboard.css';

// Fixed campaigns (must match those in CreateCampaign)
const FIXED_CAMPAIGNS = [
  {
    id: 'fixed-1',
    title: 'Clean Water for All',
    description: 'Help us provide clean and safe water to remote villages.',
    goal: 5000,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    isFixed: true,
    createdAt: 0
  },
  {
    id: 'fixed-2',
    title: 'Education for Every Child',
    description: 'Support our mission to build schools in rural areas.',
    goal: 10000,
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    isFixed: true,
    createdAt: 0
  },
  {
    id: 'fixed-3',
    title: 'Healthcare Access Fund',
    description: 'Provide essential healthcare to those in need.',
    goal: 8000,
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    isFixed: true,
    createdAt: 0
  }
];

const Dashboard = () => {
  const [activeCampaigns, setActiveCampaigns] = useState([]);

  useEffect(() => {
    // 1. Read logs from localStorage
    const logsData = localStorage.getItem('campaigns_log');
    let logs = [];
    if (logsData) {
      try {
        logs = JSON.parse(logsData);
      } catch {
        logs = [];
      }
    }

    // 2. Extract all created campaigns
    const createdCampaigns = {};
    const removedCampaignIds = new Set();

    logs.forEach(log => {
      if (log.action === 'created') {
        createdCampaigns[log.campaign.id] = log.campaign;
      } else if (log.action === 'removed') {
        removedCampaignIds.add(log.campaign.id);
      }
    });

    // 3. Only keep those not removed
    const logCampaigns = Object.values(createdCampaigns).filter(
      c => !removedCampaignIds.has(c.id)
    );

    // 4. Combine with fixed campaigns
    setActiveCampaigns([...FIXED_CAMPAIGNS, ...logCampaigns]);
  }, []);

  // Calculate stats
  const totalCampaigns = activeCampaigns.length;
  const totalGoal = activeCampaigns.reduce((sum, c) => sum + (c.goal || 0), 0);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-summary">
        <div className="summary-card">
          <h2>{totalCampaigns}</h2>
          <p>Total Campaigns</p>
        </div>
        <div className="summary-card">
          <h2>${totalGoal.toLocaleString()}</h2>
          <p>Total Funding Goal</p>
        </div>
      </div>
      <section className="dashboard-campaigns">
        <h2>Active Campaigns</h2>
        {activeCampaigns.length === 0 ? (
          <p>No active campaigns.</p>
        ) : (
          <ul className="campaigns-list">
            {activeCampaigns.map(c => (
              <li key={c.id} className="campaign-card">
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                <p className="goal">Goal: ${c.goal}</p>
                {c.createdAt && c.createdAt !== 0 && (
                  <p className="created-at">
                    Created: {new Date(c.createdAt).toLocaleString()}
                  </p>
                )}
                {c.isFixed && (
                  <span className="fixed-label">Featured</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
