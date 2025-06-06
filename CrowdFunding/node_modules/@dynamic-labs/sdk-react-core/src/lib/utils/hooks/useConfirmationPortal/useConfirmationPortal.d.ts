import { DynamicError } from '@dynamic-labs/utils';
export type ConfirmationPortalProps<T, E = unknown> = {
    onResolve: (response: T) => void;
    onReject: (error: E | DynamicError) => void;
    defaultErrorMessage?: string;
};
export declare const useConfirmationPortal: <T, E = unknown>({ onResolve, onReject, defaultErrorMessage, }: ConfirmationPortalProps<T, E>) => {
    closeModal: () => void;
    handleOnModalUnmount: () => void;
    onError: (error: E, closePortal?: boolean) => void;
    onSuccess: (response: T, closePortal?: boolean) => void;
    show: boolean;
};
