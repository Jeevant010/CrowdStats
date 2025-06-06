import { FC, ReactElement } from 'react';
export type IconColor = 'text-primary' | 'text-secondary' | 'text-tertiary' | 'text-error' | 'brand-primary' | 'success-1';
export type IconSize = 'xsmall' | 'small' | 'mini' | 'medium' | 'mlarge' | 'large';
export type IconProps = {
    children: ReactElement;
    className?: string;
    color?: IconColor;
    size?: IconSize;
};
export type IconComponent = FC<IconProps>;
export declare const Icon: IconComponent;
