import { WalletBookSchema } from '../schemas';
import { WalletGroupOverride } from '../schemas/walletGroup';
export declare const findWalletGroupOverride: (walletBook: WalletBookSchema, groupKey: string, walletKey: string) => WalletGroupOverride | undefined;
