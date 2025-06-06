'use client'
import { createContext, useContext } from 'react';

const WalletBookContext = createContext(undefined);
const useWalletBookContext = () => {
    const context = useContext(WalletBookContext);
    if (context === undefined) {
        throw new Error('useWalletBookContext must be used within a WalletBookContextProvider');
    }
    return context;
};

export { WalletBookContext, useWalletBookContext };
