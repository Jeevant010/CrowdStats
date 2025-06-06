import { InsufficientFundsError, PasskeyError, TransactionGasCannotBeSponsoredError } from '@dynamic-labs/utils';
export type TransactionError = PasskeyError | {
    reason?: string;
} | InsufficientFundsError | TransactionGasCannotBeSponsoredError;
