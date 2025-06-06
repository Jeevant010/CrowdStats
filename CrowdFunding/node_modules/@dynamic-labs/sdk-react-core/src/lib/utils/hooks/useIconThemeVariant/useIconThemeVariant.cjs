'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ThemeContext = require('../../../context/ThemeContext/ThemeContext.cjs');
var useColorSchemePreference = require('../useColorSchemePreference/useColorSchemePreference.cjs');

const useIconThemeVariant = () => {
    const { theme: { theme: { name }, }, } = ThemeContext.useThemeContext();
    const preference = useColorSchemePreference.useColorSchemePreference();
    const variant = name === 'auto' ? preference : name;
    return variant;
};

exports.useIconThemeVariant = useIconThemeVariant;
