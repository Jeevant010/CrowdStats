import { FC, MouseEventHandler, ReactNode } from 'react';
type BridgeNextWalletToConnectLayoutProps = {
    chainName: string;
    chainIcon?: ReactNode;
    onClickAction?: MouseEventHandler<HTMLButtonElement>;
    onClickClose?: MouseEventHandler<HTMLButtonElement>;
};
export declare const BridgeNextWalletToConnectLayout: FC<BridgeNextWalletToConnectLayoutProps>;
export {};
