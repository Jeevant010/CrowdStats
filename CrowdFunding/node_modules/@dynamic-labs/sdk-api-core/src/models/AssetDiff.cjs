'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Asset = require('./Asset.cjs');
var AssetTransfer = require('./AssetTransfer.cjs');

/* tslint:disable */
function AssetDiffFromJSON(json) {
    return AssetDiffFromJSONTyped(json);
}
function AssetDiffFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'asset': Asset.AssetFromJSON(json['asset']),
        'transferIn': (json['transferIn'].map(AssetTransfer.AssetTransferFromJSON)),
        'transferOut': (json['transferOut'].map(AssetTransfer.AssetTransferFromJSON)),
    };
}
function AssetDiffToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'asset': Asset.AssetToJSON(value.asset),
        'transferIn': (value.transferIn.map(AssetTransfer.AssetTransferToJSON)),
        'transferOut': (value.transferOut.map(AssetTransfer.AssetTransferToJSON)),
    };
}

exports.AssetDiffFromJSON = AssetDiffFromJSON;
exports.AssetDiffFromJSONTyped = AssetDiffFromJSONTyped;
exports.AssetDiffToJSON = AssetDiffToJSON;
