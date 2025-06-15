import React, { useState, useEffect } from 'react';

interface WalletState {
  isConnected: boolean;
  address: string | null;
  chainId: string | null;
  balance: string | null;
}

export const WalletConnection: React.FC = () => {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    address: null,
    chainId: null,
    balance: null
  });
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Check if wallet is already connected on component mount
  useEffect(() => {
    const checkConnection = async () => {
      // In a real app, you would use ethers.js, web3.js, or similar
      if (typeof window.ethereum !== 'undefined') {
        try {
          // Check if we have already been authorized by the user
          const accounts = await window.ethereum.request({ 
            method: 'eth_accounts' 
          });
          
          if (accounts.length > 0) {
            // Get chain ID and balance
            const chainId = await window.ethereum.request({ 
              method: 'eth_chainId' 
            });
            const balance = await window.ethereum.request({ 
              method: 'eth_getBalance',
              params: [accounts[0], 'latest']
            });
            
            setWalletState({
              isConnected: true,
              address: accounts[0],
              chainId,
              balance: parseInt(balance, 16).toString()
            });
          }
        } catch (err) {
          console.error("Error checking wallet connection:", err);
        }
      }
    };
    
    checkConnection();
  }, []);
  
  // Handle wallet events
  useEffect(() => {
    if (typeof window.ethereum === 'undefined') return;
    
    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        // User disconnected wallet
        setWalletState({
          isConnected: false,
          address: null,
          chainId: null,
          balance: null
        });
      } else {
        // Account changed
        setWalletState(prev => ({
          ...prev,
          address: accounts[0]
        }));
      }
    };
    
    const handleChainChanged = (chainId: string) => {
      // Chain changed, reload page as recommended by MetaMask
      window.location.reload();
    };
    
    // Subscribe to events
    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', handleChainChanged);
    
    // Cleanup
    return () => {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      window.ethereum.removeListener('chainChanged', handleChainChanged);
    };
  }, []);
  
  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      setError("Please install MetaMask or another Web3 wallet");
      return;
    }
    
    setIsConnecting(true);
    setError(null);
    
    try {
      // Request wallet connection
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      // Get chain ID and balance
      const chainId = await window.ethereum.request({ 
        method: 'eth_chainId' 
      });
      const balance = await window.ethereum.request({ 
        method: 'eth_getBalance',
        params: [accounts[0], 'latest']
      });
      
      setWalletState({
        isConnected: true,
        address: accounts[0],
        chainId,
        balance: parseInt(balance, 16).toString()
      });
      
    } catch (err: any) {
      console.error("Error connecting wallet:", err);
      setError(err.message || "Failed to connect wallet");
    } finally {
      setIsConnecting(false);
    }
  };
  
  const disconnectWallet = () => {
    // Note: There is no standard method to disconnect in EIP-1193
    // This just clears the state in our app
    setWalletState({
      isConnected: false,
      address: null,
      chainId: null,
      balance: null
    });
  };
  
  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };
  
  const formatBalance = (balance: string) => {
    // Convert wei to ETH
    return parseFloat(balance) / 1e18;
  };
  
  return (
    <div className="wallet-connection">
      {error && (
        <div className="wallet-error">
          {error}
        </div>
      )}
      
      {!walletState.isConnected ? (
        <button 
          className="connect-wallet-btn" 
          onClick={connectWallet}
          disabled={isConnecting}
        >
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      ) : (
        <div className="wallet-info">
          <div className="wallet-address">
            Connected: {formatAddress(walletState.address!)}
          </div>
          {walletState.balance && (
            <div className="wallet-balance">
              Balance: {formatBalance(walletState.balance).toFixed(4)} ETH
            </div>
          )}
          <button 
            className="disconnect-wallet-btn" 
            onClick={disconnectWallet}
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

// Add this to fix TypeScript errors
declare global {
  interface Window {
    ethereum: any;
  }
}

export default WalletConnection;