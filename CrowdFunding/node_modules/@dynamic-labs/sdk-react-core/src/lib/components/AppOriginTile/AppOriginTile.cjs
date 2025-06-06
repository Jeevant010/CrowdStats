'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var utils = require('@dynamic-labs/utils');
var Typography = require('../Typography/Typography.cjs');
var Chip = require('../Chip/Chip.cjs');
var getGlobalWalletContext = require('../../shared/utils/functions/getGlobalWalletContext/getGlobalWalletContext.cjs');

const AppOriginTile = ({ origin }) => {
    const { requesterOrigin } = getGlobalWalletContext.getGlobalWalletContext();
    const displayOrigin = React.useMemo(() => {
        if (origin) {
            return origin;
        }
        if (requesterOrigin) {
            return requesterOrigin;
        }
        return utils.PlatformService.getDisplayOrigin();
    }, [origin, requesterOrigin]);
    if (!displayOrigin) {
        return null;
    }
    return (jsxRuntime.jsx(Chip.Chip, { className: 'app-origin-tile', children: jsxRuntime.jsx(Typography.Typography, { color: 'secondary', variant: 'body_normal', weight: 'regular', as: 'span', children: displayOrigin }) }));
};

exports.AppOriginTile = AppOriginTile;
