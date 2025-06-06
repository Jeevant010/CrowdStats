'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ExternalWalletFundingDefaultSettings = require('./ExternalWalletFundingDefaultSettings.cjs');

/* tslint:disable */
function FundingExternalWalletsDefaultSettingsFromJSON(json) {
    return FundingExternalWalletsDefaultSettingsFromJSONTyped(json);
}
function FundingExternalWalletsDefaultSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainSettings': !runtime.exists(json, 'chainSettings') ? undefined : (json['chainSettings'].map(ExternalWalletFundingDefaultSettings.ExternalWalletFundingDefaultSettingsFromJSON)),
    };
}
function FundingExternalWalletsDefaultSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chainSettings': value.chainSettings === undefined ? undefined : (value.chainSettings.map(ExternalWalletFundingDefaultSettings.ExternalWalletFundingDefaultSettingsToJSON)),
    };
}

exports.FundingExternalWalletsDefaultSettingsFromJSON = FundingExternalWalletsDefaultSettingsFromJSON;
exports.FundingExternalWalletsDefaultSettingsFromJSONTyped = FundingExternalWalletsDefaultSettingsFromJSONTyped;
exports.FundingExternalWalletsDefaultSettingsToJSON = FundingExternalWalletsDefaultSettingsToJSON;
