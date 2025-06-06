'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../icons/social/index.cjs');

const getSocialIcon = (name, variant = 'light') => {
    const map = Object.fromEntries(Object.values(index).map((icon) => [icon.iconName, icon]));
    if (variant === 'dark') {
        const darkIcon = map[`${name.toLowerCase()}-dark`];
        if (darkIcon)
            return darkIcon;
    }
    const icon = map[name.toLowerCase()];
    if (icon)
        return icon;
    throw new Error(`Icon ${name}, not found`);
};

exports.getSocialIcon = getSocialIcon;
