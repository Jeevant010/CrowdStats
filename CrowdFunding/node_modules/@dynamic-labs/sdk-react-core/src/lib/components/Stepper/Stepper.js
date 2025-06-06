'use client'
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Children } from 'react';
import { Divider } from '../Divider/Divider.js';

const Stepper = ({ children }) => (jsx("div", { className: 'stepper', children: Children.map(children, (step, index) => {
        const divider = index === 0 ? undefined : jsx(Divider, { className: 'stepper__divider' });
        return (jsxs(Fragment, { children: [divider, step] }));
    }) }));

export { Stepper };
