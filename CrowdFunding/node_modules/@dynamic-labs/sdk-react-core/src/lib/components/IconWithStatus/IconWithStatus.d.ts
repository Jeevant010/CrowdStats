/// <reference types="react" />
import { Icon } from '../../shared';
type Props = {
    Icon: Icon | string;
    InnerIcon?: Icon;
    containerClassName?: string;
    iconSize?: number;
    variant?: 'green' | 'red' | 'yellow';
};
export declare const IconWithStatus: ({ Icon, InnerIcon, containerClassName, iconSize, variant, }: Props) => JSX.Element;
export {};
