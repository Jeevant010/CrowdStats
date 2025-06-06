import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { EthereumWalletConnector } from '../';
export declare const isEthWalletConnector: (connector: WalletConnector | EthereumWalletConnector) => connector is EthereumWalletConnector;
