'use client'
import { jsx } from 'react/jsx-runtime';
import { classNames } from '../../../utils/functions/classNames/classNames.js';

const DefaultFooter = ({ hideBorder }) => (jsx("div", { className: classNames('default-footer__footer', {
        'default-footer__footer--hidden': hideBorder,
    }), "data-testid": 'default-footer' }));

export { DefaultFooter };
