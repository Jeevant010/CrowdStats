import { FC } from 'react';
export type SelectNetworkButtonProps = {
    networkIconUrl?: string;
    networkId: string | number;
    networkName?: string;
    onClick: (networkId: string | number) => void;
};
export declare const SelectNetworkButton: FC<SelectNetworkButtonProps>;
