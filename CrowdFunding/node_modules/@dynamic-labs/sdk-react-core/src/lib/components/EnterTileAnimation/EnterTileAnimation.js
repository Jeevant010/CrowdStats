'use client'
import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const EnterTileAnimation = ({ children, className = '', delay = 0, dataTestId, }) => {
    const style = useMemo(() => ({
        animationDelay: delay,
    }), [delay]);
    return (jsx("div", { "data-testid": dataTestId, className: classNames(className, 'enter-list-tile-animation'), style: style, children: children }));
};

export { EnterTileAnimation };
