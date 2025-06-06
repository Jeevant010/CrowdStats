/// <reference types="react" />
import { MFADeviceType } from '@dynamic-labs/sdk-api-core';
export type MfaSecureDeviceViewProps = {
    type?: MFADeviceType;
    isInitialSetup?: boolean;
};
export declare const MfaSecureDeviceView: ({ type, isInitialSetup, }: MfaSecureDeviceViewProps) => JSX.Element;
