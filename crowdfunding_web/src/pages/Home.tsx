import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCampaigns } from '../context/CampaignContext';
import './Home.css';

interface Campaign {
  id: string;
  title: string;
  description: string;
  target: number;
  owner: string;
}

const Home: React.FC = () => {
  const { campaigns, setCampaigns } = useCampaigns();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        setLoading(true);
        // Adjust the URL to match your API endpoint
        const response = await axios.get('/api/campaigns');
        setCampaigns(response.data);
      } catch (err) {
        console.error("Error fetching campaigns:", err);
        setError("Failed to load campaigns");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to CrowdStats</h1>
        <p>Support innovative projects and ideas</p>
        <Link to="/create-campaign" className="cta-button">Start a Campaign</Link>
      </section>
      
      <section className="campaigns-section">
        <h2>Campaign Details</h2>
        
        {campaigns.length === 0 ? (
          <div className="no-campaigns">
            <p>No campaigns have been created yet.</p>
            <Link to="/create-campaign">Create the first campaign</Link>
          </div>
        ) : (
          <div className="campaigns-grid">
            {campaigns.map(campaign => (
              <div key={campaign.id} className="campaign-card">
                {campaign.image && (
                  <img 
                    src={campaign.image} 
                    alt={campaign.title} 
                    className="campaign-image"
                  />
                )}
                <h3>{campaign.title}</h3>
                <p className="campaign-description">{campaign.description}</p>
                <p className="campaign-goal">Goal: ${campaign.target}</p>
                <p className="campaign-date">
                  Created on: {campaign.createdAt.toLocaleDateString()}
                </p>
                <Link to={`/campaign/${campaign.id}`} className="view-details">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
