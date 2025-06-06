import { FC, ReactNode } from 'react';
import { DynamicWidgetViews } from '../../context/DynamicWidgetContext.types';
export type OptionsSwitcherOption = {
    value: string;
    label: string;
    icon: ReactNode;
    copykey?: string;
};
export declare const BottomNavBar: FC<{
    value: DynamicWidgetViews;
    onChange: (view: DynamicWidgetViews) => void;
    options: OptionsSwitcherOption[];
}>;
