'use client'
import { createIconic } from '../../Iconic.js';

const CaptchaWaveIcon = createIconic({
    alt: 'Captcha Wave',
    iconName: 'captcha-wave',
    sourcePath: 'icons/misc/captcha-wave.svg',
});
const UserProfileIcon = createIconic({
    alt: 'User Profile',
    iconName: 'user-profile',
    sourcePath: 'icons/misc/user-profile.svg',
});
const ArrowSendIcon = createIconic({
    alt: 'Arrow Send',
    iconName: 'arrow-send',
    sourcePath: 'icons/misc/arrow-send.svg',
});

export { ArrowSendIcon, CaptchaWaveIcon, UserProfileIcon };
