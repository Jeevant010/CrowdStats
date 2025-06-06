'use client'
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { classNames } from '../../../utils/functions/classNames/classNames.js';

const mapTransformOriginToClassName = {
    'bottom-left': 'popper-content__transform-origin-bottom-left',
    'bottom-right': 'popper-content__transform-origin-bottom-right',
    'top-left': 'popper-content__transform-origin-top-left',
    'top-right': 'popper-content__transform-origin-top-right',
};
const PopperContent = forwardRef(({ children, transformOrigin, style, className }, ref) => (jsx("div", { "data-testid": 'popper-content', ref: ref, className: classNames('popper-content', mapTransformOriginToClassName[transformOrigin], className), style: style, children: children })));
PopperContent.displayName = 'PopperContent';

export { PopperContent };
