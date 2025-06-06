'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import 'react';
import { ReactComponent as SvgChevronDown } from '../../../../shared/assets/chevron-down.js';
import '@dynamic-labs/iconic';
import '../../../../context/ViewContext/ViewContext.js';
import { Button } from '../../../Button/Button.js';
import { classNames } from '../../../../utils/functions/classNames/classNames.js';

/**
 * A toggle component that acts as a button and displays a chevron icon to indicate the
 * open/closed state of an accordion.
 */
const AccordionToggle = ({ className, children, isOpen, onClick, labelClassName, }) => {
    const { t } = useTranslation();
    return (jsxs(Button, { onClick: onClick, className: classNames('dyn-accordion-toggle', className), children: [jsx("div", { className: classNames('dyn-accordion-toggle__label', labelClassName), children: children }), jsx(SvgChevronDown, { "data-testid": 'dyn-accordion-toggle-icon', className: classNames('dyn-accordion-toggle__icon', {
                    'dyn-accordion-toggle__icon-open': isOpen,
                }), "aria-label": isOpen
                    ? t('dyn_common.aria.expanded')
                    : t('dyn_common.aria.collapsed'), role: 'presentation' })] }));
};

export { AccordionToggle };
