import { FundingTokenData } from '../../types';
type UseExchangeRatesForFundingProps = {
    onFetch: (exchangeRates: Record<string, number>) => void;
    tokenBalances: FundingTokenData[];
};
export declare const useExchangeRatesForFunding: ({ onFetch, tokenBalances, }: UseExchangeRatesForFundingProps) => {
    [x: string]: number;
};
export {};
