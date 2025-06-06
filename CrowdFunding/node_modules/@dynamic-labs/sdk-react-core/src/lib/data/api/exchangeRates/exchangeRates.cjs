'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var dynamicContextProps = require('../../../store/state/dynamicContextProps/dynamicContextProps.cjs');
var api = require('../api.cjs');

const getExchangeRates = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const rates = {};
    const data = yield api.sdkApi().getCurrencyExchangeRates({
        environmentId: dynamicContextProps.getEnvironmentId(),
    });
    data.forEach((currency) => {
        rates[currency.code] = currency.value;
    });
    return rates;
});

exports.getExchangeRates = getExchangeRates;
