import { ReactNode } from 'react';
import { WidgetContextProps } from './DynamicWidgetContext.types';
export declare const DynamicWidgetContext: import("react").Context<WidgetContextProps | undefined>;
export declare const DynamicWidgetContextProvider: ({ children, }: {
    children: ReactNode;
}) => JSX.Element;
export declare const useWidgetContext: () => WidgetContextProps;
