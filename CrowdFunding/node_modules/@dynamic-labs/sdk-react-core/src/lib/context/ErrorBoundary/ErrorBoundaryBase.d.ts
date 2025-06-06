import { Component, PropsWithChildren } from 'react';
import { ErrorBoundaryState } from './types';
import { ErrorBoundaryContext } from './ErrorBoundaryContext';
export declare abstract class ErrorBoundaryBase extends Component<PropsWithChildren<any>, ErrorBoundaryState> {
    static contextType: import("react").Context<import("./types").ErrorBoundaryContextType | null>;
    context: React.ContextType<typeof ErrorBoundaryContext>;
    static getDerivedStateFromError(error: Error): {
        error: Error;
        hasError: boolean;
    };
    renderOrError<T>(children: T, { isDynamicSdkError }: {
        isDynamicSdkError: boolean;
    }): T | JSX.Element;
}
