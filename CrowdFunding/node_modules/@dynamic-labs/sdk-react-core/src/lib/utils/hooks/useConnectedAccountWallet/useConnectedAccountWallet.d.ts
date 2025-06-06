import { Wallet, WalletConnector } from '../../../..';
export declare const useConnectedAccountWallet: (connector: WalletConnector | undefined, secondaryWallets: Wallet[]) => import("../usePromise").PromiseState<Wallet<import("dist/packages/wallet-connector-core/src").WalletConnectorCore.WalletConnector> | undefined, Error>;
