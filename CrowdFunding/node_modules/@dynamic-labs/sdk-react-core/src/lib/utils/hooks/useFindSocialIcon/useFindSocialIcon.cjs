'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconic = require('@dynamic-labs/iconic');
var useIconThemeVariant = require('../useIconThemeVariant/useIconThemeVariant.cjs');

const useFindSocialIcon = () => {
    const variant = useIconThemeVariant.useIconThemeVariant();
    return React.useCallback((provider) => iconic.findSocialIcon(provider, variant), [variant]);
};

exports.useFindSocialIcon = useFindSocialIcon;
