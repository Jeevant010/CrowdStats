'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');

const getItemAsync = (key) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    if (typeof window === 'undefined') {
        return undefined;
    }
    const value = window.localStorage.getItem(key);
    if (!value) {
        return undefined;
    }
    try {
        return JSON.parse(value);
    }
    catch (error) {
        return value;
    }
});
const setItemAsync = (key, value) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    if (typeof window === 'undefined') {
        return undefined;
    }
    window.localStorage.setItem(key, JSON.stringify(value));
});
const removeItemAsync = (key) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    if (typeof window === 'undefined') {
        return undefined;
    }
    return localStorage.removeItem(key);
});

exports.getItemAsync = getItemAsync;
exports.removeItemAsync = removeItemAsync;
exports.setItemAsync = setItemAsync;
