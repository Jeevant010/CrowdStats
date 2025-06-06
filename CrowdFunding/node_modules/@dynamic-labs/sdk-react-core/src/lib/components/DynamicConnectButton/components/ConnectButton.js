'use client'
import { jsx } from 'react/jsx-runtime';
import { TypographyButton } from '../../TypographyButton/TypographyButton.js';
import { classNames } from '../../../utils/functions/classNames/classNames.js';

const ConnectButton = ({ buttonClassName, buttonContainerClassName, onClick, isActive, isLoading, children, copykey, }) => (jsx("div", { className: buttonContainerClassName, children: jsx(TypographyButton, { dataTestId: 'ConnectButton', onClick: onClick, buttonClassName: classNames('connect-button', buttonClassName), loading: isLoading && isActive, disabled: isLoading && isActive, buttonVariant: 'primary', buttonPadding: 'small', typographyProps: {
            weight: 'regular',
        }, copykey: copykey, children: children }) }));

export { ConnectButton };
