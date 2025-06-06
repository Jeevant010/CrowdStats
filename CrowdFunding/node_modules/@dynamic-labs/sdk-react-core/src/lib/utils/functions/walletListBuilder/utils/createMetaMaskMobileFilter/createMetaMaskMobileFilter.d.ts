import { Wallet, WalletOption } from '../../../../../shared/types/wallets';
/**
 * Creates a filter for MetaMask Mobile wallets
 * If user has MetaMask Mobile wallet, filter out all other wallets
 * because MetaMask Mobile doesn't support multiwallet
 */
export declare const createMetaMaskMobileFilter: (userWallets: Wallet[]) => (walletOption: WalletOption) => boolean;
