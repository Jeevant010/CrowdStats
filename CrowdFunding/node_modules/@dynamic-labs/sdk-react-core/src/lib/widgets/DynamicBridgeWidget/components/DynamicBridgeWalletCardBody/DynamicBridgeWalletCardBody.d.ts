import { FC, ReactElement } from 'react';
export type DynamicBridgeWalletCardBodyProps = {
    walletKey: string;
    walletAddress: string;
    walletBalance?: ReactElement;
    onDisconnectClick?: () => void;
};
export declare const DynamicBridgeWalletCardBody: FC<DynamicBridgeWalletCardBodyProps>;
