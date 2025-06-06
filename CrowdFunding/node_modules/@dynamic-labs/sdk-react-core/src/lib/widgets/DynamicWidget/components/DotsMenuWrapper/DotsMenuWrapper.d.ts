import { ReactNode } from 'react';
type Props = {
    alignment?: 'top' | 'bottom';
    children: ReactNode;
    content: ReactNode;
    onClose: VoidFunction;
    showMenu: boolean;
    title?: ReactNode;
};
export declare const DotsMenuWrapper: ({ children, onClose, content, showMenu, title, alignment, }: Props) => JSX.Element;
export {};
