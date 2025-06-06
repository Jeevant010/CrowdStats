import { Wallet } from '@dynamic-labs/wallet-connector-core';
import { EthereumWallet } from '../EthereumWallet';
export declare const isEthereumWallet: (wallet: Wallet) => wallet is EthereumWallet;
