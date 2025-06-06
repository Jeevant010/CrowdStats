import { JwtVerifiedCredential } from '@dynamic-labs/sdk-api-core';
import { WalletOption } from '../../../shared/types/wallets';
export declare const findWalletOptionFor: (account: JwtVerifiedCredential, walletOptions: WalletOption[]) => WalletOption | undefined;
