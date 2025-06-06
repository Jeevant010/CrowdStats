import { ReactElement } from 'react';
import { Iconic } from '@dynamic-labs/iconic';
import { Icon } from '../../shared';
import { ClassStyleProps } from '../../utils/types';
type IconWithSpinnerProps = ClassStyleProps & {
    Icon?: Icon | Iconic | ReactElement | null;
    /** This forces fo render the Icon as an FC even if it does not evaluate to type 'function' */
    treatAsFunctionComponent?: boolean;
    customSpinnerColor?: string;
    iconSize?: number;
    indicator?: 'connected' | 'walletConnect';
    isSpinning?: boolean;
};
export declare const iconRatio: number;
export declare const IconWithSpinner: ({ iconSize, Icon, isSpinning, className, style, indicator, customSpinnerColor, treatAsFunctionComponent, }: IconWithSpinnerProps) => JSX.Element;
export {};
