import { DynamicJwt, JwtVerifiedCredentialFormatEnum } from '@dynamic-labs/sdk-api-core';
import { UserProfile } from '../../../..';
/**
 * This will return a string which we can present to the user credential type
 * @param user
 * @param type optional parameter to check for specific credential type
 * @returns JwtVerifiedCredentialFormatEnum | undefined
 */
export declare const getUserVerifiedCredentialType: (user: UserProfile | DynamicJwt | undefined, type?: JwtVerifiedCredentialFormatEnum) => JwtVerifiedCredentialFormatEnum | undefined;
