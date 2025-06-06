import { WalletBookSchema, WalletSchema } from '../schemas';
export declare const getWalletBookWallet: (walletBook: WalletBookSchema | undefined, walletKey: string | undefined, walletFallback?: WalletSchema) => WalletSchema;
