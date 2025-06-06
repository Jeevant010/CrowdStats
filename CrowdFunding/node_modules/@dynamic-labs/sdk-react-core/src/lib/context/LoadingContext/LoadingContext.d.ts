import { Dispatch, ReactNode, SetStateAction } from 'react';
type LoadingContextProps = {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
};
export declare const LoadingContext: import("react").Context<LoadingContextProps | undefined>;
export declare const LoadingContextProvider: ({ children, }: {
    children: ReactNode;
}) => JSX.Element;
export declare const useLoadingContext: () => LoadingContextProps;
export {};
