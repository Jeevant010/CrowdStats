'use client'
import { jsxs, jsx } from 'react/jsx-runtime';
import { Icon } from '../../../../../components/Icon/Icon.js';
import 'react';
import { ReactComponent as SvgChevronRight } from '../../../../../shared/assets/chevron-right.js';
import '@dynamic-labs/iconic';
import '../../../../../context/ViewContext/ViewContext.js';

const MakeTrailing = ({ showChevron, previewIcons, }) => {
    if (!showChevron && !previewIcons.length) {
        return null;
    }
    return (jsxs("div", { className: 'choose-wallet-funding-method__options__option__trailing', children: [previewIcons.length > 0 && (jsx("div", { "data-testid": 'preview-icons', className: 'choose-wallet-funding-method__options__option__trailing__preview-icons', children: previewIcons.map((icon) => icon) })), showChevron && (jsx(Icon, { size: 'small', color: 'text-tertiary', children: jsx(SvgChevronRight, { "data-testid": 'chevron-icon' }) }))] }));
};

export { MakeTrailing };
