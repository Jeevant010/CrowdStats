type TokenAmount = {
    token: string;
    value: string;
};
export declare const respectsMinimum: (amount: TokenAmount, minimum: TokenAmount | undefined, exchangeRates: Record<string, number>) => boolean;
export {};
