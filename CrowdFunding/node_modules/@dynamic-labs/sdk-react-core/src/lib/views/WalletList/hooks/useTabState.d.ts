import { Dispatch, SetStateAction } from 'react';
import { SettingsOverrides } from '../../../context/DynamicContext/types';
export declare const useTabState: ({ settingsOverrides, }: {
    settingsOverrides: SettingsOverrides | undefined;
}) => {
    selectedTabIndex: number;
    selectedTabSettings: import("../../../shared").WalletListViewTabItem | undefined;
    setSelectedTabIndex: Dispatch<SetStateAction<number>>;
    tabsItems: import("../../../shared").WalletListViewTabItem[] | undefined;
};
