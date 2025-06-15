import React, { createContext, useState, useContext } from 'react';

interface Campaign {
  id: string;
  title: string;
  description: string;
  goal: number;
  image?: string;
  createdAt: Date;
  raisedAmount: number;
}

interface CampaignContextType {
  campaigns: Campaign[];
  addCampaign: (campaign: Omit<Campaign, 'id' | 'createdAt' | 'raisedAmount'>) => void;
  donateToCampaign: (campaignId: string, amount: number) => void;
}

const CampaignContext = createContext<CampaignContextType | undefined>(undefined);

export const CampaignProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Initialize with an empty array to avoid the "is not a function" error
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  const addCampaign = (campaignData: Omit<Campaign, 'id' | 'createdAt' | 'raisedAmount'>) => {
    const newCampaign = {
      ...campaignData,
      id: Date.now().toString(),
      createdAt: new Date(),
      raisedAmount: 0
    };
    setCampaigns(prevCampaigns => [...prevCampaigns, newCampaign]);
  };

  const donateToCampaign = (campaignId: string, amount: number) => {
    setCampaigns(prevCampaigns => 
      prevCampaigns.map(campaign => 
        campaign.id === campaignId 
          ? { ...campaign, raisedAmount: (campaign.raisedAmount || 0) + amount }
          : campaign
      )
    );
  };

  return (
    <CampaignContext.Provider value={{ 
      campaigns, 
      addCampaign,
      donateToCampaign
    }}>
      {children}
    </CampaignContext.Provider>
  );
};

export const useCampaigns = () => {
  const context = useContext(CampaignContext);
  if (context === undefined) {
    throw new Error('useCampaigns must be used within a CampaignProvider');
  }
  return context;
}; 