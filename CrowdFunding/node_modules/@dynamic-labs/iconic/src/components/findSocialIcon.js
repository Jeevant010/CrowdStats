'use client'
import { logger } from '../logger.js';
import { getSocialIcon } from './getSocialIcon.js';

const findSocialIcon = (name, variant = 'light') => {
    try {
        return getSocialIcon(name, variant);
    }
    catch (e) {
        logger.error(e);
        return null;
    }
};

export { findSocialIcon };
