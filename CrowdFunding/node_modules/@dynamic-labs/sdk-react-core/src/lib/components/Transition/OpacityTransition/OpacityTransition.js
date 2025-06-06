'use client'
import { __rest } from '../../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import React__default from 'react';
import { useTransition } from '../../../utils/hooks/useTransition/useTransition.js';

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
    var { children, style, className } = _a, transitionProps = __rest(_a, ["children", "style", "className"]);
    const { mount, stage, currentDuration } = useTransition(transitionProps);
    const defaultStyles = getOpacityTransitionDefaultStyles(currentDuration);
    const stageStyles = transitionStyles[stage];
    if (!mount)
        return null;
    return (jsx("div", { className: className, style: Object.assign(Object.assign(Object.assign({}, defaultStyles), stageStyles), style), children: children }));
};
const OpacityTransition = React__default.memo(UnoptimizedOpacityTransition);

export { OpacityTransition, UnoptimizedOpacityTransition };
