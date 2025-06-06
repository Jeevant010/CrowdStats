'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var useTransition = require('../../../utils/hooks/useTransition/useTransition.cjs');
var transitions = require('../../../utils/constants/transitions.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getSlideInUpTransitionDefaultStyles = (duration, curve = transitions.EASING_FUNCTION_DEFAULT) => ({
    transition: `transform ${duration}ms ${curve}, opacity ${duration}ms ${curve}`,
});
const transitionStyles = {
    ENTERED: {
        transform: 'translateY(0)',
    },
    ENTERING: {
        transform: 'translateY(50vh)',
    },
    EXITING: {
        transform: 'translateY(50vh)',
    },
};
const UnoptimizedSlideInUpTransition = (_a) => {
    var { children, className, easingFunction } = _a, transitionProps = _tslib.__rest(_a, ["children", "className", "easingFunction"]);
    const { mount, stage, currentDuration } = useTransition.useTransition(transitionProps);
    const defaultStyles = getSlideInUpTransitionDefaultStyles(currentDuration, easingFunction);
    const stageStyles = transitionStyles[stage];
    if (!mount)
        return null;
    return (jsxRuntime.jsx("div", { className: className, style: Object.assign(Object.assign({}, defaultStyles), stageStyles), children: children }));
};
const SlideInUpTransition = React__default["default"].memo(UnoptimizedSlideInUpTransition);

exports.SlideInUpTransition = SlideInUpTransition;
exports.UnoptimizedSlideInUpTransition = UnoptimizedSlideInUpTransition;
