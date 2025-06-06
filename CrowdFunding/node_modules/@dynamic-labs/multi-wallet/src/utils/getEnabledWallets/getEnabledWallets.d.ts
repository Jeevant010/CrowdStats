import { Chain, InternalWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { GetSupportedWalletsOpts } from '../../types';
export declare const getEnabledWallets: (props: {
    enabledChains: Chain[];
    getSupportedWalletOpts: GetSupportedWalletsOpts;
}) => InternalWalletConnector[];
