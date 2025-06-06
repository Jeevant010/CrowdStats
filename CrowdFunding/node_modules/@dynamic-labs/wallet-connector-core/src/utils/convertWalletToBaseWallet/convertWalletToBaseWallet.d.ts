import { BaseWallet } from '@dynamic-labs/types';
import { Wallet } from '../../Wallet';
export declare const convertWalletToBaseWallet: (wallet: Wallet) => BaseWallet;
export declare const convertWalletToBaseWalletPartial: (wallet: Partial<Wallet>) => Partial<BaseWallet>;
