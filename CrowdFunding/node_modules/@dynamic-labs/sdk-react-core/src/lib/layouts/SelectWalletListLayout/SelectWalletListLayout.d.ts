import { FC, MouseEventHandler, PropsWithChildren, ReactNode } from 'react';
type SelectWalletListLayoutProps = {
    title: ReactNode;
    onClickClose?: MouseEventHandler<HTMLButtonElement>;
    onClickBack?: MouseEventHandler<HTMLButtonElement>;
};
export declare const SelectWalletListLayout: FC<PropsWithChildren<SelectWalletListLayoutProps>>;
export {};
