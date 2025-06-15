import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { useWallet } from './WalletContext';
import { ethers } from 'ethers';

// Mock ABI for example purposes - you'd use your actual contract ABI
const CROWDFUNDING_ABI = [
  "function createCampaign(string memory title, string memory description, string memory imageUrl, uint256 targetAmount, uint256 deadline)",
  "function getCampaigns() view returns (tuple(uint256 id, address creator, string title, string description, string imageUrl, uint256 targetAmount, uint256 raisedAmount, uint256 deadline, bool isActive)[] memory)",
  "function getCampaign(uint256 id) view returns (tuple(uint256 id, address creator, string title, string description, string imageUrl, uint256 targetAmount, uint256 raisedAmount, uint256 deadline, bool isActive) memory)",
  "function contributeToCampaign(uint256 campaignId) payable",
  "function withdrawFunds(uint256 campaignId)",
  "event CampaignCreated(uint256 indexed id, address indexed creator, string title)",
  "event ContributionMade(uint256 indexed campaignId, address indexed contributor, uint256 amount)",
];

// Type definitions
interface Campaign {
  id: string;
  creator: string;
  title: string;
  description: string;
  imageUrl: string;
  targetAmount: string;
  raisedAmount: string;
  deadline: number;
  isActive: boolean;
  backers?: number;
  story?: string;
}

interface CampaignContextType {
  campaigns: Campaign[];
  userCampaigns: Campaign[];
  loading: boolean;
  error: string | null;
  fetchCampaigns: () => Promise<void>;
  fetchUserCampaigns: () => Promise<void>;
  fetchCampaignDetails: (id: string) => Promise<Campaign | null>;
  createCampaign: (campaignData: Omit<Campaign, 'id' | 'creator' | 'raisedAmount' | 'isActive'>) => Promise<boolean>;
  contributeToCampaign: (campaignId: string, amount: string) => Promise<boolean>;
  withdrawFunds: (campaignId: string) => Promise<boolean>;
}

const initialState: CampaignContextType = {
  campaigns: [],
  userCampaigns: [],
  loading: false,
  error: null,
  fetchCampaigns: async () => {},
  fetchUserCampaigns: async () => {},
  fetchCampaignDetails: async () => null,
  createCampaign: async () => false,
  contributeToCampaign: async () => false,
  withdrawFunds: async () => false,
};

const CampaignContext = createContext<CampaignContextType>(initialState);

export const useCampaigns = () => useContext(CampaignContext);

interface CampaignProviderProps {
  children: ReactNode;
  contractAddress: string;
}

