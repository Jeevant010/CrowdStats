'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var UserWalletsContext = require('../../../context/UserWalletsContext/UserWalletsContext.cjs');
var primaryWalletId = require('../../../store/state/primaryWalletId/primaryWalletId.cjs');
var useDynamicEvents = require('../events/useDynamicEvents/useDynamicEvents.cjs');
var dynamicEvents = require('../../../events/dynamicEvents.cjs');

const useAggregateWalletEvents = () => {
    const { userWallets } = UserWalletsContext.useInternalUserWallets();
    const findPrimaryWallet = (wallets) => wallets.find((wallet) => wallet.id === primaryWalletId.getPrimaryWalletId());
    useDynamicEvents.useInternalDynamicEvents('walletAdded', (wallet, userWallets) => {
        dynamicEvents.dynamicEvents.emit('userWalletsChanged', {
            addedWallet: wallet,
            primaryWallet: findPrimaryWallet(userWallets),
            updateType: 'walletAdded',
            userWallets,
        });
    });
    useDynamicEvents.useInternalDynamicEvents('walletRemoved', (wallet, userWallets) => {
        dynamicEvents.dynamicEvents.emit('userWalletsChanged', {
            primaryWallet: findPrimaryWallet(userWallets),
            removedWallet: wallet,
            updateType: 'walletRemoved',
            userWallets,
        });
    });
    useDynamicEvents.useInternalDynamicEvents('primaryWalletChanged', (newPrimaryWallet) => {
        dynamicEvents.dynamicEvents.emit('userWalletsChanged', {
            primaryWallet: newPrimaryWallet,
            updateType: 'primaryWalletChanged',
            userWallets,
        });
    });
    useDynamicEvents.useInternalDynamicEvents('primaryWalletNetworkChanged', (newNetwork) => {
        dynamicEvents.dynamicEvents.emit('userWalletsChanged', {
            newNetwork,
            primaryWallet: findPrimaryWallet(userWallets),
            updateType: 'primaryWalletNetworkChanged',
            userWallets,
        });
    });
    useDynamicEvents.useInternalDynamicEvents('nonPrimaryWalletNetworkChanged', (newNetwork, connector) => {
        const affectedWallets = userWallets.filter((wallet) => wallet.connector.key === connector.key);
        dynamicEvents.dynamicEvents.emit('userWalletsChanged', {
            affectedWallets,
            newNetwork,
            primaryWallet: findPrimaryWallet(userWallets),
            updateType: 'nonPrimaryWalletNetworkChanged',
            userWallets,
        });
    });
};

exports.useAggregateWalletEvents = useAggregateWalletEvents;
