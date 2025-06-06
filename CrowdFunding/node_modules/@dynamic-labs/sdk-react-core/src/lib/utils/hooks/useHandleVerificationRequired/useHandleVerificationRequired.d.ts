import { ProjectSettingsKyc, UpdateSelfResponse } from '@dynamic-labs/sdk-api-core';
import { OtpDestination } from '@dynamic-labs/types';
import { UpdateUserResponse } from '../../../data';
import { UpdateUserReturnPayload } from '../useUserUpdateRequest/useUpdateUser';
export type HandleVerification = (props: {
    updateUserProfileResponse: UpdateUserResponse | UpdateSelfResponse;
    destination: OtpDestination;
    missingFields: ProjectSettingsKyc[];
}) => Promise<UpdateUserReturnPayload>;
export declare const getResponseInfo: (response: UpdateSelfResponse, destination: OtpDestination) => {
    displayDestination: string | undefined;
    verificationUUID: string | undefined;
};
export declare const useHandleVerificationRequired: () => HandleVerification;
