'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function AssetExposureSpenderToInfoFromJSON(json) {
    return AssetExposureSpenderToInfoFromJSONTyped(json);
}
function AssetExposureSpenderToInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': json['amount'],
        'spenderAlias': !runtime.exists(json, 'spenderAlias') ? undefined : json['spenderAlias'],
        'usdValue': !runtime.exists(json, 'usdValue') ? undefined : json['usdValue'],
    };
}
function AssetExposureSpenderToInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'spenderAlias': value.spenderAlias,
        'usdValue': value.usdValue,
    };
}

exports.AssetExposureSpenderToInfoFromJSON = AssetExposureSpenderToInfoFromJSON;
exports.AssetExposureSpenderToInfoFromJSONTyped = AssetExposureSpenderToInfoFromJSONTyped;
exports.AssetExposureSpenderToInfoToJSON = AssetExposureSpenderToInfoToJSON;
