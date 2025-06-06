import { FC, ReactElement, ReactNode } from 'react';
import { CopyKey } from '../../shared';
type WalletInformationCardProps = {
    address: string;
    ens?: string;
    icon?: ReactElement;
    network?: ReactNode;
    balance?: ReactNode;
    menu?: ReactNode;
} & CopyKey;
export declare const WalletInformationCard: FC<WalletInformationCardProps>;
export {};
