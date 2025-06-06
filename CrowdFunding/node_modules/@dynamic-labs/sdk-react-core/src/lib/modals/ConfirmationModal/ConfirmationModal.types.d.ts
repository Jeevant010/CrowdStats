import { PropsWithChildren } from 'react';
export type ConfirmationModalProps = PropsWithChildren<{
    modalId: string;
    closeModal: () => void;
    handleOnModalUnmount: () => void;
    show: boolean;
    zIndex?: number;
}>;
