import React, { ReactNode } from 'react';
import { WalletProvider } from './WalletContext';
import { CampaignProvider } from './CampaignContext';
import { AuthProvider } from './Authcontext';
import { StoryProtocolProvider } from './StoryProtocol';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  // Your smart contract address (example)
  const crowdfundingContractAddress = "0x1234567890123456789012345678901234567890"; // Replace with your actual contract address
  
  return (
    <WalletProvider>
      <AuthProvider>
        <CampaignProvider contractAddress={crowdfundingContractAddress}>
          <StoryProtocolProvider>
            {children}
          </StoryProtocolProvider>
        </CampaignProvider>
      </AuthProvider>
    </WalletProvider>
  );
};

export default AppProviders;