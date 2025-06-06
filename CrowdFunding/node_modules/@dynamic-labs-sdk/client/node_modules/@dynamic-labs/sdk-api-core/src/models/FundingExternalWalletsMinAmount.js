import { exists } from '../runtime.js';

/* tslint:disable */
function FundingExternalWalletsMinAmountFromJSON(json) {
    return FundingExternalWalletsMinAmountFromJSONTyped(json);
}
function FundingExternalWalletsMinAmountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
    };
}
function FundingExternalWalletsMinAmountToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'currency': value.currency,
    };
}

export { FundingExternalWalletsMinAmountFromJSON, FundingExternalWalletsMinAmountFromJSONTyped, FundingExternalWalletsMinAmountToJSON };
