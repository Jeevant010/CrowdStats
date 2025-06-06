import React, { FC } from 'react';
export type DynamicWidgetHeaderProps = {
    variant?: 'modal' | 'dropdown';
};
export declare const DynamicWidgetHeader: FC<DynamicWidgetHeaderProps>;
export declare const MemoizedDynamicWidgetHeader: React.NamedExoticComponent<DynamicWidgetHeaderProps>;
export default MemoizedDynamicWidgetHeader;
