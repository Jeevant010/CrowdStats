/**
 * Some wallets may not reject some operations following the EIP-1193 standard.
 * This function normalizes the errors to follow the EIP-1193 standard.
 */
export declare const normalizeRpcError: (err: any) => never;
