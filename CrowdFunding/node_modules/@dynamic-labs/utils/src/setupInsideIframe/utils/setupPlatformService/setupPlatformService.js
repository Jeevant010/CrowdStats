'use client'
import { __awaiter } from '../../../../_virtual/_tslib.js';
import { createMessageSender } from '../createMessageSender/createMessageSender.js';
import { createMessageHandler } from '../createMessageHandler/createMessageHandler.js';
import { PlatformService } from '../../../services/PlatformService/PlatformService.js';
import 'tldts';

const setupPlatformService = (initialParentURL) => {
    let parentURL = new URL(initialParentURL);
    const messageHandler = createMessageHandler(initialParentURL.origin);
    const messageSender = createMessageSender(initialParentURL.origin);
    PlatformService.implementation = {
        getDisplayOrigin: () => parentURL.origin,
        getHost: () => parentURL.host,
        getHostname: () => parentURL.hostname,
        getOrigin: () => parentURL.origin,
        getTLD: () => parentURL.hostname,
        getUrl: () => parentURL,
        isNativeMobile: false,
        openURL: (url_1, ...args_1) => __awaiter(void 0, [url_1, ...args_1], void 0, function* (url, target = 'self', features = '') {
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

export { setupPlatformService };
