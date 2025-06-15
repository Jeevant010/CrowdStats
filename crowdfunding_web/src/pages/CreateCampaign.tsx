import React, { useState, useEffect } from 'react';

const CAMPAIGNS_KEY = 'campaigns';
const CAMPAIGN_LOG_KEY = 'campaigns_log';

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

const CreateCampaign = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [image, setImage] = useState('');
  const [activeTime, setActiveTime] = useState('5'); // Default 5 seconds
  const [campaigns, setCampaigns] = useState(getCampaigns());
  const [logs, setLogs] = useState(getCampaignLogs());

  useEffect(() => {
    setCampaigns(getCampaigns());
    setLogs(getCampaignLogs());
  }, []);

  useEffect(() => {
    saveCampaigns(campaigns);
    saveCampaignLogs(logs);
  }, [campaigns, logs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !goal || !activeTime) {
      alert('Please fill in all required fields');
      return;
    }

    const ttl = parseInt(activeTime, 10);
    if (isNaN(ttl) || ttl <= 0) {
      alert('Active time must be a positive number');
      return;
    }

    const newCampaign = {
      id: Date.now(),
      title,
      description,
      goal: parseFloat(goal),
      image,
      activeTime: ttl,
    };

    setCampaigns((prev) => [...prev, newCampaign]);
    setLogs((prev) => [
      ...prev,
      { action: 'created', campaign: newCampaign, timestamp: new Date().toISOString() },
    ]);
    logAction('created', newCampaign);

    setTimeout(() => {
      setCampaigns((prev) => {
        const updated = prev.filter((c) => c.id !== newCampaign.id);
        if (updated.length !== prev.length) {
          setLogs((prevLogs) => [
            ...prevLogs,
            { action: 'removed', campaign: newCampaign, timestamp: new Date().toISOString() },
          ]);
          logAction('removed', newCampaign);
        }
        return updated;
      });
    }, ttl * 1000);

    setTitle('');
    setDescription('');
    setGoal('');
    setImage('');
    setActiveTime('5');
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Arial' }}>
      <h1>Create New Campaign</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <div style={{ marginBottom: 10 }}>
          <label>
            Campaign Title<br />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{ width: '100%' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>
            Description<br />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={{ width: '100%' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>
            Funding Goal ($)<br />
            <input
              type="number"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
              style={{ width: '100%' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>
            Campaign Image URL (optional)<br />
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              style={{ width: '100%' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>
            Active Time (seconds)<br />
            <input
              type="number"
              min="1"
              value={activeTime}
              onChange={(e) => setActiveTime(e.target.value)}
              required
              style={{ width: '100%' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '0.5rem 1.5rem', fontSize: 16 }}>
          Create Campaign
        </button>
      </form>

      <h2>Active Campaigns</h2>
      {campaigns.length === 0 ? (
        <p>No active campaigns.</p>
      ) : (
        <ul>
          {campaigns.map((c) => (
            <li key={c.id} style={{ marginBottom: 10 }}>
              <strong>{c.title}</strong> - Goal: ${c.goal}
              <br />
              {c.description}
              <br />
              <span style={{ fontSize: 12, color: '#888' }}>
                Active for: {c.activeTime} second{c.activeTime > 1 ? 's' : ''}
              </span>
              {c.image && (
                <div>
                  <img src={c.image} alt={c.title} style={{ maxWidth: 200, marginTop: 5 }} />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      <h2>Campaign Log</h2>
      {logs.length === 0 ? (
        <p>No log entries.</p>
      ) : (
        <ul>
          {logs
            .slice()
            .reverse()
            .map((log, idx) => (
              <li key={idx} style={{ marginBottom: 6 }}>
                <span style={{ color: log.action === 'created' ? 'green' : 'red' }}>
                  [{log.action.toUpperCase()}]
                </span>{' '}
                <strong>{log.campaign.title}</strong> at{' '}
                {new Date(log.timestamp).toLocaleTimeString()}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default CreateCampaign;
