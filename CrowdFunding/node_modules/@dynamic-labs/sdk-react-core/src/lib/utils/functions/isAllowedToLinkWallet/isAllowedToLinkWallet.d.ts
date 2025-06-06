import { JwtVerifiedCredential, ProjectSettings } from '@dynamic-labs/sdk-api-core';
export declare const isAllowedToLinkWallet: (projectSettings: ProjectSettings | undefined, verifiedCredentials: JwtVerifiedCredential[] | undefined, multiWallet?: boolean) => boolean;
