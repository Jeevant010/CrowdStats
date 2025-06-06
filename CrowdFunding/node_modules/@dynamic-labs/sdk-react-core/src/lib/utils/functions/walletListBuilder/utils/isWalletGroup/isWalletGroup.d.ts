import { WalletGroupOption, WalletOption } from '../../../../../shared';
/**
 *  Check if given WalletOption is defined as a group
 *
 * @param {WalletOption} walletOption - Wallet Option
 * @returns {Boolean} - boolean value
 */
export declare const isWalletGroup: (walletOption: WalletOption) => walletOption is WalletGroupOption;
