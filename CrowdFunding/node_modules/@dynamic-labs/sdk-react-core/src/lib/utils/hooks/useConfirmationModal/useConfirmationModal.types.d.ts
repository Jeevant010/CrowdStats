import { ReactNode } from 'react';
export type ConfirmationModalHookProps = {
    elementId: string;
};
export type ConfirmationModalHookResult<T = unknown, E = unknown> = {
    modal?: ReactNode;
    open: (builder: (resolve: (value: T) => void, reject: (error: E) => void) => ReactNode) => Promise<T>;
};
