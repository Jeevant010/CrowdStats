import { FC, PropsWithChildren } from 'react';
type WidgetType = 'user-profile';
export declare const WidgetRegistryContextProvider: FC<PropsWithChildren>;
export declare const useRegisterWidget: (widgetType: WidgetType, enabled?: boolean) => void;
export declare const useWidgetRegistryCheck: (widgetType: WidgetType) => boolean;
export {};
