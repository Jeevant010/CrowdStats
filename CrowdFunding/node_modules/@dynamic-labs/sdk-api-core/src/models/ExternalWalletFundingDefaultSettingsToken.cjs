'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ExternalWalletFundingTokenRule = require('./ExternalWalletFundingTokenRule.cjs');

/* tslint:disable */
function ExternalWalletFundingDefaultSettingsTokenFromJSON(json) {
    return ExternalWalletFundingDefaultSettingsTokenFromJSONTyped(json);
}
function ExternalWalletFundingDefaultSettingsTokenFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'value': !runtime.exists(json, 'value') ? undefined : json['value'],
        'rule': !runtime.exists(json, 'rule') ? undefined : ExternalWalletFundingTokenRule.ExternalWalletFundingTokenRuleFromJSON(json['rule']),
    };
}
function ExternalWalletFundingDefaultSettingsTokenToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'value': value.value,
        'rule': ExternalWalletFundingTokenRule.ExternalWalletFundingTokenRuleToJSON(value.rule),
    };
}

exports.ExternalWalletFundingDefaultSettingsTokenFromJSON = ExternalWalletFundingDefaultSettingsTokenFromJSON;
exports.ExternalWalletFundingDefaultSettingsTokenFromJSONTyped = ExternalWalletFundingDefaultSettingsTokenFromJSONTyped;
exports.ExternalWalletFundingDefaultSettingsTokenToJSON = ExternalWalletFundingDefaultSettingsTokenToJSON;
