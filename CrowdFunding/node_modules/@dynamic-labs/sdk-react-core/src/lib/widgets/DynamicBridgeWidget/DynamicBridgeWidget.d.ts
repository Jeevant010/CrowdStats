import { FC } from 'react';
export type DynamicBridgeWidgetVariant = 'modal' | 'dropdown';
export type DynamicBridgeWidgetProps = {
    className?: string;
    variant?: DynamicBridgeWidgetVariant;
    iconVariant?: 'wallet' | 'chain';
};
export declare const DynamicBridgeWidget: FC<DynamicBridgeWidgetProps>;
