'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const EnterTileAnimation = ({ children, className = '', delay = 0, dataTestId, }) => {
    const style = React.useMemo(() => ({
        animationDelay: delay,
    }), [delay]);
    return (jsxRuntime.jsx("div", { "data-testid": dataTestId, className: classNames.classNames(className, 'enter-list-tile-animation'), style: style, children: children }));
};

exports.EnterTileAnimation = EnterTileAnimation;
