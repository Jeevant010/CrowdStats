'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function NativeCurrencyFromJSON(json) {
    return NativeCurrencyFromJSONTyped(json);
}
function NativeCurrencyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'decimals': json['decimals'],
        'name': json['name'],
        'symbol': json['symbol'],
        'denom': !runtime.exists(json, 'denom') ? undefined : json['denom'],
        'iconUrl': !runtime.exists(json, 'iconUrl') ? undefined : json['iconUrl'],
        'pricingProviderTokenId': !runtime.exists(json, 'pricingProviderTokenId') ? undefined : json['pricingProviderTokenId'],
    };
}
function NativeCurrencyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'decimals': value.decimals,
        'name': value.name,
        'symbol': value.symbol,
        'denom': value.denom,
        'iconUrl': value.iconUrl,
        'pricingProviderTokenId': value.pricingProviderTokenId,
    };
}

exports.NativeCurrencyFromJSON = NativeCurrencyFromJSON;
exports.NativeCurrencyFromJSONTyped = NativeCurrencyFromJSONTyped;
exports.NativeCurrencyToJSON = NativeCurrencyToJSON;
