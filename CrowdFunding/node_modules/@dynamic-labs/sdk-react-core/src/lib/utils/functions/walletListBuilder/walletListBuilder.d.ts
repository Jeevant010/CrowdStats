import { RecommendedWallet, Wallet, WalletGroups, WalletOption } from '../../../shared/types';
type BuilderParams = {
    userWallets: Wallet[];
    multiWallet: boolean;
    inputList: WalletOption[];
    isWalletConnectList: boolean;
    lastUsedWalletKey: string | undefined;
    loginWithEmail?: boolean;
    numberOfWalletsToShow: number;
    searchFilter: string | undefined;
    walletsFilter: ((options: WalletOption[]) => WalletOption[]) | undefined;
    groupWallets?: boolean;
    walletGroups: WalletGroups;
    showMoreWalletsWithFilter?: boolean;
    recommendedWallets?: RecommendedWallet[];
};
type BuilderResult = {
    numberOfWallets: number;
    walletsList: WalletOption[];
};
export declare const PRIORITY_WALLET_LIST: string[];
export declare const walletListBuilder: ({ userWallets, multiWallet, numberOfWalletsToShow, inputList, isWalletConnectList, lastUsedWalletKey, searchFilter, walletsFilter, loginWithEmail, groupWallets, walletGroups, showMoreWalletsWithFilter, recommendedWallets, }: BuilderParams) => BuilderResult;
/**
 * This calculation adds an offset to numberOfWalletsToShow so we will show the
 * intended wallets + installed and last used.
 * We should would only apply the additonal offset if the installed wallets was not in the original list.
 *
 * For example:
 * we want to show 4 wallets: ['metamask', 'rainbow', 'walletconnect', 'coinbase']
 * and someone is using brave with installed phantom he should see
 * [ 'brave injected', phantom ,'metamask', 'rainbow', 'walletconnect', 'coinbase',]
 * And when someone is using metamask and coinbase they should see
 * [ 'metamask', 'coinbase', 'rainbow', 'walletconnect']
 */
export declare const calculateWalletOffsetBasedOnInstalledAndLastUsedWallets: (allWalletsOrdered: WalletOption[], installedOrUsedWallets: WalletOption[], numberOfWalletsToShow: number) => number;
export {};
