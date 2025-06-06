'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { getEnvironmentId } from '../../../store/state/dynamicContextProps/dynamicContextProps.js';
import { sdkApi } from '../api.js';

const getExchangeRates = () => __awaiter(void 0, void 0, void 0, function* () {
    const rates = {};
    const data = yield sdkApi().getCurrencyExchangeRates({
        environmentId: getEnvironmentId(),
    });
    data.forEach((currency) => {
        rates[currency.code] = currency.value;
    });
    return rates;
});

export { getExchangeRates };
