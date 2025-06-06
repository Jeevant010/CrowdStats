import { ProjectSettingsKyc, UpdateSelfResponse, UserFields } from '@dynamic-labs/sdk-api-core';
export type UpdateUserFieldsArg = Omit<UserFields, 'captchaToken' | 'policiesConsent'>;
export type UpdateUserReturnPayload = {
    isSmsVerificationRequired: boolean;
    isEmailVerificationRequired: boolean;
    missingFields: ProjectSettingsKyc[];
    updateUserProfileResponse: UpdateSelfResponse;
    verifyOtp?: (verificationToken: string) => Promise<UpdateUserReturnPayload>;
};
export type UpdateUser = (userFields: UpdateUserFieldsArg, options?: {
    userEnvironmentId?: string;
    jwtOverride?: string;
}) => Promise<UpdateUserReturnPayload>;
export declare const useUpdateUser: (validationSchemaStripUnknown: boolean) => UpdateUser;
