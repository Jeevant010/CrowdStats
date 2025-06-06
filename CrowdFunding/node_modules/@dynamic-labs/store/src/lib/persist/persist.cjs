'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var logger = require('../utils/logger/logger.cjs');

/**
 * Creates a persist middleware that saves the store state to the storage.
 */
const persist = ({ name, version = '0', storage, store, partialize, }) => {
    store.subscribe((state) => {
        const persistedState = partialize(state);
        storage.setItem(name, JSON.stringify({ state: persistedState, version }));
    });
    const storedState = storage.getItem(name);
    if (storedState) {
        try {
            const { state: persistedState, version: persistedVersion } = JSON.parse(storedState);
            if (persistedVersion === version) {
                store.setState(Object.assign(store.getInitialState(), persistedState));
            }
        }
        catch (error) {
            logger.logger.error('Failed to load state from storage', error);
        }
    }
    return store;
};

exports.persist = persist;
