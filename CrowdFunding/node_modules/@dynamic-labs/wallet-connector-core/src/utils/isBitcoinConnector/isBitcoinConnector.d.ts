import { IBitcoinWalletConnector, WalletConnector } from '../..';
export declare const isBitcoinConnector: (connector: WalletConnector | IBitcoinWalletConnector) => connector is IBitcoinWalletConnector;
