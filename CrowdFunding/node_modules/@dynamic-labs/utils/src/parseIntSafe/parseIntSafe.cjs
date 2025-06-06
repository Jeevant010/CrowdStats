'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var logger = require('../logger/logger.cjs');

const parseIntSafe = (value, radix = 10) => {
    try {
        const int = parseInt(String(value), radix);
        if (isNaN(int)) {
            logger.logger.error(`Error parsing ${value}`);
            return undefined;
        }
        return int;
    }
    catch (e) {
        logger.logger.error(`Error parsing ${value} to int: ${e}`);
    }
    return undefined;
};

exports.parseIntSafe = parseIntSafe;
