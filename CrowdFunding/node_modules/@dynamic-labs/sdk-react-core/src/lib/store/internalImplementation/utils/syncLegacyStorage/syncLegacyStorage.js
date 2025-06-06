'use client'
import { StorageService } from '@dynamic-labs/utils';

const AUTH_USER = 'dynamic_authenticated_user';
const syncLegacyStorage = (store) => {
    const legacyUser = StorageService.getItem(AUTH_USER);
    if (Boolean(legacyUser) && !store.getState().user) {
        store.setState({ user: legacyUser !== null && legacyUser !== void 0 ? legacyUser : undefined });
        StorageService.removeItem(AUTH_USER);
    }
    return store;
};

export { syncLegacyStorage };
