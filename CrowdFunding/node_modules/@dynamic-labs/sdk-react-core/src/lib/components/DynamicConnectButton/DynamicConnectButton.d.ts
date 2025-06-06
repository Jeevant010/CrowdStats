import { ReactNode } from 'react';
import { CopyKey } from '../../shared';
type Props = {
    buttonClassName?: string;
    buttonContainerClassName?: string;
    children: ReactNode;
} & CopyKey;
export declare const DynamicConnectButton: ({ buttonContainerClassName, buttonClassName, children, copykey, }: Props) => JSX.Element;
export {};
