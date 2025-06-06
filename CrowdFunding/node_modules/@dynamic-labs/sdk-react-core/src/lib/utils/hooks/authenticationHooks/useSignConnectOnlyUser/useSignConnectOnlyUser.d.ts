import { GetAddressOpts, WalletConnector } from '@dynamic-labs/wallet-connector-core';
type Props = {
    getAddressOpts?: GetAddressOpts;
    walletConnector: WalletConnector;
};
export declare const useSignConnectOnlyUser: () => ({ walletConnector, getAddressOpts }: Props) => Promise<void>;
export {};
