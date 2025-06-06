'use client'
import { jsx } from 'react/jsx-runtime';
import { PoweredByDynamic } from '../PoweredByDynamic/PoweredByDynamic.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { useAuthLayoutChecks } from '../../utils/hooks/useAuthLayoutChecks/useAuthLayoutChecks.js';

const DynamicFooter = () => {
    const { shouldHideDynamicFooterSeparator } = useAuthLayoutChecks();
    return (jsx("div", { "data-testid": 'dynamic-footer', className: classNames('dynamic-footer', {
            'dynamic-footer__top-border': !shouldHideDynamicFooterSeparator,
        }), children: jsx(PoweredByDynamic, {}) }));
};

export { DynamicFooter };
