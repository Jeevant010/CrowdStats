'use client'
import { useRef, useState, useCallback } from 'react';
import { StorageService } from '@dynamic-labs/utils';
import { logger } from '../../../logger.js';

const useLocalStorage = (key, initialValue, valueValidator, otherKeysToRemove) => {
    const intialValueRef = useRef(initialValue);
    intialValueRef.current = initialValue;
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = StorageService.getItem(key);
            if (item && valueValidator && !valueValidator(item)) {
                StorageService.removeItem(key);
                otherKeysToRemove === null || otherKeysToRemove === void 0 ? void 0 : otherKeysToRemove.forEach((k) => StorageService.removeItem(k));
                return intialValueRef.current;
            }
            else {
                return item !== null && item !== void 0 ? item : intialValueRef.current;
            }
        }
        catch (error) {
            logger.error(error);
            return intialValueRef.current;
        }
    });
    const setValue = useCallback((value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            StorageService.setItem(key, valueToStore);
        }
        catch (error) {
            logger.error(error);
        }
    }, [key, storedValue]);
    const removeValue = useCallback(() => {
        StorageService.removeItem(key);
        setStoredValue(intialValueRef.current);
    }, [key]);
    return [storedValue, setValue, removeValue];
};

export { useLocalStorage };
