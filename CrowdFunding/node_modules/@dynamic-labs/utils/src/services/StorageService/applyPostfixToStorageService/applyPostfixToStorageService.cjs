'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const applyPostfixToStorageService = ({ storage, postfix, }) => {
    const getKeyWithPostfix = (key) => postfix ? `${key}_${postfix}` : key;
    return Object.assign(Object.assign({}, storage), { getItem: (key) => storage.getItem(getKeyWithPostfix(key)), removeItem: (key) => storage.removeItem(getKeyWithPostfix(key)), setItem: (key, data) => storage.setItem(getKeyWithPostfix(key), data) });
};

exports.applyPostfixToStorageService = applyPostfixToStorageService;
