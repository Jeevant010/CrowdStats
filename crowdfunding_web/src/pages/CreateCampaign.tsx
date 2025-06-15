import React, { useState, useEffect, useCallback } from 'react';
import './CreateCampaign.css';

const CAMPAIGNS_KEY = 'campaigns';
const CAMPAIGN_LOG_KEY = 'campaigns_log';

// Three fixed, non-deletable campaigns
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

const timeUnitToSeconds = {
  seconds: 1,
  minutes: 60,
  hours: 3600,
  days: 86400,
};

function getCampaigns() {
  const data = localStorage.getItem(CAMPAIGNS_KEY);
  return data ? JSON.parse(data) : [];
}

function getCampaignLogs() {
  const data = localStorage.getItem(CAMPAIGN_LOG_KEY);
  return data ? JSON.parse(data) : [];
}

function saveCampaigns(campaigns) {
  localStorage.setItem(CAMPAIGNS_KEY, JSON.stringify(campaigns));
}

function saveCampaignLogs(logs) {
  localStorage.setItem(CAMPAIGN_LOG_KEY, JSON.stringify(logs));
}

function logAction(action, campaign) {
  const logs = getCampaignLogs();
  logs.push({
    action,
    campaign,
    timestamp: new Date().toISOString(),
  });
  saveCampaignLogs(logs);
}

const isAdmin = true;

const CreateCampaign = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [image, setImage] = useState('');
  const [duration, setDuration] = useState('5');
  const [durationUnit, setDurationUnit] = useState('seconds');
  const [campaigns, setCampaigns] = useState(getCampaigns());
  const [logs, setLogs] = useState(getCampaignLogs());

  // Cleanup expired campaigns (runs on mount and every second)
  const cleanupExpiredCampaigns = useCallback(() => {
    const now = Date.now();
    let changed = false;
    const validCampaigns = campaigns.filter(c => {
      if (c.isFixed) return true; // Never delete fixed campaigns
      const expiry = c.createdAt + c.durationInSeconds * 1000;
      if (now >= expiry) {
        setLogs(prevLogs => [
          ...prevLogs,
          { action: 'removed', campaign: c, timestamp: new Date().toISOString() }
        ]);
        logAction('removed', c);
        changed = true;
        return false;
      }
      return true;
    });
    if (changed) setCampaigns(validCampaigns);
  }, [campaigns]);

  useEffect(() => {
    setCampaigns(getCampaigns());
    setLogs(getCampaignLogs());
  }, []);

  useEffect(() => {
    saveCampaigns(campaigns);
    saveCampaignLogs(logs);
  }, [campaigns, logs]);

  useEffect(() => {
    cleanupExpiredCampaigns();
    const interval = setInterval(cleanupExpiredCampaigns, 1000);
    return () => clearInterval(interval);
  }, [cleanupExpiredCampaigns]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !goal || !duration) {
      alert('Please fill in all required fields');
      return;
    }

    const durationValue = parseInt(duration, 10);
    if (isNaN(durationValue) || durationValue <= 0) {
      alert('Duration must be a positive number');
      return;
    }

    const durationInSeconds = durationValue * timeUnitToSeconds[durationUnit];

    const newCampaign = {
      id: Date.now(),
      title,
      description,
      goal: parseFloat(goal),
      image,
      duration: durationValue,
      durationUnit,
      durationInSeconds,
      createdAt: Date.now(),
      isFixed: false
    };

    setCampaigns((prev) => [...prev, newCampaign]);
    setLogs((prev) => [
      ...prev,
      { action: 'created', campaign: newCampaign, timestamp: new Date().toISOString() },
    ]);
    logAction('created', newCampaign);

    setTitle('');
    setDescription('');
    setGoal('');
    setImage('');
    setDuration('5');
    setDurationUnit('seconds');
  };

  // Admin-only: Restart (delete all user campaigns, keep fixed)
  const handleRestart = () => {
    setCampaigns(campaigns.filter(c => c.isFixed));
    saveCampaigns(campaigns.filter(c => c.isFixed));
    setLogs((prevLogs) => [
      ...prevLogs,
      {
        action: 'restart',
        campaign: null,
        timestamp: new Date().toISOString(),
      },
    ]);
    logAction('restart', { message: 'All user campaigns deleted by admin' });
  };

  // Combine fixed and user campaigns for display
  const allCampaigns = [...FIXED_CAMPAIGNS, ...campaigns.filter(c => !c.isFixed)];

  return (
    <div className="campaign-bg">
      <div className="glass-container">
        <h1>
          <span className="gradient-text">Create New Campaign</span>
        </h1>
        <form onSubmit={handleSubmit} className="campaign-form">
          <div className="form-group">
            <label>Campaign Title
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>Description
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>Funding Goal ($)
              <input
                type="number"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>Campaign Image URL (optional)
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label>Active Time
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="number"
                  min="1"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                  style={{ flex: 2 }}
                />
                <select
                  value={durationUnit}
                  onChange={(e) => setDurationUnit(e.target.value)}
                  style={{ flex: 3 }}
                >
                  <option value="seconds">Seconds</option>
                  <option value="minutes">Minutes</option>
                  <option value="hours">Hours</option>
                  <option value="days">Days</option>
                </select>
              </div>
            </label>
          </div>
          <button type="submit" className="submit-button">
            🚀 Launch Campaign
          </button>
        </form>
        {isAdmin && (
          <button className="restart-button" onClick={handleRestart}>
            <span role="img" aria-label="skull">💀</span> Restart (Delete All User Campaigns)
          </button>
        )}

        <h2 className="section-heading">Active Campaigns</h2>
        {allCampaigns.length === 0 ? (
          <p className="empty-text">No active campaigns.</p>
        ) : (
          <ul className="campaign-list">
            {allCampaigns.map((c) => (
              <li key={c.id} className="campaign-card">
                <div className="card-header">
                  <strong className="campaign-title">{c.title}</strong>
                  <span className="campaign-goal">${c.goal}</span>
                </div>
                <div className="campaign-desc">{c.description}</div>
                {c.duration && c.durationUnit && (
                  <span className="campaign-duration">
                    ⏳ {c.duration} {c.durationUnit}
                  </span>
                )}
                {c.image && (
                  <div>
                    <img src={c.image} alt={c.title} className="campaign-image" />
                  </div>
                )}
                {c.isFixed && (
                  <span className="fixed-label">Featured</span>
                )}
              </li>
            ))}
          </ul>
        )}

        <h2 className="section-heading">Campaign Log</h2>
        {logs.length === 0 ? (
          <p className="empty-text">No log entries.</p>
        ) : (
          <ul className="log-list">
            {logs
              .slice()
              .reverse()
              .map((log, idx) => (
                <li key={log.timestamp || idx} className="log-entry">
                  <span className={`log-action log-${log.action}`}>
                    [{log.action.toUpperCase()}]
                  </span>{' '}
                  {log.campaign && log.campaign.title
                    ? <strong>{log.campaign.title}</strong>
                    : <em>All campaigns</em>
                  } at {new Date(log.timestamp).toLocaleTimeString()}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CreateCampaign;
