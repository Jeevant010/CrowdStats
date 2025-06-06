import { WalletsFilter } from '../../../shared/types';
export type UseWalletListProps = {
    isWalletConnectList?: boolean;
    viewWalletsFilter?: WalletsFilter;
    searchFilter?: string;
    lastUsedWalletKey?: string;
};
export declare const useWalletList: ({ isWalletConnectList, viewWalletsFilter, searchFilter, lastUsedWalletKey, }: UseWalletListProps) => {
    numberOfWallets: number;
    recommendedWallets: import("../../../shared/types").RecommendedWallet[] | undefined;
    walletsList: import("../../../shared/types").WalletOption[];
};
