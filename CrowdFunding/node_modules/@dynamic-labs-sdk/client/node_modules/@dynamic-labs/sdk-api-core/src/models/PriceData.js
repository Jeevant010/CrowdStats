import { exists } from '../runtime.js';

/* tslint:disable */
function PriceDataFromJSON(json) {
    return PriceDataFromJSONTyped(json);
}
function PriceDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nativeTokenUsdPrice': !exists(json, 'nativeTokenUsdPrice') ? undefined : json['nativeTokenUsdPrice'],
    };
}
function PriceDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nativeTokenUsdPrice': value.nativeTokenUsdPrice,
    };
}

export { PriceDataFromJSON, PriceDataFromJSONTyped, PriceDataToJSON };
