'use client'
import { jsx, jsxs } from 'react/jsx-runtime';

const ListTileAnimatedTrailing = ({ hoverElement, children }) => (jsx("div", { children: jsxs("div", { className: 'list-tile-animated-trailing', children: [jsx("div", { className: 'list-tile-animated-trailing__child', children: children }), jsx("div", { className: 'list-tile-animated-trailing__hover-element', children: hoverElement })] }) }));

export { ListTileAnimatedTrailing };
