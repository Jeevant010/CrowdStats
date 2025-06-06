'use client'
import { jsx, jsxs } from 'react/jsx-runtime';
import { TypographyButton } from '../TypographyButton/TypographyButton.js';

const SelectNetworkButton = ({ networkId, networkName, networkIconUrl, onClick, }) => {
    const networkImage = (jsx("img", { alt: networkName, className: 'select-network-button__icon', src: networkIconUrl }));
    return (jsxs(TypographyButton, { dataTestId: 'SelectNetworkButton', onClick: () => onClick(networkId), expanded: true, className: 'select-network-button', children: ["Select", networkImage, networkName, " network"] }));
};

export { SelectNetworkButton };
