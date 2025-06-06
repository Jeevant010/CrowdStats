'use client'
import { useState, useEffect } from 'react';
import { fetchWalletBook, walletBookCache, walletBookEmitter } from './fetchWalletBook/fetchWalletBook.js';

// Initiate wallet book fetch immediately
fetchWalletBook();
const useWalletBookCdn = () => {
    const [walletBookState, setWalletBookState] = useState(walletBookCache.current);
    useEffect(() => {
        walletBookEmitter.on('walletBookLoaded', setWalletBookState);
        /**
         * Justification for this setWalletBookState call — imagine the following scenario:
         *
         * 1. fetchWalletBook() is called — the wallet book is not yet loaded
         * 2. useState(walletBookCache.current) is called, and therefore initializes walletBookState to {}
         * 3. Before this effect runs — wallet book is loaded, and the walletBookLoaded event is emitted
         * 4. This effect finally runs and only then subscribes to the walletBookLoaded event
         *
         * In this case, walletBookState would be initialized to {}, and would never be updated to the actual wallet book
         * Therefore, we need to call setWalletBookState(walletBookCache.current)
         * to ensure that walletBookState is initialized to the correct value in this edge case
         */
        setWalletBookState(walletBookCache.current);
        return () => {
            walletBookEmitter.off('walletBookLoaded', setWalletBookState);
        };
    }, []);
    return walletBookState;
};

export { useWalletBookCdn };
