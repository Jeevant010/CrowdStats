'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var Asset = require('./Asset.cjs');
var AssetExposureSpenderToInfo = require('./AssetExposureSpenderToInfo.cjs');

/* tslint:disable */
function AssetExposureFromJSON(json) {
    return AssetExposureFromJSONTyped(json);
}
function AssetExposureFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'asset': Asset.AssetFromJSON(json['asset']),
        'spenderToInfo': (runtime.mapValues(json['spenderToInfo'], AssetExposureSpenderToInfo.AssetExposureSpenderToInfoFromJSON)),
    };
}
function AssetExposureToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'asset': Asset.AssetToJSON(value.asset),
        'spenderToInfo': (runtime.mapValues(value.spenderToInfo, AssetExposureSpenderToInfo.AssetExposureSpenderToInfoToJSON)),
    };
}

exports.AssetExposureFromJSON = AssetExposureFromJSON;
exports.AssetExposureFromJSONTyped = AssetExposureFromJSONTyped;
exports.AssetExposureToJSON = AssetExposureToJSON;
