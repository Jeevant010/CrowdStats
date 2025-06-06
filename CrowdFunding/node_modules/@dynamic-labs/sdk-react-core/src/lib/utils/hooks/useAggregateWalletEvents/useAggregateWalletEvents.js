'use client'
import { useInternalUserWallets } from '../../../context/UserWalletsContext/UserWalletsContext.js';
import { getPrimaryWalletId } from '../../../store/state/primaryWalletId/primaryWalletId.js';
import { useInternalDynamicEvents } from '../events/useDynamicEvents/useDynamicEvents.js';
import { dynamicEvents } from '../../../events/dynamicEvents.js';

const useAggregateWalletEvents = () => {
    const { userWallets } = useInternalUserWallets();
    const findPrimaryWallet = (wallets) => wallets.find((wallet) => wallet.id === getPrimaryWalletId());
    useInternalDynamicEvents('walletAdded', (wallet, userWallets) => {
        dynamicEvents.emit('userWalletsChanged', {
            addedWallet: wallet,
            primaryWallet: findPrimaryWallet(userWallets),
            updateType: 'walletAdded',
            userWallets,
        });
    });
    useInternalDynamicEvents('walletRemoved', (wallet, userWallets) => {
        dynamicEvents.emit('userWalletsChanged', {
            primaryWallet: findPrimaryWallet(userWallets),
            removedWallet: wallet,
            updateType: 'walletRemoved',
            userWallets,
        });
    });
    useInternalDynamicEvents('primaryWalletChanged', (newPrimaryWallet) => {
        dynamicEvents.emit('userWalletsChanged', {
            primaryWallet: newPrimaryWallet,
            updateType: 'primaryWalletChanged',
            userWallets,
        });
    });
    useInternalDynamicEvents('primaryWalletNetworkChanged', (newNetwork) => {
        dynamicEvents.emit('userWalletsChanged', {
            newNetwork,
            primaryWallet: findPrimaryWallet(userWallets),
            updateType: 'primaryWalletNetworkChanged',
            userWallets,
        });
    });
    useInternalDynamicEvents('nonPrimaryWalletNetworkChanged', (newNetwork, connector) => {
        const affectedWallets = userWallets.filter((wallet) => wallet.connector.key === connector.key);
        dynamicEvents.emit('userWalletsChanged', {
            affectedWallets,
            newNetwork,
            primaryWallet: findPrimaryWallet(userWallets),
            updateType: 'nonPrimaryWalletNetworkChanged',
            userWallets,
        });
    });
};

export { useAggregateWalletEvents };
