import { Wallet } from '../../../../../shared';
/**
 * This takes a userWallets and linkedWallets array, and returns a new userWallets array
 * updated to match the linkedWallets array.
 * It will add any missing wallets, update properties that don't match, and remove wallets that aren't
 * in the linkedWallets.
 */
export declare const updateUserWalletsFromLinkedWallets: (userWallets: Wallet[], authenticatedWallets: Wallet[]) => Wallet[];
