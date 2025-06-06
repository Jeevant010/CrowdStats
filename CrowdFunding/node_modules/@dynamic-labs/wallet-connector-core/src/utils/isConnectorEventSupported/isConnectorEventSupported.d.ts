import { WalletLimitations, WalletEvent } from '../../types';
import { InternalWalletConnector } from '../../WalletConnectorBase';
export declare const isConnectorEventSupported: (connector: InternalWalletConnector, event: WalletEvent, platform: keyof NonNullable<WalletLimitations>) => boolean;
