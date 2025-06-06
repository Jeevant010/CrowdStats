import { Wallet, WalletOption } from '../../../../../shared';
/**
 * Used to filter out wallets that are already connected
 * This is useful for connect-only multi-wallet, where we want users to only connect new wallets,
 * not additional accounts from the same wallet
 */
export declare const filterConnectedWallets: ({ walletOptions, userWallets, }: {
    walletOptions: WalletOption[];
    userWallets: Wallet[];
}) => WalletOption[];
