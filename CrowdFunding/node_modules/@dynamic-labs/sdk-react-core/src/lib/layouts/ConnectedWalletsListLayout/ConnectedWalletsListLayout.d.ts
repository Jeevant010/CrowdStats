import { FC, MouseEventHandler, PropsWithChildren, ReactNode } from 'react';
import { CopyKey } from '../../shared';
export type ConnectedWalletsListLayoutProps = {
    title: ReactNode;
    body?: ReactNode;
    onClickClose?: MouseEventHandler<HTMLButtonElement>;
    onClickBack?: MouseEventHandler<HTMLButtonElement>;
    onClickAction?: MouseEventHandler<HTMLButtonElement>;
    actionButtonText?: ReactNode;
} & CopyKey;
export declare const ConnectedWalletsListLayout: FC<PropsWithChildren<ConnectedWalletsListLayoutProps>>;
