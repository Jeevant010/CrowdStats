import { WalletBookSchema } from '../schemas';
export type IWalletBookContext = {
    walletBook: WalletBookSchema;
};
export declare const WalletBookContext: import("react").Context<IWalletBookContext | undefined>;
export declare const useWalletBookContext: () => IWalletBookContext;
