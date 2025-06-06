/// <reference types="react" />
import { WalletOption, WalletsFilter } from '../../shared/types';
export type WalletListProps = {
    isWalletConnectList?: boolean;
    onSelectWallet: (wallet: WalletOption) => void;
    viewWalletsFilter?: WalletsFilter;
    showDefaultFooter?: boolean;
    scrollContainerClassName?: string;
};
export declare const WalletList: ({ isWalletConnectList, onSelectWallet, viewWalletsFilter, showDefaultFooter, scrollContainerClassName, }: WalletListProps) => JSX.Element;
