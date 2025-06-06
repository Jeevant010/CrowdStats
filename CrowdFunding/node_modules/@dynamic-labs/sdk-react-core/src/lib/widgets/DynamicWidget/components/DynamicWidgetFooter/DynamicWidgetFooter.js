'use client'
import { jsx } from 'react/jsx-runtime';

const DynamicWidgetFooter = ({ children }) => (jsx("div", { className: 'dynamic-widget-footer', "data-testid": 'dynamic-widget-footer', children: children }));

export { DynamicWidgetFooter };
