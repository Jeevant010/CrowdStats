import { FC, PropsWithChildren, ReactElement } from 'react';
export type DynamicBridgeWalletCardProps = {
    className?: string;
    networkName?: string;
    networkIcon?: ReactElement;
};
export declare const DynamicBridgeWalletCard: FC<PropsWithChildren<DynamicBridgeWalletCardProps>>;
