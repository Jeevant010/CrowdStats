import React, { useEffect } from 'react';
import { useCampaigns } from '../context/CampaignContext';
import CampaignCard from '../components/CampaignCard';
import '../styles/campaigns.css';

const CampaignsPage: React.FC = () => {
  const { campaigns, loading, error, fetchCampaigns } = useCampaigns();

  useEffect(() => {
    fetchCampaigns();
  }, [fetchCampaigns]);

  if (loading) {
    return (
      <div className="container loading-container">
        <div className="loading-spinner"></div>
        <p>Loading campaigns...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container error-container">
        <div className="error-message">
          <h3>Error Loading Campaigns</h3>
          <p>{error}</p>
          <button onClick={fetchCampaigns} className="btn btn-primary">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="campaigns-page">
      <div className="container">
        <h1 className="page-title">Discover Campaigns</h1>
        <p className="page-subtitle">
          Support innovative projects or start your own crowdfunding campaign today
        </p>

        <div className="campaigns-filters">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search campaigns..." 
              className="search-input"
            />
          </div>
          <div className="filter-options">
            <select className="filter-select">
              <option value="all">All Categories</option>
              <option value="tech">Technology</option>
              <option value="art">Art & Creative</option>
              <option value="community">Community</option>
              <option value="business">Business</option>
            </select>
            <select className="filter-select">
              <option value="newest">Newest First</option>
              <option value="funded">Most Funded</option>
              <option value="ending">Ending Soon</option>
            </select>
          </div>
        </div>

        {campaigns.length === 0 ? (
          <div className="no-campaigns">
            <h3>No campaigns found</h3>
            <p>Be the first to create a campaign!</p>
          </div>
        ) : (
          <div className="campaigns-grid">
            {campaigns.map(campaign => (
              <CampaignCard 
                key={campaign.id}
                id={campaign.id}
                title={campaign.title}
                description={campaign.description}
                imageUrl={campaign.imageUrl}
                raisedAmount={parseFloat(campaign.raisedAmount) / 1e18}
                targetAmount={parseFloat(campaign.targetAmount) / 1e18}
                daysLeft={Math.ceil((campaign.deadline - Date.now()) / (1000 * 60 * 60 * 24))}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignsPage;