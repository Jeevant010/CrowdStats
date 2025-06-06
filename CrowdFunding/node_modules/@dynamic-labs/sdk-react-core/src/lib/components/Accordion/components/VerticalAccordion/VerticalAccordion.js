'use client'
import { jsx } from 'react/jsx-runtime';
import { classNames } from '../../../../utils/functions/classNames/classNames.js';

const VerticalAccordion = ({ children, className, style, view, }) => (jsx("div", { className: classNames(className, 'vertical-accordion__container'), style: style, "data-dynamic-view": view, children: children }));

export { VerticalAccordion };
