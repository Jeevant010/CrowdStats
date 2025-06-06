'use client'
import { isString } from '@dynamic-labs/utils';
import { isClassNamesObjectArg } from './utils/isClassNamesObjectArg.js';

const classNames = (...args) => {
    const classes1 = args.reduce((classes, arg) => {
        if (isString(arg)) {
            return [...classes, arg];
        }
        if (isClassNamesObjectArg(arg)) {
            const keys = Object.keys(arg);
            const validClasses = keys
                .map((key) => {
                if (arg[key]) {
                    return key;
                }
                return null;
            })
                .filter(isString);
            return [...classes, ...validClasses];
        }
        return classes;
    }, []);
    return classes1.join(' ');
};

export { classNames };
