import { WalletBookSchema } from '@dynamic-labs/wallet-book';
export declare class WalletBookSingleton {
    readonly walletBook: WalletBookSchema;
    private constructor();
    private static instance;
    static getOrCreate(walletBook: WalletBookSchema): WalletBookSingleton;
    static reset(): void;
}
