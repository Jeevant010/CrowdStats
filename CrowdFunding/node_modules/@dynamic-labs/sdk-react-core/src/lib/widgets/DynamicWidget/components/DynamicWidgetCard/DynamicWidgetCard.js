'use client'
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const DynamicWidgetCard = forwardRef(({ children }, ref) => (jsx("div", { ref: ref, className: 'dynamic-widget-card', children: children })));
DynamicWidgetCard.displayName = 'DynamicWidgetCard';

export { DynamicWidgetCard };
