/**
 * Unformat a transaction request
 * This is used to convert the transaction the RPC transporter receives from
 * an eth_sendTransaction call to a format that viem account accepts.
 * This reverts what viem is doing internally with the format function.
 * https://github.com/wagmi-dev/viem/blob/0977829160effbe7dac5a69f43d263605544fa19/src/actions/wallet/sendTransaction.ts#L206
 */
export declare const unFormatTransaction: (transactionRequest: any) => any;
