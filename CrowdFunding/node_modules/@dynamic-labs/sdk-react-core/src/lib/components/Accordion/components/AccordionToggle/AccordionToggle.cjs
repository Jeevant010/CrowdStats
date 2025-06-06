'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
require('react');
var chevronDown = require('../../../../shared/assets/chevron-down.cjs');
require('@dynamic-labs/iconic');
require('../../../../context/ViewContext/ViewContext.cjs');
var Button = require('../../../Button/Button.cjs');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');

/**
 * A toggle component that acts as a button and displays a chevron icon to indicate the
 * open/closed state of an accordion.
 */
const AccordionToggle = ({ className, children, isOpen, onClick, labelClassName, }) => {
    const { t } = reactI18next.useTranslation();
    return (jsxRuntime.jsxs(Button.Button, { onClick: onClick, className: classNames.classNames('dyn-accordion-toggle', className), children: [jsxRuntime.jsx("div", { className: classNames.classNames('dyn-accordion-toggle__label', labelClassName), children: children }), jsxRuntime.jsx(chevronDown.ReactComponent, { "data-testid": 'dyn-accordion-toggle-icon', className: classNames.classNames('dyn-accordion-toggle__icon', {
                    'dyn-accordion-toggle__icon-open': isOpen,
                }), "aria-label": isOpen
                    ? t('dyn_common.aria.expanded')
                    : t('dyn_common.aria.collapsed'), role: 'presentation' })] }));
};

exports.AccordionToggle = AccordionToggle;
