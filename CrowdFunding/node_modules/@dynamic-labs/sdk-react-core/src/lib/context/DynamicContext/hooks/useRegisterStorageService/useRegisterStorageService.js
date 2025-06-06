'use client'
import { useRef } from 'react';
import { PlatformService, StorageService, applyPostfixToStorageService, createStorageService } from '@dynamic-labs/utils';
import { isSSR } from '../../../../shared/utils/functions/isSSR/isSSR.js';

/**
 * Registers the storage service for the SDK.
 * When on server side rendering, the storage service is not available, so we need to register a dummy storage service.
 * @param storagePostfix - The postfix for the storage services.
 */
const useRegisterStorageService = ({ storagePostfix, }) => {
    const lastPostfix = useRef(storagePostfix);
    if (!isSSR() && PlatformService.isNativeMobile)
        return;
    const storageForSSR = {
        clear: () => undefined,
        getItem: () => null,
        key: () => null,
        length: 0,
        removeItem: () => undefined,
        setItem: () => null,
    };
    const localStorage = isSSR() ? storageForSSR : window.localStorage;
    const sessionStorage = isSSR() ? storageForSSR : window.sessionStorage;
    if (lastPostfix.current !== storagePostfix) {
        lastPostfix.current = storagePostfix;
        StorageService.clearRegistry();
    }
    if (!StorageService.getSourceStorage('localStorage')) {
        StorageService.registerSourceStorage('localStorage', applyPostfixToStorageService({
            postfix: storagePostfix,
            storage: createStorageService({
                storage: localStorage,
            }),
        }));
    }
    if (!StorageService.getSourceStorage('sessionStorage')) {
        StorageService.registerSourceStorage('sessionStorage', applyPostfixToStorageService({
            postfix: storagePostfix,
            storage: createStorageService({
                storage: sessionStorage,
            }),
        }));
    }
};

export { useRegisterStorageService };
