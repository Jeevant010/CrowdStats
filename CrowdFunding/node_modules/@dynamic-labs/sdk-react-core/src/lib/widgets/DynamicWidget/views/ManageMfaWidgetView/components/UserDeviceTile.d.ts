/// <reference types="react" />
import { MFADevice } from '@dynamic-labs/sdk-api-core';
export type UserDeviceTileProps = {
    userDevice: MFADevice;
    index: number;
    deleteDevice: (id: string) => void;
    isMfaRequired: boolean;
};
export declare const UserDeviceTile: ({ userDevice, deleteDevice, isMfaRequired, }: UserDeviceTileProps) => JSX.Element;
