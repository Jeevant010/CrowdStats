import { ReactNode } from 'react';
import { ChainToWalletMap } from '../../shared';
import { ThemeData } from '../ThemeContext';
import { ViewState, ViewType } from '../ViewContext';
type MockContextProps = {
    children: ReactNode;
    customerTheme?: ThemeData;
    dynamicLayoutClassName?: string;
    newToWeb3WalletChainMap: ChainToWalletMap;
    view: ViewState<ViewType>;
};
type MockContextWrapperProps = {
    children: ReactNode;
    dynamicLayoutClassName?: string;
};
type MockContextValue = {
    mockedSDK: boolean;
};
export declare const MockContext: import("react").Context<MockContextValue | undefined>;
export declare const MockContextProvider: ({ children, view, customerTheme, dynamicLayoutClassName, }: MockContextProps) => JSX.Element;
export declare const MockContextWrapper: ({ dynamicLayoutClassName, children, }: MockContextWrapperProps) => JSX.Element;
export declare const useMockContext: () => MockContextValue;
export {};
