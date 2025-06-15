import React from 'react';
import { Link } from 'react-router-dom';

interface CampaignCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  raisedAmount: number;
  targetAmount: number;
  daysLeft: number;
}

export const CampaignCard: React.FC<CampaignCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  raisedAmount,
  targetAmount,
  daysLeft,
}) => {
  const percentFunded = (raisedAmount / targetAmount) * 100;
  
  return (
    <div className="campaign-card">
      <div className="campaign-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="campaign-content">
        <h3>{title}</h3>
        <p>{description.substring(0, 100)}...</p>
        
        <div className="campaign-progress">
          <div className="progress-bar">
            <div 
              className="progress-filled" 
              style={{ width: `${Math.min(100, percentFunded)}%` }}
            ></div>
          </div>
          <div className="campaign-stats">
            <div className="funded">
              <span className="amount">{raisedAmount} ETH</span>
              <span className="label">of {targetAmount} ETH</span>
            </div>
            <div className="time-left">
              <span className="days">{daysLeft}</span>
              <span className="label">days left</span>
            </div>
          </div>
        </div>
        
        <Link to={`/campaign/${id}`} className="view-campaign-btn">
          View Campaign
        </Link>
      </div>
    </div>
  );
};

export default CampaignCard;