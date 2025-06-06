import { FC } from 'react';
import { GenericNetwork } from '@dynamic-labs/types';
import { InternalWalletConnector } from '@dynamic-labs/wallet-connector-core';
type AddNetworkModalProps = {
    walletConnector: InternalWalletConnector;
    network: GenericNetwork;
    onCancel: () => void;
    onNetworkAdded: () => void;
    addNetworkMutation: () => Promise<void>;
};
export declare const AddNetworkModal: FC<AddNetworkModalProps>;
export {};
