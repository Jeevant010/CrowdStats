import { FC } from 'react';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
type MobileWalletRedirectViewProps = {
    onRetry: VoidFunction;
    connector?: WalletConnector;
};
export declare const MobileWalletRedirectView: FC<MobileWalletRedirectViewProps>;
export {};
