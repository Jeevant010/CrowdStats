import { FC } from 'react';
import { GenericNetwork } from '@dynamic-labs/types';
import { InternalWalletConnector } from '@dynamic-labs/wallet-connector-core';
type AddNetworkViewProps = {
    walletConnector: InternalWalletConnector;
    addNetworkMutation: () => Promise<void>;
    onCancel: () => void;
    onNetworkAdded: () => void;
    network: GenericNetwork;
};
export declare const AddNetworkView: FC<AddNetworkViewProps>;
export {};
