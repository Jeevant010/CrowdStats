'use client'
import { StorageService } from '@dynamic-labs/utils';
import { DEVICE_FINGERPRINT } from '../../constants/localStorage.js';
import '../../constants/colors.js';
import '../../constants/values.js';

const getDeviceFingerprint = () => {
    if (typeof window === 'undefined')
        return undefined;
    const deviceFingerprint = StorageService.getItem(DEVICE_FINGERPRINT);
    if (!deviceFingerprint)
        return undefined;
    return deviceFingerprint;
};

export { getDeviceFingerprint };
