import { WalletLimitations } from '@dynamic-labs/wallet-connector-core';
import { WalletConnector } from '../../../..';
export declare const getPlatformForConnector: (connector: WalletConnector) => keyof NonNullable<WalletLimitations>;
