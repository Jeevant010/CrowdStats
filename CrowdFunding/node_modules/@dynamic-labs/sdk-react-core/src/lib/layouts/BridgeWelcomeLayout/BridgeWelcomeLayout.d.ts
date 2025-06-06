import { FC, MouseEventHandler, ReactNode } from 'react';
import { CopyKey } from '../../shared';
export type BridgeWelcomeLayoutChainInfo = {
    id: number;
    name: string;
    icon: ReactNode;
};
export type BridgeWelcomeLayoutProps = {
    title: ReactNode;
    body: ReactNode;
    actionButtonText: ReactNode;
    chains?: {
        id: number;
        name: string;
        icon: ReactNode;
    }[];
    onClickClose?: MouseEventHandler<HTMLButtonElement>;
    onClickAction?: MouseEventHandler<HTMLButtonElement>;
} & CopyKey;
export declare const BridgeWelcomeLayout: FC<BridgeWelcomeLayoutProps>;
