'use client'
import { __rest } from '../../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import React__default from 'react';
import { classNames } from '../../../utils/functions/classNames/classNames.js';
import { useTransition } from '../../../utils/hooks/useTransition/useTransition.js';

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
    var { children, className } = _a, transitionProps = __rest(_a, ["children", "className"]);
    const { mount, stage, currentDuration } = useTransition(transitionProps);
    const defaultStyles = getZoomTransitionDefaultStyles(currentDuration);
    const stageStyles = transitionStyles[stage];
    if (!mount)
        return null;
    return (jsx("div", { className: classNames(className, 'zoom-transition__root'), style: Object.assign(Object.assign({}, defaultStyles), stageStyles), children: children }));
};
const ZoomTransition = React__default.memo(UnoptimizedZoomTransition);

export { UnoptimizedZoomTransition, ZoomTransition };
