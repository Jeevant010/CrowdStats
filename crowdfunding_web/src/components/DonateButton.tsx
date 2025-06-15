import React, { useState } from 'react';
import { useCampaigns } from '../context/CampaignContext';
import './DonateButton.css';

interface DonateButtonProps {
  campaignId: string;
}

const DonateButton: React.FC<DonateButtonProps> = ({ campaignId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const { donateToCampaign } = useCampaigns();

  const handleDonate = () => {
    const donationAmount = parseFloat(amount);
    if (!isNaN(donationAmount) && donationAmount > 0) {
      donateToCampaign(campaignId, donationAmount);
      setAmount('');
      setIsOpen(false);
    }
  };

  return (
    <div className="donate-container">
      <button 
        className="donate-button"
        onClick={() => setIsOpen(true)}
      >
        Donate Now
      </button>

      {isOpen && (
        <div className="donation-modal">
          <div className="donation-modal-content">
            <h3>Make a Donation</h3>
            <label>
              Amount ($):
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
                step="1"
              />
            </label>
            <div className="modal-actions">
              <button onClick={handleDonate}>Confirm Donation</button>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonateButton;