'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var logger = require('../logger.cjs');
var getSocialIcon = require('./getSocialIcon.cjs');

const findSocialIcon = (name, variant = 'light') => {
    try {
        return getSocialIcon.getSocialIcon(name, variant);
    }
    catch (e) {
        logger.logger.error(e);
        return null;
    }
};

exports.findSocialIcon = findSocialIcon;
