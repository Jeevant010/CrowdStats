import { FC, PropsWithChildren } from 'react';
import { ShadowDOMProps } from '../ShadowDOM';
type DynamicBaseWidgetProps = {
    shadowDOMProps?: ShadowDOMProps;
};
export declare const DynamicBaseWidget: FC<PropsWithChildren<DynamicBaseWidgetProps>>;
export {};
