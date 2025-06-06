import { InternalWalletConnector } from '../..';
import { WalletLimitations, WalletMethod } from '../../types';
export declare const isConnectorMethodSupported: (connector: InternalWalletConnector, method: WalletMethod, platform: keyof NonNullable<WalletLimitations>) => boolean;
