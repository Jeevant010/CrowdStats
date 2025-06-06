'use client'
import { __rest } from '../../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import React__default from 'react';
import { useTransition } from '../../../utils/hooks/useTransition/useTransition.js';
import { EASING_FUNCTION_DEFAULT } from '../../../utils/constants/transitions.js';

const getSlideInUpTransitionDefaultStyles = (duration, curve = EASING_FUNCTION_DEFAULT) => ({
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
    var { children, className, easingFunction } = _a, transitionProps = __rest(_a, ["children", "className", "easingFunction"]);
    const { mount, stage, currentDuration } = useTransition(transitionProps);
    const defaultStyles = getSlideInUpTransitionDefaultStyles(currentDuration, easingFunction);
    const stageStyles = transitionStyles[stage];
    if (!mount)
        return null;
    return (jsx("div", { className: className, style: Object.assign(Object.assign({}, defaultStyles), stageStyles), children: children }));
};
const SlideInUpTransition = React__default.memo(UnoptimizedSlideInUpTransition);

export { SlideInUpTransition, UnoptimizedSlideInUpTransition };
