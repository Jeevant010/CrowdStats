import { PropsWithChildren } from 'react';
export type ModalComponentProps = PropsWithChildren & {
    handleClose: (e: {
        stopPropagation: VoidFunction;
    }) => void;
    whiteList?: (activeElement: HTMLElement) => boolean;
    withBackdrop?: boolean;
};
export declare const ModalComponent: ({ children, handleClose, withBackdrop, whiteList, }: ModalComponentProps) => JSX.Element;
