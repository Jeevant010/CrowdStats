'use client'
import { jsx } from 'react/jsx-runtime';
import { IconWithSpinner } from '../IconWithSpinner/IconWithSpinner.js';

const LoadingQrCode = ({ Icon, logoSize }) => (jsx("div", { className: 'qrcode__container qrcode', "data-testid": 'loading-qrcode', children: jsx(IconWithSpinner, { Icon: Icon, iconSize: logoSize, isSpinning: true, className: 'qrcode__icon' }) }));

export { LoadingQrCode };
