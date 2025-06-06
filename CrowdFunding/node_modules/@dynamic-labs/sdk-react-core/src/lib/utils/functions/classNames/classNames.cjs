'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');
var isClassNamesObjectArg = require('./utils/isClassNamesObjectArg.cjs');

const classNames = (...args) => {
    const classes1 = args.reduce((classes, arg) => {
        if (utils.isString(arg)) {
            return [...classes, arg];
        }
        if (isClassNamesObjectArg.isClassNamesObjectArg(arg)) {
            const keys = Object.keys(arg);
            const validClasses = keys
                .map((key) => {
                if (arg[key]) {
                    return key;
                }
                return null;
            })
                .filter(utils.isString);
            return [...classes, ...validClasses];
        }
        return classes;
    }, []);
    return classes1.join(' ');
};

exports.classNames = classNames;
