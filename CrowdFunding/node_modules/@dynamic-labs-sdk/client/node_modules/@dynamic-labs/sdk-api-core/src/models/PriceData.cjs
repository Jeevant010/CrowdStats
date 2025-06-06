'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function PriceDataFromJSON(json) {
    return PriceDataFromJSONTyped(json);
}
function PriceDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nativeTokenUsdPrice': !runtime.exists(json, 'nativeTokenUsdPrice') ? undefined : json['nativeTokenUsdPrice'],
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

exports.PriceDataFromJSON = PriceDataFromJSON;
exports.PriceDataFromJSONTyped = PriceDataFromJSONTyped;
exports.PriceDataToJSON = PriceDataToJSON;
