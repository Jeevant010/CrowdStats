/// <reference types="react" />
import { ErrorBoundaryContextType } from './types';
export declare const ERROR_BOUNDARY_CONTEXT_NOT_FOUND = "ERROR_BOUNDARY_CONTEXT_NOT_FOUND";
export declare const ErrorBoundaryContext: import("react").Context<ErrorBoundaryContextType | null>;
export declare function assertErrorBoundaryContext(value: any): asserts value is ErrorBoundaryContextType;
