'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var fetchWalletBook = require('./fetchWalletBook/fetchWalletBook.cjs');

// Initiate wallet book fetch immediately
fetchWalletBook.fetchWalletBook();
const useWalletBookCdn = () => {
    const [walletBookState, setWalletBookState] = react.useState(fetchWalletBook.walletBookCache.current);
    react.useEffect(() => {
        fetchWalletBook.walletBookEmitter.on('walletBookLoaded', setWalletBookState);
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
        setWalletBookState(fetchWalletBook.walletBookCache.current);
        return () => {
            fetchWalletBook.walletBookEmitter.off('walletBookLoaded', setWalletBookState);
        };
    }, []);
    return walletBookState;
};

exports.useWalletBookCdn = useWalletBookCdn;
