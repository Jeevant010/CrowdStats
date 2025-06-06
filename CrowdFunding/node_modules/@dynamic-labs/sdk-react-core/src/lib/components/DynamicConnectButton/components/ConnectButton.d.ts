import { FC, PropsWithChildren } from 'react';
import { CopyKey } from '../../../shared';
export type ConnectButtonProps = {
    buttonClassName?: string;
    buttonContainerClassName?: string;
    isLoading?: boolean;
    isActive?: boolean;
    onClick?: () => void;
} & CopyKey;
export declare const ConnectButton: FC<PropsWithChildren<ConnectButtonProps>>;
