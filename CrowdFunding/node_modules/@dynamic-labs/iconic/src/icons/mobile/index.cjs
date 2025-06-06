'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Iconic = require('../../Iconic.cjs');

const AppleIcon = Iconic.createIconic({
    alt: 'Apple',
    iconName: 'apple',
    sourcePath: 'icons/mobile/apple.svg',
});
const AndroidIcon = Iconic.createIconic({
    alt: 'Android',
    iconName: 'android',
    sourcePath: 'icons/mobile/android.svg',
});

exports.AndroidIcon = AndroidIcon;
exports.AppleIcon = AppleIcon;
