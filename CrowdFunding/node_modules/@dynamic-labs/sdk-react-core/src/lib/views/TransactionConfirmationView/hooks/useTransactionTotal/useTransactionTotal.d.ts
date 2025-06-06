type UseTransactionTotalProps = {
    transactionValue?: bigint;
    gasTotalPrice?: bigint;
    isGasSponsored?: boolean;
};
export declare const useTransactionTotal: ({ transactionValue, gasTotalPrice, isGasSponsored, }: UseTransactionTotalProps) => bigint | undefined;
export {};
