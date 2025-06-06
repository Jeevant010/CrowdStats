/// <reference types="react" />
import { Wallet } from '../../../../..';
type Props = {
    wallet: Wallet;
    className?: string;
    network: number | string | undefined;
    variant?: 'body_normal' | 'numbers_display';
};
export declare const Balance: ({ wallet, network, className, variant, }: Props) => JSX.Element | null;
export {};
