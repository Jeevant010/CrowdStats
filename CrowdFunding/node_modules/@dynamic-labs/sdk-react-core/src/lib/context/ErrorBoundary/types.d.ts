import { ErrorInfo, PropsWithChildren } from 'react';
export type ErrorBoundaryProps = PropsWithChildren<{
    onError?: (error: Error, info: ErrorInfo) => void;
}>;
export type ErrorBoundaryState = {
    hasError: boolean;
    error: Error | null;
};
export type ErrorBoundaryContextType = {
    hasError: boolean;
    error: any;
    isDynamicSdkError: boolean;
};
