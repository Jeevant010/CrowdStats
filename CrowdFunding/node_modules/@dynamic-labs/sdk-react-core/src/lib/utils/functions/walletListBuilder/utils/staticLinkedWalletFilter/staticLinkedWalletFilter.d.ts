import { Wallet, WalletOption } from '../../../../../shared';
/**
 * This function is a helper to filter out wallets that should not appear in the wallet list
 * if they are already linked to the user profile.
 */
export declare const staticWalletFilter: (linkedWallets: Wallet[], walletOptions: WalletOption[]) => WalletOption[];
