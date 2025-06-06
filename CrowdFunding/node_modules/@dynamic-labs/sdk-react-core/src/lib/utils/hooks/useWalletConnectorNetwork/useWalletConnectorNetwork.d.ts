import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
type UseWalletConnectorNetworkOptions = {
    /** Triggered whenever the network changes */
    onChange?: (network: string | number | undefined) => void;
};
/**
 * Sync wallet connector network.
 *
 * @param walletConnector - The WalletConnector instance to be used.
 *
 * @returns {{ network: string | number | undefined }} An object containing the current network state.
 *
 * @example
 * // Example of using the useWalletConnectorNetwork hook
 * const { network } = useWalletConnectorNetwork(walletConnector);
 *
 * // You can then use the 'network' state in your component
 * return <div>Current Network: {network}</div>;
 */
export declare const useWalletConnectorNetwork: (walletConnector: WalletConnector | null | undefined, { onChange }?: UseWalletConnectorNetworkOptions) => {
    isLoading: boolean;
    network: string | number | undefined;
};
export {};
