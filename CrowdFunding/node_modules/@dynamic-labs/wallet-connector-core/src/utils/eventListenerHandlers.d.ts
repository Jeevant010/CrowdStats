import { WalletConnector } from '..';
import { AccountChangeEventHandler, ChainChangeEventHandler, DisconnectEventHandler } from '../types';
export declare const eventListenerHandlers: (walletConnector: WalletConnector) => {
    handleAccountChange: AccountChangeEventHandler;
    handleChainChange: ChainChangeEventHandler;
    handleDisconnect: DisconnectEventHandler;
};
