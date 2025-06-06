'use client'
import { jsx } from 'react/jsx-runtime';

/**
 * Headless Button component for other buttons to extend.
 *
 * This component handles button basics such as:
 * - Accessibility props
 * - Refs
 * - Test IDs
 * - Click events
 * - Disabled state
 */
const BaseButton = ({ children, className, dataTestId, disabled, onClick, type, style, ariaLabel, ariaExpanded, ariaControls, buttonRef, }) => (jsx("button", { type: type, className: className, ref: buttonRef, onClick: onClick, disabled: disabled, "data-testid": dataTestId, style: style, "aria-label": ariaLabel, "aria-expanded": ariaExpanded, "aria-controls": ariaControls, children: children }));

export { BaseButton };
