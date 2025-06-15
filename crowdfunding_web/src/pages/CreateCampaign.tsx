import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CreateCampaign.css';

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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
  const [activeTime, setActiveTime] = useState('7'); // Default 7 days
  const [campaigns, setCampaigns] = useState(getCampaigns());
  const [logs, setLogs] = useState(getCampaignLogs());
  const [formSuccess, setFormSuccess] = useState(false);

  // Refs for animations
  const formContainerRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const campaignsListRef = useRef(null);
  const logsListRef = useRef(null);

  useEffect(() => {
    setCampaigns(getCampaigns());
    setLogs(getCampaignLogs());

    // Initial animations
    const tl = gsap.timeline();
    
    tl.from(headingRef.current, {
      y: -50,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(formContainerRef.current, {
      opacity: 1,
      rotationX: 15,
      transformPerspective: 1000,
      transformOrigin: "top center",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 1,
      ease: "back.out(1.7)"
    }, "-=0.3")
    .from(formRef.current.querySelectorAll(".form-group"), {
      opacity: 1,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      ease: "power3.out"
    }, "-=0.5");

    // Scroll triggered animations
    gsap.from(campaignsListRef.current, {
      scrollTrigger: {
        trigger: campaignsListRef.current,
        start: "top 80%"
      },
      opacity: 1,
      y: 50,
      duration: 0.8
    });

    gsap.from(logsListRef.current, {
      scrollTrigger: {
        trigger: logsListRef.current,
        start: "top 80%"
      },
      opacity: 1,
      y: 50,
      duration: 0.8
    });

    return () => {
      // Clean up ScrollTrigger instances when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    saveCampaigns(campaigns);
    saveCampaignLogs(logs);
  }, [campaigns, logs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !goal || !activeTime) {
      // Shake the form to indicate error
      gsap.to(formRef.current, {
        x: -10,
        duration: 0.1,
        repeat: 5,
        yoyo: true
      });
      alert('Please fill in all required fields');
      return;
    }

    const days = parseInt(activeTime, 10);
    if (isNaN(days) || days <= 0) {
      gsap.to(formRef.current.querySelector('input[type="number"]:last-of-type'), {
        x: -10,
        duration: 0.1,
        repeat: 5,
        yoyo: true
      });
      alert('Active time must be a positive number of days');
      return;
    }

    // Convert days to seconds for the timer (for demo purposes)
    // In a real app you might use actual dates instead
    const ttlSeconds = days * 5; // Using 5 seconds per "day" for demo purposes

    const newCampaign = {
      id: Date.now(),
      title,
      description,
      goal: parseFloat(goal),
      image,
      activeTime: days,
      activeTimeUnit: 'days'
    };

    // Successful submission animation
    setFormSuccess(true);
    
    gsap.to(formRef.current, {
      scale: 1.02,
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
      duration: 0.3,
      onComplete: () => {
        gsap.to(formRef.current, {
          scale: 1,
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          duration: 0.5,
          delay: 0.2
        });
      }
    });

    // Create a success message
    const successMsg = document.createElement("div");
    successMsg.className = "success-message";
    successMsg.textContent = "Campaign Created Successfully!";
    document.body.appendChild(successMsg);

    gsap.fromTo(successMsg, 
      { y: -50, opacity: 1 },
      { 
        y: 20, 
        opacity: 1, 
        duration: 0.5,
        onComplete: () => {
          setTimeout(() => {
            gsap.to(successMsg, {
              y: -50,
              opacity: 1,
              duration: 0.5,
              onComplete: () => {
                successMsg.remove();
                setFormSuccess(false);
              }
            });
          }, 2000);
        }
      }
    );

    setCampaigns((prev) => [...prev, newCampaign]);
    setLogs((prev) => [
      ...prev,
      { action: 'created', campaign: newCampaign, timestamp: new Date().toISOString() },
    ]);
    logAction('created', newCampaign);

    // Animate the new campaign entry
    setTimeout(() => {
      const newCampaignElement = document.querySelector('.campaign-item:first-child');
      if (newCampaignElement) {
        gsap.fromTo(newCampaignElement, 
          { scale: 0.8, opacity: 1, transformOrigin: 'center' },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
        );
      }
    }, 100);

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

      // Animate the log entry
      setTimeout(() => {
        const newLogElement = document.querySelector('.log-item:first-child');
        if (newLogElement) {
          gsap.fromTo(newLogElement, 
            { x: -20, opacity: 1 },
            { x: 0, opacity: 1, duration: 0.5 }
          );
        }
      }, 100);
    }, ttlSeconds * 1000); // Using the seconds conversion for the demo timer

    setTitle('');
    setDescription('');
    setGoal('');
    setImage('');
    setActiveTime('7');
  };

  const handleInputFocus = (e) => {
    gsap.to(e.target, {
      scale: 1.03,
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleInputBlur = (e) => {
    gsap.to(e.target, {
      scale: 1,
      boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div className="create-campaign-container">
      <h1 ref={headingRef} className="page-title">Create Your <span className="highlight">Campaign</span></h1>
      
      <div ref={formContainerRef} className="form-container">
        <form ref={formRef} onSubmit={handleSubmit} className="campaign-form">
          <div className="form-group">
            <label htmlFor="title">Campaign Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className="form-textarea"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="goal">Funding Goal ($)</label>
            <input
              id="goal"
              type="number"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
              min="1"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="image">Campaign Image URL (optional)</label>
            <input
              id="image"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="activeTime">Campaign Duration (days)</label>
            <input
              id="activeTime"
              type="number"
              min="1"
              value={activeTime}
              onChange={(e) => setActiveTime(e.target.value)}
              required
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className="form-input"
            />
          </div>
          
          <button type="submit" className={`submit-button ${formSuccess ? 'success' : ''}`}>
            <span className="button-text">Create Campaign</span>
            <span className="button-icon">
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </span>
          </button>
        </form>
      </div>

      <div ref={campaignsListRef} className="campaigns-section">
        <h2 className="section-title">Active Campaigns</h2>
        {campaigns.length === 0 ? (
          <p className="empty-state">No active campaigns. Create one now!</p>
        ) : (
          <ul className="campaigns-list">
            {campaigns.map((c) => (
              <li key={c.id} className="campaign-item">
                <div className="campaign-item-content">
                  {c.image && (
                    <div className="campaign-image-container">
                      <img src={c.image} alt={c.title} className="campaign-image" />
                    </div>
                  )}
                  <div className="campaign-details">
                    <h3 className="campaign-title">{c.title}</h3>
                    <p className="campaign-description">{c.description}</p>
                    <div className="campaign-meta">
                      <span className="campaign-goal">Goal: ${c.goal.toLocaleString()}</span>
                      <span className="campaign-ttl">
                        Duration: {c.activeTime} day{c.activeTime > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div ref={logsListRef} className="logs-section">
        <h2 className="section-title">Campaign Activity Log</h2>
        {logs.length === 0 ? (
          <p className="empty-state">No log entries yet. Activity will appear here.</p>
        ) : (
          <ul className="logs-list">
            {logs
              .slice()
              .reverse()
              .map((log, idx) => (
                <li key={idx} className={`log-item ${log.action}`}>
                  <div className="log-icon">
                    {log.action === 'created' ? (
                      <svg viewBox="0 0 24 24">
                        <path d="M12 5v14M5 12h14"></path>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24">
                        <path d="M5 12h14"></path>
                      </svg>
                    )}
                  </div>
                  <div className="log-content">
                    <span className="log-action">{log.action.toUpperCase()}</span>
                    <span className="log-campaign">{log.campaign.title}</span>
                    <span className="log-time">
                      {new Date(log.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CreateCampaign;