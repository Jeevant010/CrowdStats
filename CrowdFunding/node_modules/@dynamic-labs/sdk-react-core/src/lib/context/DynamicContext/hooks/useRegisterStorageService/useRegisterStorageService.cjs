'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var utils = require('@dynamic-labs/utils');
var isSSR = require('../../../../shared/utils/functions/isSSR/isSSR.cjs');

/**
 * Registers the storage service for the SDK.
 * When on server side rendering, the storage service is not available, so we need to register a dummy storage service.
 * @param storagePostfix - The postfix for the storage services.
 */
const useRegisterStorageService = ({ storagePostfix, }) => {
    const lastPostfix = React.useRef(storagePostfix);
    if (!isSSR.isSSR() && utils.PlatformService.isNativeMobile)
        return;
    const storageForSSR = {
        clear: () => undefined,
        getItem: () => null,
        key: () => null,
        length: 0,
        removeItem: () => undefined,
        setItem: () => null,
    };
    const localStorage = isSSR.isSSR() ? storageForSSR : window.localStorage;
    const sessionStorage = isSSR.isSSR() ? storageForSSR : window.sessionStorage;
    if (lastPostfix.current !== storagePostfix) {
        lastPostfix.current = storagePostfix;
        utils.StorageService.clearRegistry();
    }
    if (!utils.StorageService.getSourceStorage('localStorage')) {
        utils.StorageService.registerSourceStorage('localStorage', utils.applyPostfixToStorageService({
            postfix: storagePostfix,
            storage: utils.createStorageService({
                storage: localStorage,
            }),
        }));
    }
    if (!utils.StorageService.getSourceStorage('sessionStorage')) {
        utils.StorageService.registerSourceStorage('sessionStorage', utils.applyPostfixToStorageService({
            postfix: storagePostfix,
            storage: utils.createStorageService({
                storage: sessionStorage,
            }),
        }));
    }
};

exports.useRegisterStorageService = useRegisterStorageService;
