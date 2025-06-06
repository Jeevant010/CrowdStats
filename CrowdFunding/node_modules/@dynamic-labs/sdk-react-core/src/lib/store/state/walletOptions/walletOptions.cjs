'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createStoreState = require('../../internalImplementation/utils/createStoreState/createStoreState.cjs');

const walletOptionsState = createStoreState.createStoreState('walletOptions');
const { getWalletOptions, useWalletOptions } = walletOptionsState;
const getWalletConnectorOptions = () => getWalletOptions().walletConnectorOptions;
const useWalletConnectorOptions = () => useWalletOptions().walletConnectorOptions;
const setWalletConnectorOptions = (walletConnectorOptions) => {
    const options = getWalletOptions();
    walletOptionsState.setWalletOptions(Object.assign(Object.assign({}, options), { walletConnectorOptions }));
};
const getWalletGroups = () => getWalletOptions().groups;
const useWalletGroups = () => useWalletOptions().groups;
const setWalletGroups = (groups) => {
    const options = getWalletOptions();
    walletOptionsState.setWalletOptions(Object.assign(Object.assign({}, options), { groups }));
};
/**
 * Merges the current wallet groups with the new groups.
 * @param groups - The new wallet groups to merge.
 */
const mergeWalletGroups = (groups) => {
    const currentGroups = getWalletGroups();
    const mergedGroups = Object.assign(Object.assign({}, currentGroups), groups);
    setWalletGroups(mergedGroups);
};
/**
 * Merges the current wallet connector options with the new options.
 * @param options - The new wallet connector options to merge.
 */
const mergeWalletConnectorOptions = (options) => {
    const currentWalletOptions = getWalletConnectorOptions();
    // Create a unique key for each wallet option based on its key and connected chain
    const getKey = (walletOption) => `${walletOption.key}-${walletOption.walletConnector.connectedChain}`;
    const currentWalletOptionsMap = new Map(currentWalletOptions.map((walletOption) => [
        getKey(walletOption),
        walletOption,
    ]));
    options.forEach((walletOption) => {
        currentWalletOptionsMap.set(getKey(walletOption), walletOption);
    });
    const updatedWalletOptions = Array.from(currentWalletOptionsMap.values());
    setWalletConnectorOptions(updatedWalletOptions);
};

exports.getWalletConnectorOptions = getWalletConnectorOptions;
exports.getWalletGroups = getWalletGroups;
exports.getWalletOptions = getWalletOptions;
exports.mergeWalletConnectorOptions = mergeWalletConnectorOptions;
exports.mergeWalletGroups = mergeWalletGroups;
exports.setWalletConnectorOptions = setWalletConnectorOptions;
exports.setWalletGroups = setWalletGroups;
exports.useWalletConnectorOptions = useWalletConnectorOptions;
exports.useWalletGroups = useWalletGroups;
exports.useWalletOptions = useWalletOptions;
