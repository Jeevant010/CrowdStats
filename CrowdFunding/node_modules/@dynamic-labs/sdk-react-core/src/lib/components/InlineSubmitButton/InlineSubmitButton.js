'use client'
import { jsx } from 'react/jsx-runtime';
import 'react';
import { ReactComponent as SvgArrowRightBackground } from '../../shared/assets/arrow-right-background.js';
import '@dynamic-labs/iconic';
import '../../context/ViewContext/ViewContext.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { IconButton } from '../IconButton/IconButton.js';

const InlineSubmitButton = ({ disabled, highlighted, isFocused, isHovered, className, style, emailSubmitButtonInsideInput = false, }) => {
    if (!emailSubmitButtonInsideInput)
        return null;
    return (jsx(IconButton, { "data-testid": 'in_line_submit_button', type: 'submit', className: classNames('inline-submit-button', className, {
            'icon-button--active': isFocused || isHovered,
            'icon-button--has-content': highlighted,
        }), disabled: disabled, style: style, children: jsx(SvgArrowRightBackground, {}) }));
};

export { InlineSubmitButton };
