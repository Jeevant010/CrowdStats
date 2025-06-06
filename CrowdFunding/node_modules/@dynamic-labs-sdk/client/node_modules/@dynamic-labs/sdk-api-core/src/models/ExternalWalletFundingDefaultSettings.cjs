'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ChainEnum = require('./ChainEnum.cjs');
var ExternalWalletFundingDefaultSettingsToken = require('./ExternalWalletFundingDefaultSettingsToken.cjs');

/* tslint:disable */
function ExternalWalletFundingDefaultSettingsFromJSON(json) {
    return ExternalWalletFundingDefaultSettingsFromJSONTyped(json);
}
function ExternalWalletFundingDefaultSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chain': !runtime.exists(json, 'chain') ? undefined : ChainEnum.ChainEnumFromJSON(json['chain']),
        'token': !runtime.exists(json, 'token') ? undefined : ExternalWalletFundingDefaultSettingsToken.ExternalWalletFundingDefaultSettingsTokenFromJSON(json['token']),
    };
}
function ExternalWalletFundingDefaultSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chain': ChainEnum.ChainEnumToJSON(value.chain),
        'token': ExternalWalletFundingDefaultSettingsToken.ExternalWalletFundingDefaultSettingsTokenToJSON(value.token),
    };
}

exports.ExternalWalletFundingDefaultSettingsFromJSON = ExternalWalletFundingDefaultSettingsFromJSON;
exports.ExternalWalletFundingDefaultSettingsFromJSONTyped = ExternalWalletFundingDefaultSettingsFromJSONTyped;
exports.ExternalWalletFundingDefaultSettingsToJSON = ExternalWalletFundingDefaultSettingsToJSON;