export const CampaignProvider: React.FC<CampaignProviderProps> = ({ 
  children, 
  contractAddress 
}) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [userCampaigns, setUserCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  
  const { provider, signer, account, isConnected } = useWallet();
  
  // Initialize contract when provider/signer changes
  useEffect(() => {
    if (!contractAddress) return;
    
    const initContract = () => {
      try {
        if (signer) {
          // Use signer for write operations
          const crowdfundingContract = new ethers.Contract(
            contractAddress, 
            CROWDFUNDING_ABI, 
            signer
          );
          setContract(crowdfundingContract);
        } else if (provider) {
          // Use provider for read-only operations
          const crowdfundingContract = new ethers.Contract(
            contractAddress, 
            CROWDFUNDING_ABI, 
            provider
          );
          setContract(crowdfundingContract);
        }
      } catch (err) {
        console.error("Error initializing contract:", err);
        setError("Failed to initialize contract");
      }
    };
    
    initContract();
  }, [contractAddress, provider, signer]);
  
  // Refresh campaigns when account changes or when first connected
  useEffect(() => {
    if (isConnected) {
      fetchCampaigns();
      if (account) {
        fetchUserCampaigns();
      }
    }
  }, [isConnected, account]);
  
  const fetchCampaigns = async () => {
    if (!contract) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // In a real application, this would call the contract method
      // const result = await contract.getCampaigns();
      
      // For demo purposes, we'll use mock data
      setTimeout(() => {
        const mockCampaigns: Campaign[] = [
          {
            id: '1',
            creator: '0x1234567890123456789012345678901234567890',
            title: 'Web3 Education Platform',
            description: 'Creating free educational resources for blockchain developers',
            imageUrl: 'https://example.com/campaign1.jpg',
            targetAmount: ethers.utils.parseEther('10').toString(),
            raisedAmount: ethers.utils.parseEther('4.5').toString(),
            deadline: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
            isActive: true,
            backers: 45,
          },
          {
            id: '2',
            creator: '0x2345678901234567890123456789012345678901',
            title: 'Decentralized Art Gallery',
            description: 'A platform for artists to showcase and sell their work as NFTs',
            imageUrl: 'https://example.com/campaign2.jpg',
            targetAmount: ethers.utils.parseEther('5').toString(),
            raisedAmount: ethers.utils.parseEther('2.7').toString(),
            deadline: Date.now() + 15 * 24 * 60 * 60 * 1000, // 15 days from now
            isActive: true,
            backers: 32,
          },
          {
            id: '3',
            creator: '0x3456789012345678901234567890123456789012',
            title: 'Community DAO Tools',
            description: 'Building tools to help DAOs organize and govern effectively',
            imageUrl: 'https://example.com/campaign3.jpg',
            targetAmount: ethers.utils.parseEther('15').toString(),
            raisedAmount: ethers.utils.parseEther('12.8').toString(),
            deadline: Date.now() + 10 * 24 * 60 * 60 * 1000, // 10 days from now
            isActive: true,
            backers: 78,
          },
        ];
        
        setCampaigns(mockCampaigns);
        setLoading(false);
      }, 1000);
    } catch (err: any) {
      console.error("Error fetching campaigns:", err);
      setError(err.message || "Failed to fetch campaigns");
      setLoading(false);
    }
  };
  
  const fetchUserCampaigns = async () => {
    if (!contract || !account) return;
    
    setLoading(true);
    
    try {
      // In a real application, this would filter campaigns by creator
      // For demo purposes, we'll use mock data
      setTimeout(() => {
        const mockUserCampaigns: Campaign[] = [
          {
            id: '4',
            creator: account,
            title: 'My DeFi Protocol',
            description: 'A decentralized finance protocol for lending and borrowing',
            imageUrl: 'https://example.com/mycampaign1.jpg',
            targetAmount: ethers.utils.parseEther('20').toString(),
            raisedAmount: ethers.utils.parseEther('8.3').toString(),
            deadline: Date.now() + 25 * 24 * 60 * 60 * 1000, // 25 days from now
            isActive: true,
            backers: 42,
          },
        ];
        
        setUserCampaigns(mockUserCampaigns);
        setLoading(false);
      }, 1000);
    } catch (err: any) {
      console.error("Error fetching user campaigns:", err);
      setError(err.message || "Failed to fetch your campaigns");
      setLoading(false);
    }
  };
  
  const fetchCampaignDetails = async (id: string): Promise<Campaign | null> => {
    if (!contract) return null;
    
    setLoading(true);
    setError(null);
    
    try {
      // In a real application, this would call the contract method
      // const result = await contract.getCampaign(id);
      
      // For demo purposes, we'll use mock data
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockCampaign: Campaign = {
            id: id,
            creator: '0x1234567890123456789012345678901234567890',
            title: 'Web3 Education Platform',
            description: 'Creating free educational resources for blockchain developers',
            imageUrl: 'https://example.com/campaign1.jpg',
            targetAmount: ethers.utils.parseEther('10').toString(),
            raisedAmount: ethers.utils.parseEther('4.5').toString(),
            deadline: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
            isActive: true,
            backers: 45,
            story: `We're building a comprehensive education platform to help onboard the next million developers to Web3. 

Our platform will include:
- Interactive coding tutorials
- Smart contract security best practices
- Real-world project walkthroughs
- Community forums for peer learning
- Expert mentorship opportunities

All content will be freely available to ensure accessibility for developers worldwide. The funds raised will go toward content creation, platform development, and community building initiatives.`,
          };
          
          setLoading(false);
          resolve(mockCampaign);
        }, 1000);
      });
    } catch (err: any) {
      console.error("Error fetching campaign details:", err);
      setError(err.message || "Failed to fetch campaign details");
      setLoading(false);
      return null;
    }
  };
  
  const createCampaign = async (campaignData: Omit<Campaign, 'id' | 'creator' | 'raisedAmount' | 'isActive'>): Promise<boolean> => {
    if (!contract || !signer) {
      setError("Wallet not connected");
      return false;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // In a real application, this would call the contract method
      // const tx = await contract.createCampaign(
      //   campaignData.title,
      //   campaignData.description,
      //   campaignData.imageUrl,
      //   ethers.utils.parseEther(campaignData.targetAmount),
      //   Math.floor(campaignData.deadline / 1000) // Convert to Unix timestamp
      // );
      // await tx.wait();
      
      // For demo purposes, we'll simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Refresh campaigns list
      fetchCampaigns();
      fetchUserCampaigns();
      
      setLoading(false);
      return true;
    } catch (err: any) {
      console.error("Error creating campaign:", err);
      setError(err.message || "Failed to create campaign");
      setLoading(false);
      return false;
    }
  };
  
  const contributeToCampaign = async (campaignId: string, amount: string): Promise<boolean> => {
    if (!contract || !signer) {
      setError("Wallet not connected");
      return false;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // In a real application, this would call the contract method
      // const tx = await contract.contributeToCampaign(
      //   campaignId,
      //   { value: ethers.utils.parseEther(amount) }
      // );
      // await tx.wait();
      
      // For demo purposes, we'll simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Refresh campaigns list
      fetchCampaigns();
      
      setLoading(false);
      return true;
    } catch (err: any) {
      console.error("Error contributing to campaign:", err);
      setError(err.message || "Failed to contribute to campaign");
      setLoading(false);
      return false;
    }
  };
  
  const withdrawFunds = async (campaignId: string): Promise<boolean> => {
    if (!contract || !signer) {
      setError("Wallet not connected");
      return false;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // In a real application, this would call the contract method
      // const tx = await contract.withdrawFunds(campaignId);
      // await tx.wait();
      
      // For demo purposes, we'll simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Refresh campaigns list
      fetchUserCampaigns();
      
      setLoading(false);
      return true;
    } catch (err: any) {
      console.error("Error withdrawing funds:", err);
      setError(err.message || "Failed to withdraw funds");
      setLoading(false);
      return false;
    }
  };
  
  const value = {
    campaigns,
    userCampaigns,
    loading,
    error,
    fetchCampaigns,
    fetchUserCampaigns,
    fetchCampaignDetails,
    createCampaign,
    contributeToCampaign,
    withdrawFunds,
  };
  
  return (
    <CampaignContext.Provider value={value}>
      {children}
    </CampaignContext.Provider>
  );
};