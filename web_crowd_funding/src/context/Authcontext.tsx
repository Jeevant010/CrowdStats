import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { useWallet } from './WalletContext';
import { ethers } from 'ethers';

// Define types for user profile
interface UserProfile {
  address: string;
  username: string | null;
  bio: string | null;
  avatarUrl: string | null;
  reputation: number;
  campaignsCreated: number;
  campaignsSupported: number;
}

// Define the shape of our context
interface AuthContextType {
  isAuthenticated: boolean;
  userProfile: UserProfile | null;
  isLoading: boolean;
  error: string | null;
  login: () => Promise<boolean>;
  logout: () => void;
  updateProfile: (profile: Partial<Omit<UserProfile, 'address'>>) => Promise<boolean>;
  generateSignature: (message: string) => Promise<string | null>;
}

// Default context values
const initialState: AuthContextType = {
  isAuthenticated: false,
  userProfile: null,
  isLoading: false,
  error: null,
  login: async () => false,
  logout: () => {},
  updateProfile: async () => false,
  generateSignature: async () => null,
};

// Create the context
const AuthContext = createContext<AuthContextType>(initialState);

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Props type for the provider component
interface AuthProviderProps {
  children: ReactNode;
}

// Provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const { account, signer, isConnected } = useWallet();
  
  // Check if user is already authenticated when wallet connects
  useEffect(() => {
    if (isConnected && account) {
      const storedAuth = localStorage.getItem(`auth_${account}`);
      if (storedAuth) {
        try {
          const authData = JSON.parse(storedAuth);
          if (authData.expiresAt > Date.now()) {
            setIsAuthenticated(true);
            fetchUserProfile(account);
          } else {
            // Auth expired, clean up
            localStorage.removeItem(`auth_${account}`);
          }
        } catch (err) {
          console.error("Error parsing stored auth:", err);
          localStorage.removeItem(`auth_${account}`);
        }
      }
    } else {
      // Reset when wallet disconnects
      setIsAuthenticated(false);
      setUserProfile(null);
    }
  }, [isConnected, account]);
  
  // Fetch user profile data
  const fetchUserProfile = async (address: string) => {
    setIsLoading(true);
    
    try {
      // In a real application, this would call your backend API
      // const response = await fetch(`/api/users/${address}`);
      // const data = await response.json();
      
      // For demo purposes, we'll use mock data
      setTimeout(() => {
        const mockProfile: UserProfile = {
          address,
          username: address.substring(0, 8),
          bio: "Web3 enthusiast and crowdfunding supporter",
          avatarUrl: null,
          reputation: Math.floor(Math.random() * 100),
          campaignsCreated: Math.floor(Math.random() * 5),
          campaignsSupported: Math.floor(Math.random() * 10),
        };
        
        setUserProfile(mockProfile);
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      console.error("Error fetching user profile:", err);
      setError("Failed to fetch user profile");
      setIsLoading(false);
    }
  };
  
  // User login function
  const login = async (): Promise<boolean> => {
    if (!account || !signer) {
      setError("Wallet not connected");
      return false;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real application, this would sign a message to prove ownership
      const message = `Sign this message to log in to CrowdFund3.\nAddress: ${account}\nTimestamp: ${Date.now()}`;
      const signature = await signer.signMessage(message);
      
      // In a real app, you'd send the signature to your backend for verification
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   body: JSON.stringify({ address: account, signature, message }),
      //   headers: { 'Content-Type': 'application/json' }
      // });
      // const data = await response.json();
      
      // For demo purposes, we'll simulate success
      const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
      localStorage.setItem(`auth_${account}`, JSON.stringify({
        address: account,
        expiresAt,
      }));
      
      setIsAuthenticated(true);
      fetchUserProfile(account);
      
      setIsLoading(false);
      return true;
    } catch (err: any) {
      console.error("Error during login:", err);
      setError(err.message || "Failed to log in");
      setIsLoading(false);
      return false;
    }
  };
  
  // User logout function
  const logout = () => {
    if (account) {
      localStorage.removeItem(`auth_${account}`);
    }
    setIsAuthenticated(false);
    setUserProfile(null);
  };
  
  // Update user profile
  const updateProfile = async (profile: Partial<Omit<UserProfile, 'address'>>): Promise<boolean> => {
    if (!isAuthenticated || !account || !signer) {
      setError("Not authenticated");
      return false;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real app, you'd update the profile on your backend
      // const message = `Update profile for ${account}`;
      // const signature = await signer.signMessage(message);
      
      // const response = await fetch(`/api/users/${account}`, {
      //   method: 'PUT',
      //   body: JSON.stringify({ ...profile, signature, message }),
      //   headers: { 'Content-Type': 'application/json' }
      // });
      
      // For demo purposes, we'll simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setUserProfile(prev => prev ? { ...prev, ...profile } : null);
      setIsLoading(false);
      return true;
    } catch (err: any) {
      console.error("Error updating profile:", err);
      setError(err.message || "Failed to update profile");
      setIsLoading(false);
      return false;
    }
  };
  
  // Generate a message signature (useful for various auth purposes)
  const generateSignature = async (message: string): Promise<string | null> => {
    if (!signer) {
      setError("Wallet not connected");
      return null;
    }
    
    try {
      return await signer.signMessage(message);
    } catch (err: any) {
      console.error("Error generating signature:", err);
      setError(err.message || "Failed to sign message");
      return null;
    }
  };
  
  // Provide the auth context to children components
  const value = {
    isAuthenticated,
    userProfile,
    isLoading,
    error,
    login,
    logout,
    updateProfile,
    generateSignature,
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// Add this to fix TypeScript errors if not already defined elsewhere
// declare global {
//   interface Window {
//     ethereum?: any;
//   }
// }