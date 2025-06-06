import { WalletGroupOption } from '../../../shared';
export type WalletGroupType = 'multi-chain' | 'multi-wallet';
export declare const getWalletGroupType: (walletGroup: WalletGroupOption) => WalletGroupType | undefined;
