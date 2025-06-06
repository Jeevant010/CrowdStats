'use client'
import { useMemo } from 'react';
import { getExchangeRates } from '../../../../../../data/api/exchangeRates/exchangeRates.js';
import { usePromise } from '../../../../../../utils/hooks/usePromise/usePromise.js';

const overrideBalances = (exchangeRates, tokenBalances) => {
    const updatedExchangeRates = Object.assign({}, exchangeRates);
    if (tokenBalances === null || tokenBalances === void 0 ? void 0 : tokenBalances.length) {
        tokenBalances.forEach(({ symbol, price }) => {
            if (price) {
                updatedExchangeRates[symbol] = price;
            }
        });
    }
    // Fix stablecoin exchange rates for better UX
    updatedExchangeRates['USDC'] = 1;
    updatedExchangeRates['USDT'] = 1;
    return updatedExchangeRates;
};
const useExchangeRatesForFunding = ({ onFetch, tokenBalances, }) => {
    const { data: exchangeRates } = usePromise(getExchangeRates, {
        initialData: {},
        onResolve: (rates) => onFetch(overrideBalances(rates, tokenBalances)),
    });
    return useMemo(() => overrideBalances(exchangeRates, tokenBalances), [tokenBalances, exchangeRates]);
};

export { useExchangeRatesForFunding };
