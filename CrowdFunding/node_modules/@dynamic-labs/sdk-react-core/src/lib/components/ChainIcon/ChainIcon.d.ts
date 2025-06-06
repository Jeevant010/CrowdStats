import { FC } from 'react';
import { Chain } from '@dynamic-labs/wallet-connector-core';
export type ChainWithIcon = {
    icon?: string;
    name: string | undefined;
    symbol: Chain | undefined;
};
interface ChainIconProps {
    chain: ChainWithIcon;
    chainName: string;
}
export declare const ChainIcon: FC<ChainIconProps>;
export {};
