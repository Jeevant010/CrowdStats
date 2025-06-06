'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var exchangeRates = require('../../../../../../data/api/exchangeRates/exchangeRates.cjs');
var usePromise = require('../../../../../../utils/hooks/usePromise/usePromise.cjs');

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
    const { data: exchangeRates$1 } = usePromise.usePromise(exchangeRates.getExchangeRates, {
        initialData: {},
        onResolve: (rates) => onFetch(overrideBalances(rates, tokenBalances)),
    });
    return React.useMemo(() => overrideBalances(exchangeRates$1, tokenBalances), [tokenBalances, exchangeRates$1]);
};

exports.useExchangeRatesForFunding = useExchangeRatesForFunding;
