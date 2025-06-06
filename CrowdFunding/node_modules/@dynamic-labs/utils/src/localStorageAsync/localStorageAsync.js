'use client'
import { __awaiter } from '../../_virtual/_tslib.js';

const getItemAsync = (key) => __awaiter(void 0, void 0, void 0, function* () {
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
const setItemAsync = (key, value) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof window === 'undefined') {
        return undefined;
    }
    window.localStorage.setItem(key, JSON.stringify(value));
});
const removeItemAsync = (key) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof window === 'undefined') {
        return undefined;
    }
    return localStorage.removeItem(key);
});

export { getItemAsync, removeItemAsync, setItemAsync };
