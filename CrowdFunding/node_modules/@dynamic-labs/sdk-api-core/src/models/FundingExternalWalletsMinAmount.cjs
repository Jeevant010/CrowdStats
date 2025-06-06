'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function FundingExternalWalletsMinAmountFromJSON(json) {
    return FundingExternalWalletsMinAmountFromJSONTyped(json);
}
function FundingExternalWalletsMinAmountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !runtime.exists(json, 'amount') ? undefined : json['amount'],
        'currency': !runtime.exists(json, 'currency') ? undefined : json['currency'],
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

exports.FundingExternalWalletsMinAmountFromJSON = FundingExternalWalletsMinAmountFromJSON;
exports.FundingExternalWalletsMinAmountFromJSONTyped = FundingExternalWalletsMinAmountFromJSONTyped;
exports.FundingExternalWalletsMinAmountToJSON = FundingExternalWalletsMinAmountToJSON;
