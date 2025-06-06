import { TurnkeySignedRequest } from '@dynamic-labs/sdk-api-core';
export type RecoveryEmailResponse = {
    userId: string;
    signedRequest: TurnkeySignedRequest;
};
