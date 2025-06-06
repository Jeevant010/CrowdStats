'use client'
import { jsx, jsxs } from 'react/jsx-runtime';
import { Skeleton } from '../Skeleton/Skeleton.js';

const MfaDeviceTileSkeleton = () => (jsx("div", { className: 'mfa-device-skeleton', "data-testid": 'mfa-device-loading', children: jsxs("div", { className: 'mfa-device-skeleton__details', children: [jsx(Skeleton, {}), jsx(Skeleton, {})] }) }));

export { MfaDeviceTileSkeleton };
