'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('../../../utils/functions/classNames/classNames.cjs');
var useTransition = require('../../../utils/hooks/useTransition/useTransition.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getZoomTransitionDefaultStyles = (duration) => ({
    transition: `transform ${duration}ms linear, opacity ${duration}ms linear`,
});
const transitionStyles = {
    ENTERED: {
        opacity: '1',
        transform: 'scale(1)',
    },
    ENTERING: {
        opacity: '0',
        transform: 'scale(0.9)',
    },
    EXITING: {
        opacity: '0',
        transform: 'scale(1.1)',
    },
};
const UnoptimizedZoomTransition = (_a) => {
    var { children, className } = _a, transitionProps = _tslib.__rest(_a, ["children", "className"]);
    const { mount, stage, currentDuration } = useTransition.useTransition(transitionProps);
    const defaultStyles = getZoomTransitionDefaultStyles(currentDuration);
    const stageStyles = transitionStyles[stage];
    if (!mount)
        return null;
    return (jsxRuntime.jsx("div", { className: classNames.classNames(className, 'zoom-transition__root'), style: Object.assign(Object.assign({}, defaultStyles), stageStyles), children: children }));
};
const ZoomTransition = React__default["default"].memo(UnoptimizedZoomTransition);

exports.UnoptimizedZoomTransition = UnoptimizedZoomTransition;
exports.ZoomTransition = ZoomTransition;
