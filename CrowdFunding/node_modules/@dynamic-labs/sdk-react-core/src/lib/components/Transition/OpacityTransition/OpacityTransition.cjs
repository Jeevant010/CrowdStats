'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var useTransition = require('../../../utils/hooks/useTransition/useTransition.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getOpacityTransitionDefaultStyles = (duration) => ({
    transition: `opacity ${duration}ms linear`,
});
const transitionStyles = {
    ENTERED: {
        opacity: 1,
    },
    ENTERING: {
        opacity: 0,
    },
    EXITING: {
        opacity: 0,
    },
    UNMOUNT: {
        opacity: 0,
    },
};
const UnoptimizedOpacityTransition = (_a) => {
    var { children, style, className } = _a, transitionProps = _tslib.__rest(_a, ["children", "style", "className"]);
    const { mount, stage, currentDuration } = useTransition.useTransition(transitionProps);
    const defaultStyles = getOpacityTransitionDefaultStyles(currentDuration);
    const stageStyles = transitionStyles[stage];
    if (!mount)
        return null;
    return (jsxRuntime.jsx("div", { className: className, style: Object.assign(Object.assign(Object.assign({}, defaultStyles), stageStyles), style), children: children }));
};
const OpacityTransition = React__default["default"].memo(UnoptimizedOpacityTransition);

exports.OpacityTransition = OpacityTransition;
exports.UnoptimizedOpacityTransition = UnoptimizedOpacityTransition;
