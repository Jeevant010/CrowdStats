import { Wallet } from '../../../../shared';
/**
 * This takes a userWallets and connectedWallets array, and returns a new userWallets array
 * updated to match the connectedWallets array.
 * It will add any missing wallets, update properties that don't match, and remove wallets that aren't
 * in the connectedWallets and is not linked to the user.
 */
export declare const updateUserWalletsFromConnectedWallets: (userWallets: Wallet[], connectedWallets: Wallet[]) => Wallet[];
