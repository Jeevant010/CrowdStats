'use client'
import { StorageService } from '@dynamic-labs/utils';

const SOCIAL_STORAGE_KEY = 'dynamic_social_storage';
const searchSocialStorageByState = (targetState) => {
    var _a;
    const socialStorage = StorageService.getItem(SOCIAL_STORAGE_KEY);
    if (!socialStorage)
        return undefined;
    const storageEntries = Object.entries(socialStorage);
    const [provider] = (_a = storageEntries.find(([, { state }]) => state === targetState)) !== null && _a !== void 0 ? _a : [];
    if (!provider)
        return undefined;
    return socialStorage[provider];
};
const setSocialStorageFor = (provider, socialStorageItem) => {
    var _a;
    const socialStorage = (_a = StorageService.getItem(SOCIAL_STORAGE_KEY)) !== null && _a !== void 0 ? _a : {};
    socialStorage[provider] = Object.assign({ provider }, socialStorageItem);
    StorageService.setItem(SOCIAL_STORAGE_KEY, socialStorage);
};
const deleteSocialStorage = (provider) => {
    var _a;
    const socialStorage = (_a = StorageService.getItem(SOCIAL_STORAGE_KEY)) !== null && _a !== void 0 ? _a : {};
    delete socialStorage[provider];
    StorageService.setItem(SOCIAL_STORAGE_KEY, socialStorage);
};

export { SOCIAL_STORAGE_KEY, deleteSocialStorage, searchSocialStorageByState, setSocialStorageFor };
