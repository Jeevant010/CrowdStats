/// <reference types="react" />
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { UserProfile } from '@dynamic-labs/types';
type Props = {
    userProfile?: UserProfile;
    walletConnector?: WalletConnector;
};
export declare const UserAddress: ({ userProfile, walletConnector }: Props) => JSX.Element;
export {};
