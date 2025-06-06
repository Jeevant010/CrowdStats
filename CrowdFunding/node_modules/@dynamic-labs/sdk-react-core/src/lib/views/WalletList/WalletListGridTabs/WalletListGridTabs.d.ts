import { FC } from 'react';
import { WalletListViewTabItem } from '../../../shared';
type WalletListGridTabsProps = {
    items: WalletListViewTabItem[];
    onSelect: (index: number) => void;
    value: number | null;
};
export declare const WalletListGridTabs: FC<WalletListGridTabsProps>;
export {};
