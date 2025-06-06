'use client'
import { StorageService } from '@dynamic-labs/utils';
import { removeStoreInstance } from '../../../../store/internalImplementation/store.js';

const onReinitialize = () => {
    removeStoreInstance();
    StorageService.clearRegistry();
};

export { onReinitialize };
