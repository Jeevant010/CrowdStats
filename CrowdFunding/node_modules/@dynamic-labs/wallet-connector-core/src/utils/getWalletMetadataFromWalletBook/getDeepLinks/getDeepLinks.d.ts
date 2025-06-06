import { WalletSchema } from '@dynamic-labs/wallet-book';
import { WalletDeepLinks } from '../../../types';
export declare const getDeepLinks: ({ mobile, desktop, }: {
    mobile?: WalletSchema['mobile'];
    desktop?: WalletSchema['desktop'];
}) => WalletDeepLinks | undefined;
