'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');

const SOCIAL_STORAGE_KEY = 'dynamic_social_storage';
const searchSocialStorageByState = (targetState) => {
    var _a;
    const socialStorage = utils.StorageService.getItem(SOCIAL_STORAGE_KEY);
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
    const socialStorage = (_a = utils.StorageService.getItem(SOCIAL_STORAGE_KEY)) !== null && _a !== void 0 ? _a : {};
    socialStorage[provider] = Object.assign({ provider }, socialStorageItem);
    utils.StorageService.setItem(SOCIAL_STORAGE_KEY, socialStorage);
};
const deleteSocialStorage = (provider) => {
    var _a;
    const socialStorage = (_a = utils.StorageService.getItem(SOCIAL_STORAGE_KEY)) !== null && _a !== void 0 ? _a : {};
    delete socialStorage[provider];
    utils.StorageService.setItem(SOCIAL_STORAGE_KEY, socialStorage);
};

exports.SOCIAL_STORAGE_KEY = SOCIAL_STORAGE_KEY;
exports.deleteSocialStorage = deleteSocialStorage;
exports.searchSocialStorageByState = searchSocialStorageByState;
exports.setSocialStorageFor = setSocialStorageFor;
