'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var utils = require('@dynamic-labs/utils');
var logger = require('../../../logger.cjs');

const useLocalStorage = (key, initialValue, valueValidator, otherKeysToRemove) => {
    const intialValueRef = React.useRef(initialValue);
    intialValueRef.current = initialValue;
    const [storedValue, setStoredValue] = React.useState(() => {
        try {
            const item = utils.StorageService.getItem(key);
            if (item && valueValidator && !valueValidator(item)) {
                utils.StorageService.removeItem(key);
                otherKeysToRemove === null || otherKeysToRemove === void 0 ? void 0 : otherKeysToRemove.forEach((k) => utils.StorageService.removeItem(k));
                return intialValueRef.current;
            }
            else {
                return item !== null && item !== void 0 ? item : intialValueRef.current;
            }
        }
        catch (error) {
            logger.logger.error(error);
            return intialValueRef.current;
        }
    });
    const setValue = React.useCallback((value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            utils.StorageService.setItem(key, valueToStore);
        }
        catch (error) {
            logger.logger.error(error);
        }
    }, [key, storedValue]);
    const removeValue = React.useCallback(() => {
        utils.StorageService.removeItem(key);
        setStoredValue(intialValueRef.current);
    }, [key]);
    return [storedValue, setValue, removeValue];
};

exports.useLocalStorage = useLocalStorage;
