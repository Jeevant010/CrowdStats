import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WalletConnection from './WalletConnection';

interface CampaignData {
  id: string;
  title: string;
  creator: string;
  description: string;
  imageUrl: string;
  story: string;
  raisedAmount: number;
  targetAmount: number;
  backers: number;
  daysLeft: number;
  createdAt: string;
}

export const CampaignDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [campaign, setCampaign] = useState<CampaignData | null>(null);
  const [contribution, setContribution] = useState<string>('0.1');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Mock data loading - in a real app you'd fetch from your API or blockchain
    const fetchCampaign = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        setTimeout(() => {
          const mockCampaign: CampaignData = {
            id: id || '1',
            title: 'Web3 Crowdfunding Platform',
            creator: '0x1234...5678',
            description: 'A decentralized crowdfunding platform on blockchain',
            imageUrl: 'https://example.com/image.jpg',
            story: 'This is the full story of the campaign with more details...',
            raisedAmount: 2.5,
            targetAmount: 10,
            backers: 18,
            daysLeft: 21,
            createdAt: '2025-05-20'
          };
          setCampaign(mockCampaign);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching campaign:', error);
        setIsLoading(false);
      }
    };
    
    fetchCampaign();
  }, [id]);
  
  const handleContributeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!campaign) return;
    
    try {
      // This would be your web3 transaction code
      console.log(`Contributing ${contribution} ETH to campaign ${id}`);
      // After successful contribution
      alert(`Thank you for contributing ${contribution} ETH!`);
    } catch (error) {
      console.error('Error contributing to campaign:', error);
      alert('Failed to process contribution. Please try again.');
    }
  };
  
  if (isLoading) return <div className="loading">Loading campaign details...</div>;
  if (!campaign) return <div className="error">Campaign not found</div>;
  
  return (
    <div className="campaign-details">
      <div className="campaign-header">
        <h1>{campaign.title}</h1>
        <p className="creator">by {campaign.creator}</p>
      </div>
      
      <div className="campaign-body">
        <div className="campaign-image-section">
          <img src={campaign.imageUrl} alt={campaign.title} className="main-image" />
        </div>
        
        <div className="campaign-info-section">
          <div className="funding-stats">
            <div className="raised">
              <h3>{campaign.raisedAmount} ETH</h3>
              <p>of {campaign.targetAmount} ETH goal</p>
            </div>
            <div className="backers">
              <h3>{campaign.backers}</h3>
              <p>backers</p>
            </div>
            <div className="days-left">
              <h3>{campaign.daysLeft}</h3>
              <p>days left</p>
            </div>
          </div>
          
          <div className="contribute-form">
            <WalletConnection />
            
            <form onSubmit={handleContributeSubmit}>
              <div className="input-group">
                <label htmlFor="contribution">Contribution Amount (ETH)</label>
                <input 
                  type="number" 
                  id="contribution" 
                  min="0.01" 
                  step="0.01"
                  value={contribution}
                  onChange={(e) => setContribution(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="contribute-btn">
                Back this project
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="campaign-story">
        <h2>About this campaign</h2>
        <div className="story-content">
          {campaign.story}
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;