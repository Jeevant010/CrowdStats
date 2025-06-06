import { CustomError } from './CustomError';
import { ErrorCode } from './ErrorCode';
/** Mapping of metamask error codes to dynamic [ErrorCode]s */
export declare const metaMaskErrorMap: Record<string, ErrorCode>;
export declare class MetaMaskError extends CustomError {
    constructor(message?: string, code?: ErrorCode);
    /**
     * Creates a [MetaMaskError] from an unknown error (thrown by MetaMask)
     *
     * @param error - The error to create the [MetaMaskError] from
     * @returns A new [MetaMaskError]
     */
    static fromError(error: unknown): MetaMaskError;
}
