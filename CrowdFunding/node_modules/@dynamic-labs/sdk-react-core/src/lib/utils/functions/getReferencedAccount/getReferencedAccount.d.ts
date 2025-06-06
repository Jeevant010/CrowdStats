import { UserProfile } from '../../../..';
/**
 * given a wallet it, this function will look through the jwt and do the following:
 * 1. find the account that matches the wallet id
 * 2. find the account that matches the refId of the account found in step 1
 * 3. return the account found in step 2. this is the referenced account
 */
export declare const getReferencedAccount: (user: UserProfile | undefined, walletId: string) => import("@dynamic-labs/sdk-api-core").JwtVerifiedCredential | undefined;
