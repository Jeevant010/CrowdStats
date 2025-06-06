import { DynamicJwt, JwtVerifiedCredential, SdkUser } from '@dynamic-labs/sdk-api-core';
import { UserProfile } from '@dynamic-labs/types';
export declare const lastAuthenticatedAccount: (dynamicJwtOrUser: DynamicJwt | UserProfile | SdkUser) => JwtVerifiedCredential | undefined;
