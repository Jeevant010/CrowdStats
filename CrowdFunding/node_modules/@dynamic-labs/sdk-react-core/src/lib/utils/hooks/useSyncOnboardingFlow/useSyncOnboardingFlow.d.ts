import { UserOnboardingFieldRequest, UserOnboardingFieldResponse } from '../../../shared';
export type HandleUserOnboarding = (missingFields: UserOnboardingFieldRequest[]) => Promise<UserOnboardingFieldResponse[]>;
export declare const useSyncOnboardingFlow: ({ handler: headlessHandler, }?: {
    handler?: HandleUserOnboarding;
}) => void;
