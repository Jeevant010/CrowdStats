'use client'
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { TextButton } from '../TextButton/TextButton.js';
import { Tooltip } from '../Tooltip/Tooltip.js';
import { TypographyButton } from '../TypographyButton/TypographyButton.js';

const CopyButton = ({ children, className = '', textToCopy, onClick, variant = 'text', copykey, buttonPadding = 'small', buttonVariant = 'primary', buttonClassName = '', startSlot, disabled, }) => {
    const [copied, setCopied] = useState(false);
    const [buttonRef, setButtonRef] = useState(null);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        onClick === null || onClick === void 0 ? void 0 : onClick();
        setTimeout(() => {
            setCopied(false);
        }, 5000);
    };
    return (jsxs(Fragment, { children: [variant === 'text' ? (jsx(TextButton, { className: classNames('copy-button__container', className), onClick: () => copyToClipboard(), onMouseLeave: () => setCopied(false), copykey: copykey, disabled: disabled, children: children })) : (jsx(TypographyButton, { buttonRef: setButtonRef, expanded: true, buttonPadding: buttonPadding, buttonVariant: buttonVariant, buttonClassName: buttonClassName, onClick: () => copyToClipboard(), copykey: copykey, startSlot: startSlot, disabled: disabled, children: children })), jsx(Tooltip, { className: 'copy-button__tooltip', content: copied ? 'Copied' : 'Copy', targetRef: buttonRef })] }));
};

export { CopyButton };
