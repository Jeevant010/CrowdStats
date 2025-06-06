import React, { FC, PropsWithChildren, RefObject } from 'react';
export type DynamicBridgeWidgetEvents = {
    onDynamicBridgeWidgetClose: () => void;
};
export type DynamicBridgeWidgetContextType = {
    events: DynamicBridgeWidgetEvents;
    bridgeWidgetView: DynamicBridgeWidgetContextViews;
    setBridgeWidgetView: (view: DynamicBridgeWidgetContextViews) => void;
    widgetRef: RefObject<HTMLDivElement>;
    inlineControlsRef: RefObject<HTMLDivElement>;
    goToProfileView: () => void;
};
export declare const DynamicBridgeWidgetContext: React.Context<DynamicBridgeWidgetContextType | undefined>;
export declare const useDynamicBridgeWidgetContext: () => DynamicBridgeWidgetContextType;
export type DynamicBridgeWidgetContextViews = 'wallets' | 'profile' | 'edit-profile';
export declare const DynamicBridgeWidgetContextProvider: FC<PropsWithChildren>;
