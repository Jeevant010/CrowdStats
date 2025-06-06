import { IEmailOTPWalletConnector, WalletConnector } from '../..';
export declare const isEmailOTPWalletConnector: (walletConnector: WalletConnector | IEmailOTPWalletConnector) => walletConnector is IEmailOTPWalletConnector;
