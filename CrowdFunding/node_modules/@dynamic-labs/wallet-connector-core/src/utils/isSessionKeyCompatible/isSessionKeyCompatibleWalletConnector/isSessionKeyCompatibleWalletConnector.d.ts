import { ISessionKeyCompatibleWalletConnector } from '../../../interfaces/ISessionKeyCompatibleWalletConnector';
import { WalletConnector } from '../../../WalletConnectorBase';
export declare const isSessionKeyCompatibleWalletConnector: (walletConnector: WalletConnector | ISessionKeyCompatibleWalletConnector | undefined | null) => walletConnector is ISessionKeyCompatibleWalletConnector;
