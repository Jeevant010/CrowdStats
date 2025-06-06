'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AssetDiff = require('./AssetDiff.cjs');
var AssetExposure = require('./AssetExposure.cjs');
var BlockaidValidation = require('./BlockaidValidation.cjs');
var PriceData = require('./PriceData.cjs');

/* tslint:disable */
function SimulateTransactionResponseFromJSON(json) {
    return SimulateTransactionResponseFromJSONTyped(json);
}
function SimulateTransactionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'inAssets': (json['inAssets'].map(AssetDiff.AssetDiffFromJSON)),
        'outAssets': (json['outAssets'].map(AssetDiff.AssetDiffFromJSON)),
        'counterparties': !runtime.exists(json, 'counterparties') ? undefined : json['counterparties'],
        'priceData': PriceData.PriceDataFromJSON(json['priceData']),
        'showTotalFiat': json['showTotalFiat'],
        'validation': !runtime.exists(json, 'validation') ? undefined : BlockaidValidation.BlockaidValidationFromJSON(json['validation']),
        'assetExposures': !runtime.exists(json, 'assetExposures') ? undefined : (json['assetExposures'].map(AssetExposure.AssetExposureFromJSON)),
    };
}
function SimulateTransactionResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'inAssets': (value.inAssets.map(AssetDiff.AssetDiffToJSON)),
        'outAssets': (value.outAssets.map(AssetDiff.AssetDiffToJSON)),
        'counterparties': value.counterparties,
        'priceData': PriceData.PriceDataToJSON(value.priceData),
        'showTotalFiat': value.showTotalFiat,
        'validation': BlockaidValidation.BlockaidValidationToJSON(value.validation),
        'assetExposures': value.assetExposures === undefined ? undefined : (value.assetExposures.map(AssetExposure.AssetExposureToJSON)),
    };
}

exports.SimulateTransactionResponseFromJSON = SimulateTransactionResponseFromJSON;
exports.SimulateTransactionResponseFromJSONTyped = SimulateTransactionResponseFromJSONTyped;
exports.SimulateTransactionResponseToJSON = SimulateTransactionResponseToJSON;
