import React, { useState } from 'react';

interface StoryProtocolProps {
  campaignId?: string;
}

export const StoryProtocolIntegration: React.FC<StoryProtocolProps> = ({ campaignId }) => {
  const [ipAsset, setIpAsset] = useState<string>('');
  const [licenseType, setLicenseType] = useState<string>('');
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  
  // In a real implementation, these would be fetched from Story Protocol's API or SDK
  const licenseTypes = [
    { id: 'cc-by', name: 'Creative Commons - Attribution' },
    { id: 'cc-by-sa', name: 'Creative Commons - Attribution-ShareAlike' },
    { id: 'cc-by-nc', name: 'Creative Commons - Attribution-NonCommercial' },
    { id: 'custom', name: 'Custom License' }
  ];
  
  const handleRegisterIP = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsRegistering(true);
    try {
      // This would integrate with Story Protocol SDK in a real implementation
      console.log(`Registering IP for campaign ${campaignId} with license ${licenseType}`);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('IP successfully registered with Story Protocol!');
      setIpAsset('');
      setLicenseType('');
    } catch (error) {
      console.error('Error registering IP:', error);
      alert('Failed to register IP. Please try again.');
    } finally {
      setIsRegistering(false);
    }
  };
  
  return (
    <div className="story-protocol-integration">
      <h2>Register Intellectual Property</h2>
      <p className="description">
        Protect your campaign's intellectual property by registering with Story Protocol. 
        This creates an on-chain record of your creative assets.
      </p>
      
      <form onSubmit={handleRegisterIP}>
        <div className="form-group">
          <label htmlFor="ip-asset">Asset Description</label>
          <input
            id="ip-asset"
            type="text"
            value={ipAsset}
            onChange={(e) => setIpAsset(e.target.value)}
            placeholder="Describe your intellectual property asset"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="license-type">License Type</label>
          <select
            id="license-type"
            value={licenseType}
            onChange={(e) => setLicenseType(e.target.value)}
            required
          >
            <option value="">Select a license type</option>
            {licenseTypes.map(license => (
              <option key={license.id} value={license.id}>
                {license.name}
              </option>
            ))}
          </select>
        </div>
        
        <button 
          type="submit" 
          className="register-ip-btn" 
          disabled={isRegistering}
        >
          {isRegistering ? 'Registering...' : 'Register IP Asset'}
        </button>
      </form>
      
      <div className="info-box">
        <h4>Why register your IP?</h4>
        <ul>
          <li>Establish verifiable ownership of creative assets</li>
          <li>Enable licensing and derivative works</li>
          <li>Protect your campaign's intellectual property</li>
          <li>Unlock new revenue streams through IP licensing</li>
        </ul>
      </div>
    </div>
  );
};

export default StoryProtocolIntegration;