import React from 'react';
import type { ThemeVariant } from '../types';
type SocialIconProps = React.SVGProps<SVGSVGElement> & {
    name: string;
    variant?: ThemeVariant;
};
export declare const SocialIcon: ({ name, variant, ...props }: SocialIconProps) => JSX.Element | null;
export {};
