import { RecommendedWallet, WalletOption } from '../../../types';
type Args = {
    wallet: WalletOption;
    recommendedWallets?: RecommendedWallet[];
};
export type GetWalletLabelReturn = {
    label: string;
    isRecommended?: boolean;
};
export declare const getWalletListItemLabel: ({ wallet, recommendedWallets, }: Args) => GetWalletLabelReturn | undefined;
export {};
