'use client'
import { logger } from '../logger/logger.js';

const parseIntSafe = (value, radix = 10) => {
    try {
        const int = parseInt(String(value), radix);
        if (isNaN(int)) {
            logger.error(`Error parsing ${value}`);
            return undefined;
        }
        return int;
    }
    catch (e) {
        logger.error(`Error parsing ${value} to int: ${e}`);
    }
    return undefined;
};

export { parseIntSafe };
