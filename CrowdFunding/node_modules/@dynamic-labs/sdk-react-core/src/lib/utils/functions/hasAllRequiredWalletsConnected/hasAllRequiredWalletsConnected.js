'use client'
import { getConnectedWalletsInfo } from '../../../store/state/connectedWalletsInfo/connectedWalletsInfo.js';
import { getBridgeChains } from '../../../store/state/dynamicContextProps/dynamicContextProps.js';
import { getPrimaryWalletId } from '../../../store/state/primaryWalletId/primaryWalletId.js';
import { getMissingChains } from '../getMissingChains/getMissingChains.js';

const hasAllRequiredWalletsConnected = () => {
    const bridgeChainsToConnect = getMissingChains(getBridgeChains(), getConnectedWalletsInfo());
    return Boolean(!(bridgeChainsToConnect === null || bridgeChainsToConnect === void 0 ? void 0 : bridgeChainsToConnect.length) && getPrimaryWalletId());
};

export { hasAllRequiredWalletsConnected };
