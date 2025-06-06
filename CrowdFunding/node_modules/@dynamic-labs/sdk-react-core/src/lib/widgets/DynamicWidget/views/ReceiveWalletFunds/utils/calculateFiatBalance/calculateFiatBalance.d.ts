import { FundingTokenData } from '../../types';
export declare const calculateFiatBalance: (token: FundingTokenData | undefined, exchangeRates: Record<string, number>) => number | undefined;
