'use client'
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const InlineWidget = forwardRef(({ children, className, dataTestId }, ref) => (jsx("div", { ref: ref, "data-testid": dataTestId, className: classNames('inline-widget', className), children: children })));
InlineWidget.displayName = 'InlineWidget';

export { InlineWidget };
