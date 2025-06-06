'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const themeModes = ['light', 'dark', 'auto'];
const isThemeSetting = (theme) => themeModes.includes(theme);

exports.isThemeSetting = isThemeSetting;
