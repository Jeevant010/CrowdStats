import { WalletBookSchema } from '../schemas';
export declare const findWalletGroup: (walletBook: WalletBookSchema, walletGroup: string) => {
    key: string;
    name: string;
    brand?: {
        alt?: string | undefined;
        primaryColor?: string | undefined;
        spriteId?: string | undefined;
    } | undefined;
    walletOverrides?: Record<string, {
        brand?: {
            alt?: string | undefined;
            primaryColor?: string | undefined;
            spriteId?: string | undefined;
        } | undefined;
        name?: string | undefined;
    }> | undefined;
} | undefined;
