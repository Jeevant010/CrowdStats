import { exists } from '../runtime.js';

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
        'denom': !exists(json, 'denom') ? undefined : json['denom'],
        'iconUrl': !exists(json, 'iconUrl') ? undefined : json['iconUrl'],
        'pricingProviderTokenId': !exists(json, 'pricingProviderTokenId') ? undefined : json['pricingProviderTokenId'],
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

export { NativeCurrencyFromJSON, NativeCurrencyFromJSONTyped, NativeCurrencyToJSON };
