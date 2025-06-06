import { WalletGroups, WalletOption } from '../../../../../shared';
/**
 *  Group wallets by `group` property
 *
 * @param {WalletOption[]} walletOptionList - WalletOption list
 * @returns {WalletOption[]} the wallet options list with groups
 */
export declare const groupWalletOptions: (walletGroups: WalletGroups, walletOptionList: WalletOption[]) => WalletOption[];
