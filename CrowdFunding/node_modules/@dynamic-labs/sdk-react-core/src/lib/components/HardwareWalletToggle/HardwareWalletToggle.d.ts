import { FC } from 'react';
import { IHardwareWalletConnector } from '@dynamic-labs/wallet-connector-core';
type HardwareWalletToggle = {
    connectors: IHardwareWalletConnector[];
    copykey?: string;
    label: string;
};
export declare const HardwareWalletToggle: FC<HardwareWalletToggle>;
export {};
