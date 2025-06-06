'use client'
import { jsx } from 'react/jsx-runtime';

const Skeleton = ({ count = 1, className, style, container, dataTestId, }) => (jsx("span", { "data-testid": dataTestId !== null && dataTestId !== void 0 ? dataTestId : 'loading-skeleton-container', className: container === null || container === void 0 ? void 0 : container.className, style: container === null || container === void 0 ? void 0 : container.style, children: new Array(count).fill(null).map((_, id) => (jsx("span", { className: `skeleton ${className} `, style: style, "data-testid": 'loading-skeleton', children: "\u200C" }, `skeleton-${id}`))) }));

export { Skeleton };
