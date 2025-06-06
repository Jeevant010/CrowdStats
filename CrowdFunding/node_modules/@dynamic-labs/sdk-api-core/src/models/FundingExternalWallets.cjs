'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var FundingExternalWalletsDefaultSettings = require('./FundingExternalWalletsDefaultSettings.cjs');
var FundingExternalWalletsMinAmount = require('./FundingExternalWalletsMinAmount.cjs');

/* tslint:disable */
function FundingExternalWalletsFromJSON(json) {
    return FundingExternalWalletsFromJSONTyped(json);
}
function FundingExternalWalletsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'enabled': json['enabled'],
        'minAmount': !runtime.exists(json, 'minAmount') ? undefined : FundingExternalWalletsMinAmount.FundingExternalWalletsMinAmountFromJSON(json['minAmount']),
        'defaultSettings': !runtime.exists(json, 'defaultSettings') ? undefined : FundingExternalWalletsDefaultSettings.FundingExternalWalletsDefaultSettingsFromJSON(json['defaultSettings']),
    };
}
function FundingExternalWalletsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'enabled': value.enabled,
        'minAmount': FundingExternalWalletsMinAmount.FundingExternalWalletsMinAmountToJSON(value.minAmount),
        'defaultSettings': FundingExternalWalletsDefaultSettings.FundingExternalWalletsDefaultSettingsToJSON(value.defaultSettings),
    };
}

exports.FundingExternalWalletsFromJSON = FundingExternalWalletsFromJSON;
exports.FundingExternalWalletsFromJSONTyped = FundingExternalWalletsFromJSONTyped;
exports.FundingExternalWalletsToJSON = FundingExternalWalletsToJSON;
