'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var connectedWalletsInfo = require('../../../store/state/connectedWalletsInfo/connectedWalletsInfo.cjs');
var dynamicContextProps = require('../../../store/state/dynamicContextProps/dynamicContextProps.cjs');
var primaryWalletId = require('../../../store/state/primaryWalletId/primaryWalletId.cjs');
var getMissingChains = require('../getMissingChains/getMissingChains.cjs');

const hasAllRequiredWalletsConnected = () => {
    const bridgeChainsToConnect = getMissingChains.getMissingChains(dynamicContextProps.getBridgeChains(), connectedWalletsInfo.getConnectedWalletsInfo());
    return Boolean(!(bridgeChainsToConnect === null || bridgeChainsToConnect === void 0 ? void 0 : bridgeChainsToConnect.length) && primaryWalletId.getPrimaryWalletId());
};

exports.hasAllRequiredWalletsConnected = hasAllRequiredWalletsConnected;
