import React, { createContext, useState, useContext } from 'react';

// Define campaign type
interface Campaign {
  id: string;
  title: string;
  description: string;
  goal: number;
  image?: string;
  createdAt: Date;
  // Add other properties as needed
}

interface CampaignContextType {
  campaigns: Campaign[];
  addCampaign: (campaign: Omit<Campaign, 'id' | 'createdAt'>) => void;
}

const CampaignContext = createContext<CampaignContextType | undefined>(undefined);

export const CampaignProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  const addCampaign = (campaignData: Omit<Campaign, 'id' | 'createdAt'>) => {
    const newCampaign = {
      ...campaignData,
      id: Date.now().toString(), // Simple ID generation
      createdAt: new Date()
    };
    setCampaigns([...campaigns, newCampaign]);
  };

  return (
    <CampaignContext.Provider value={{ campaigns, addCampaign }}>
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