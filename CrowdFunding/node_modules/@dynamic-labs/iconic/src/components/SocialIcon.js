'use client'
import { __rest } from '../../_virtual/_tslib.js';
import { createElement } from 'react';
import { findSocialIcon } from './findSocialIcon.js';

const SocialIcon = (_a) => {
    var { name, variant } = _a, props = __rest(_a, ["name", "variant"]);
    const Icon = findSocialIcon(name, variant);
    if (!Icon)
        return null;
    return createElement(Icon, props, null);
};

export { SocialIcon };
