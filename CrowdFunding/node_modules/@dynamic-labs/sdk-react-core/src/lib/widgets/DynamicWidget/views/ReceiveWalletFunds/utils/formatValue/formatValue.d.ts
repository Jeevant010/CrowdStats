type FormatValueProps = {
    value: string | number | undefined;
    symbol: string | undefined;
    /**
     * When maxDecimals is defined, this being true will display leading zeros up until the maxDecimals case
     */
    withFixedZeros?: boolean;
    /**
     * Rounds off any extra decimals to the maxDecimals value
     */
    maxDecimals?: number;
};
export declare const formatValue: ({ value, symbol, withFixedZeros, maxDecimals, }: FormatValueProps) => string | undefined;
export {};
