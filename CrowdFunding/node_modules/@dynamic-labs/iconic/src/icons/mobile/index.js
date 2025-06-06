'use client'
import { createIconic } from '../../Iconic.js';

const AppleIcon = createIconic({
    alt: 'Apple',
    iconName: 'apple',
    sourcePath: 'icons/mobile/apple.svg',
});
const AndroidIcon = createIconic({
    alt: 'Android',
    iconName: 'android',
    sourcePath: 'icons/mobile/android.svg',
});

export { AndroidIcon, AppleIcon };
