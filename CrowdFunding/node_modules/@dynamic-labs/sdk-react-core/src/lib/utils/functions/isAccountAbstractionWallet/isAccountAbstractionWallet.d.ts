import { Wallet } from '../../../shared';
export declare const isAccountAbstractionWallet: (wallet: Wallet | unknown) => wallet is Wallet<import("@dynamic-labs/wallet-connector-core").WalletConnectorCore.WalletConnector>;
