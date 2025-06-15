import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useWallet } from './WalletContext';

interface IPAsset {
  id: string;
  name: string;
  description: string;
  owner: string;
  licenseType: string;
  registrationDate: number;
  campaignId?: string;
}

interface License {
  id: string;
  licenseType: string;
  terms: string;
  isActive: boolean;
}

interface StoryProtocolContextType {
  loading: boolean;
  error: string | null;
  userIPAssets: IPAsset[];
  availableLicenseTypes: License[];
  registerIPAsset: (assetData: Omit<IPAsset, 'id' | 'owner' | 'registrationDate'>) => Promise<boolean>;
  fetchUserIPAssets: () => Promise<void>;
  fetchIPAssetsByOwner: (address: string) => Promise<IPAsset[]>;
  fetchIPAssetById: (id: string) => Promise<IPAsset | null>;
  fetchAvailableLicenseTypes: () => Promise<void>;
  licenseCampaignIP: (campaignId: string, licenseTypeId: string) => Promise<boolean>;
}

const initialState: StoryProtocolContextType = {
  loading: false,
  error: null,
  userIPAssets: [],
  availableLicenseTypes: [],
  registerIPAsset: async () => false,
  fetchUserIPAssets: async () => {},
  fetchIPAssetsByOwner: async () => [],
  fetchIPAssetById: async () => null,
  fetchAvailableLicenseTypes: async () => {},
  licenseCampaignIP: async () => false,
};

const StoryProtocolContext = createContext<StoryProtocolContextType>(initialState);

export const useStoryProtocol = () => useContext(StoryProtocolContext);

interface StoryProtocolProviderProps {
  children: ReactNode;
}

export const StoryProtocolProvider: React.FC<StoryProtocolProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userIPAssets, setUserIPAssets] = useState<IPAsset[]>([]);
  const [availableLicenseTypes, setAvailableLicenseTypes] = useState<License[]>([]);
  
  const { account, signer, isConnected } = useWallet();
  
  const fetchUserIPAssets = async () => {
    if (!account) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // In a real application, this would call Story Protocol's API
      // For demo purposes, we'll use mock data
      setTimeout(() => {
        const mockAssets: IPAsset[] = [
          {
            id: '1',
            name: 'Campaign Artwork',
            description: 'Original artwork for my campaign',
            owner: account,
            licenseType: 'CC-BY',
            registrationDate: Date.now() - 30 * 24 * 60 * 60 * 1000,
            campaignId: '4',
          },
        ];
        
        setUserIPAssets(mockAssets);
        setLoading(false);
      }, 1000);
    } catch (err: any) {
      console.error("Error fetching IP assets:", err);
      setError(err.message || "Failed to fetch IP assets");
      setLoading(false);
    }
  };
  
  const fetchIPAssetsByOwner = async (address: string): Promise<IPAsset[]> => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real application, this would call Story Protocol's API
      // For demo purposes, we'll use mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockAssets: IPAsset[] = [
            {
              id: '1',
              name: 'Campaign Artwork',
              description: 'Original artwork for my campaign',
              owner: address,
              licenseType: 'CC-BY',
              registrationDate: Date.now() - 30 * 24 * 60 * 60 * 1000,
              campaignId: '4',
            },
            {
              id: '2',
              name: 'Project Whitepaper',
              description: 'Technical documentation',
              owner: address,
              licenseType: 'CC-BY-SA',
              registrationDate: Date.now() - 15 * 24 * 60 * 60 * 1000,
              campaignId: '2',
            },
          ];
          
          setLoading(false);
          resolve(mockAssets);
        }, 1000);
      });
    } catch (err: any) {
      console.error("Error fetching IP assets by owner:", err);
      setError(err.message || "Failed to fetch IP assets");
      setLoading(false);
      return [];
    }
  };
  
  const fetchIPAssetById = async (id: string): Promise<IPAsset | null> => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real application, this would call Story Protocol's API
      // For demo purposes, we'll use mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockAsset: IPAsset = {
            id,
            name: 'Campaign Artwork',
            description: 'Original artwork for my campaign',
            owner: '0x1234567890123456789012345678901234567890',
            licenseType: 'CC-BY',
            registrationDate: Date.now() - 30 * 24 * 60 * 60 * 1000,
            campaignId: '4',
          };
          
          setLoading(false);
          resolve(mockAsset);
        }, 1000);
      });
    } catch (err: any) {
      console.error("Error fetching IP asset by ID:", err);
      setError(err.message || "Failed to fetch IP asset");
      setLoading(false);
      return null;
    }
  };
  
  const fetchAvailableLicenseTypes = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real application, this would call Story Protocol's API
      // For demo purposes, we'll use mock data
      setTimeout(() => {
        const mockLicenses: License[] = [
          {
            id: 'cc-by',
            licenseType: 'CC-BY',
            terms: 'This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator.',
            isActive: true,
          },
          {
            id: 'cc-by-sa',
            licenseType: 'CC-BY-SA',
            terms: 'This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use. If you remix, adapt, or build upon the material, you must license the modified material under identical terms.',
            isActive: true,
          },
          {
            id: 'cc-by-nc',
            licenseType: 'CC-BY-NC',
            terms: 'This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format for noncommercial purposes only, and only so long as attribution is given to the creator.',
            isActive: true,
          },
          {
            id: 'cc-by-nc-sa',
            licenseType: 'CC-BY-NC-SA',
            terms: 'This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format for noncommercial purposes only, and only so long as attribution is given to the creator. If you remix, adapt, or build upon the material, you must license the modified material under identical terms.',
            isActive: true,
          },
        ];
        
        setAvailableLicenseTypes(mockLicenses);
        setLoading(false);
      }, 1000);
    } catch (err: any) {
      console.error("Error fetching license types:", err);
      setError(err.message || "Failed to fetch license types");
      setLoading(false);
    }
  };
  
  const registerIPAsset = async (assetData: Omit<IPAsset, 'id' | 'owner' | 'registrationDate'>): Promise<boolean> => {
    if (!account || !signer) {
      setError("Wallet not connected");
      return false;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // In a real application, this would call Story Protocol's API or contract
      // For demo purposes, we'll simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Add the new asset to the list
      const newAsset: IPAsset = {
        id: `ip-${Date.now()}`,
        name: assetData.name,
        description: assetData.description,
        owner: account,
        licenseType: assetData.licenseType,
        registrationDate: Date.now(),
        campaignId: assetData.campaignId,
      };
      
      setUserIPAssets(prev => [...prev, newAsset]);
      
      setLoading(false);
      return true;
    } catch (err: any) {
      console.error("Error registering IP asset:", err);
      setError(err.message || "Failed to register IP asset");
      setLoading(false);
      return false;
    }
  };
  
  const licenseCampaignIP = async (campaignId: string, licenseTypeId: string): Promise<boolean> => {
    if (!account || !signer) {
      setError("Wallet not connected");
      return false;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // In a real application, this would call Story Protocol's API or contract
      // For demo purposes, we'll simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setLoading(false);
      return true;
    } catch (err: any) {
      console.error("Error licensing campaign IP:", err);
      setError(err.message || "Failed to license IP");
      setLoading(false);
      return false;
    }
  };
  
  const value = {
    loading,
    error,
    userIPAssets,
    availableLicenseTypes,
    registerIPAsset,
    fetchUserIPAssets,
    fetchIPAssetsByOwner,
    fetchIPAssetById,
    fetchAvailableLicenseTypes,
    licenseCampaignIP,
  };
  
  return (
    <StoryProtocolContext.Provider value={value}>
      {children}
    </StoryProtocolContext.Provider>
  );
};