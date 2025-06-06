'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function AssetTransferFromJSON(json) {
    return AssetTransferFromJSONTyped(json);
}
function AssetTransferFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'rawValue': !runtime.exists(json, 'rawValue') ? undefined : json['rawValue'],
        'summary': !runtime.exists(json, 'summary') ? undefined : json['summary'],
        'usdPrice': !runtime.exists(json, 'usdPrice') ? undefined : json['usdPrice'],
        'value': !runtime.exists(json, 'value') ? undefined : json['value'],
    };
}
function AssetTransferToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'rawValue': value.rawValue,
        'summary': value.summary,
        'usdPrice': value.usdPrice,
        'value': value.value,
    };
}

exports.AssetTransferFromJSON = AssetTransferFromJSON;
exports.AssetTransferFromJSONTyped = AssetTransferFromJSONTyped;
exports.AssetTransferToJSON = AssetTransferToJSON;
