'use client'
import { CustomError } from './CustomError.js';

/**
 * Error thrown when a get address call is cancelled due to being outdated.
 *
 * This error is used specifically in the sdk-react-core to handle cases where
 * a get address promise needs to be discarded without setting an error state.
 * Common use case is when retrying the get address method - the original call
 * is cancelled to allow the SDK to handle the new request cleanly.
 */
class GetAddressCancelledError extends CustomError {
    constructor() {
        super('Get address call was cancelled');
    }
}

export { GetAddressCancelledError };
