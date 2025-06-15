import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { ethers } from 'ethers';

interface WalletContextType {
  account: string | null;
  chainId: number | null;
  balance: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  error: string | null;
  provider: ethers.providers.Web3Provider | null;
  signer: ethers.Signer | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  switchNetwork: (chainId: number) => Promise<void>;
}

const initialState: WalletContextType = {
  account: null,
  chainId: null,
  balance: null,
  isConnected: false,
  isConnecting: false,
  error: null,
  provider: null,
  signer: null,
  connectWallet: async () => {},
  disconnectWallet: () => {},
  switchNetwork: async () => {},
};

const WalletContext = createContext<WalletContextType>(initialState);

export const useWallet = () => useContext(WalletContext);

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);

  // Initialize provider if ethereum is available
  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
      setProvider(web3Provider);
    }
  }, []);

  // Check if previously connected
  useEffect(() => {
    const checkConnection = async () => {
      if (provider && typeof window.ethereum !== 'undefined') {
        try {
          const accounts = await provider.listAccounts();
          
          if (accounts.length > 0) {
            const address = accounts[0];
            const network = await provider.getNetwork();
            const ethBalance = await provider.getBalance(address);
            const formattedBalance = ethers.utils.formatEther(ethBalance);
            const web3Signer = provider.getSigner();
            
            setAccount(address);
            setChainId(network.chainId);
            setBalance(formattedBalance);
            setIsConnected(true);
            setSigner(web3Signer);
          }
        } catch (err) {
          console.error("Error checking wallet connection:", err);
        }
      }
    };
    
    checkConnection();
  }, [provider]);

  // Setup event listeners
  useEffect(() => {
    if (typeof window.ethereum === 'undefined') return;
    
    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        // User disconnected
        disconnectWallet();
      } else if (accounts[0] !== account) {
        // Account changed
        setAccount(accounts[0]);
        updateBalance(accounts[0]);
      }
    };
    
    const handleChainChanged = (chainIdHex: string) => {
      const newChainId = parseInt(chainIdHex, 16);
      setChainId(newChainId);
      // Refresh page on chain change as recommended by MetaMask
      window.location.reload();
    };
    
    const handleDisconnect = (error: { code: number; message: string }) => {
      console.log("Wallet disconnect event:", error);
      disconnectWallet();
    };
    
    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', handleChainChanged);
    window.ethereum.on('disconnect', handleDisconnect);
    
    return () => {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      window.ethereum.removeListener('chainChanged', handleChainChanged);
      window.ethereum.removeListener('disconnect', handleDisconnect);
    };
  }, [account, provider]);

  const updateBalance = async (address: string) => {
    if (!provider) return;
    
    try {
      const ethBalance = await provider.getBalance(address);
      const formattedBalance = ethers.utils.formatEther(ethBalance);
      setBalance(formattedBalance);
    } catch (err) {
      console.error("Error updating balance:", err);
    }
  };

  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      setError("No Ethereum wallet found. Please install MetaMask.");
      return;
    }
    
    if (!provider) {
      setError("Web3 provider not initialized.");
      return;
    }
    
    setIsConnecting(true);
    setError(null);
    
    try {
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      const address = accounts[0];
      const web3Signer = provider.getSigner();
      const network = await provider.getNetwork();
      const ethBalance = await provider.getBalance(address);
      const formattedBalance = ethers.utils.formatEther(ethBalance);
      
      setAccount(address);
      setSigner(web3Signer);
      setChainId(network.chainId);
      setBalance(formattedBalance);
      setIsConnected(true);
    } catch (err: any) {
      console.error("Error connecting wallet:", err);
      setError(err.message || "Failed to connect wallet");
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setChainId(null);
    setBalance(null);
    setIsConnected(false);
    setSigner(null);
  };

  const switchNetwork = async (targetChainId: number) => {
    if (!window.ethereum) {
      setError("No Ethereum wallet found");
      return;
    }

    const hexChainId = `0x${targetChainId.toString(16)}`;
    
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: hexChainId }],
      });
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask
      if (switchError.code === 4902) {
        try {
          // Add the network
          // Note: In a real app, you would define appropriate parameters for different networks
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: hexChainId,
                chainName: targetChainId === 1 ? 'Ethereum Mainnet' : 
                           targetChainId === 5 ? 'Goerli Testnet' : 
                           targetChainId === 137 ? 'Polygon Mainnet' : 
                           'Custom Network',
                nativeCurrency: {
                  name: 'Ether',
                  symbol: 'ETH',
                  decimals: 18
                },
                rpcUrls: ['https://rpc-url-for-the-network.com'],
                blockExplorerUrls: ['https://explorer-url-for-the-network.com']
              },
            ],
          });
        } catch (addError) {
          console.error("Error adding Ethereum chain:", addError);
          setError("Failed to add network to wallet");
        }
      } else {
        console.error("Error switching Ethereum chain:", switchError);
        setError("Failed to switch network");
      }
    }
  };

  const value = {
    account,
    chainId,
    balance,
    isConnected,
    isConnecting,
    error,
    provider,
    signer,
    connectWallet,
    disconnectWallet,
    switchNetwork,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};

// Add this to fix TypeScript errors
// declare global {
//   interface Window {
//     ethereum: any;
//   }
// }