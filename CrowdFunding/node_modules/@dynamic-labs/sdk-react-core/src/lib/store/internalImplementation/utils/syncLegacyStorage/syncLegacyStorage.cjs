'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');

const AUTH_USER = 'dynamic_authenticated_user';
const syncLegacyStorage = (store) => {
    const legacyUser = utils.StorageService.getItem(AUTH_USER);
    if (Boolean(legacyUser) && !store.getState().user) {
        store.setState({ user: legacyUser !== null && legacyUser !== void 0 ? legacyUser : undefined });
        utils.StorageService.removeItem(AUTH_USER);
    }
    return store;
};

exports.syncLegacyStorage = syncLegacyStorage;
