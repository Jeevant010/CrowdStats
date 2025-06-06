import { WalletBookSchema, WalletSchema } from '@dynamic-labs/wallet-book';
import { WalletMetadata } from '../../types';
type GetWalletMetadataFromWalletBookOpts = {
    walletKey: string;
    walletBookWallet?: WalletSchema;
    walletBook?: WalletBookSchema;
    walletFallback?: WalletSchema;
};
export declare const getWalletMetadataFromWalletBook: ({ walletKey, walletBookWallet, walletBook, walletFallback, }: GetWalletMetadataFromWalletBookOpts) => WalletMetadata | undefined;
export {};
