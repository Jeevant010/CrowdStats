import { Dispatch, ReactNode, SetStateAction } from 'react';
type WalletContextProps = {
    isLoadingEmbeddedWallet: boolean;
    setIsLoadingEmbeddedWallet: Dispatch<SetStateAction<boolean>>;
};
export declare const WalletContext: import("react").Context<WalletContextProps | undefined>;
export declare const WalletContextProvider: ({ children, }: {
    children: ReactNode;
}) => JSX.Element;
export declare const useWalletContext: () => WalletContextProps;
export {};
