import { ReactNode } from 'react';
import { CopyKey } from '../../shared';
type Variant = 'error' | 'info' | 'success';
type Props = {
    children: ReactNode;
    className?: string;
    isMultiWalletError?: boolean;
    variant?: Variant;
    withIcon?: boolean;
};
export declare const ErrorContainer: ({ children, className, isMultiWalletError, withIcon, variant, copykey, }: Props & CopyKey) => JSX.Element;
export {};
