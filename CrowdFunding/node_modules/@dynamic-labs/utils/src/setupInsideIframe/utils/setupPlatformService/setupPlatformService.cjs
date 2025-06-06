'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var createMessageSender = require('../createMessageSender/createMessageSender.cjs');
var createMessageHandler = require('../createMessageHandler/createMessageHandler.cjs');
var PlatformService = require('../../../services/PlatformService/PlatformService.cjs');
require('tldts');

const setupPlatformService = (initialParentURL) => {
    let parentURL = new URL(initialParentURL);
    const messageHandler = createMessageHandler.createMessageHandler(initialParentURL.origin);
    const messageSender = createMessageSender.createMessageSender(initialParentURL.origin);
    PlatformService.PlatformService.implementation = {
        getDisplayOrigin: () => parentURL.origin,
        getHost: () => parentURL.host,
        getHostname: () => parentURL.hostname,
        getOrigin: () => parentURL.origin,
        getTLD: () => parentURL.hostname,
        getUrl: () => parentURL,
        isNativeMobile: false,
        openURL: (url_1, ...args_1) => _tslib.__awaiter(void 0, [url_1, ...args_1], void 0, function* (url, target = 'self', features = '') {
            return messageSender('OPEN_URL', {
                features,
                target,
                url,
            });
        }),
    };
    messageHandler('UPDATE_PARENT_URL', ({ url }) => {
        parentURL = new URL(url);
    });
};

exports.setupPlatformService = setupPlatformService;
