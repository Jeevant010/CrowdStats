'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var MergeConflicts = require('./MergeConflicts.cjs');
var ProviderEnum = require('./ProviderEnum.cjs');

/* tslint:disable */
function UnprocessableEntityErrorPayloadFromJSON(json) {
    return UnprocessableEntityErrorPayloadFromJSONTyped(json);
}
function UnprocessableEntityErrorPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': !runtime.exists(json, 'email') ? undefined : json['email'],
        'loginProvider': !runtime.exists(json, 'loginProvider') ? undefined : ProviderEnum.ProviderEnumFromJSON(json['loginProvider']),
        'embeddedWalletName': !runtime.exists(json, 'embeddedWalletName') ? undefined : json['embeddedWalletName'],
        'embeddedSocialSigninProvider': !runtime.exists(json, 'embeddedSocialSigninProvider') ? undefined : ProviderEnum.ProviderEnumFromJSON(json['embeddedSocialSigninProvider']),
        'mergeConflicts': !runtime.exists(json, 'mergeConflicts') ? undefined : MergeConflicts.MergeConflictsFromJSON(json['mergeConflicts']),
        'additionalMessages': !runtime.exists(json, 'additionalMessages') ? undefined : json['additionalMessages'],
    };
}
function UnprocessableEntityErrorPayloadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': value.email,
        'loginProvider': ProviderEnum.ProviderEnumToJSON(value.loginProvider),
        'embeddedWalletName': value.embeddedWalletName,
        'embeddedSocialSigninProvider': ProviderEnum.ProviderEnumToJSON(value.embeddedSocialSigninProvider),
        'mergeConflicts': MergeConflicts.MergeConflictsToJSON(value.mergeConflicts),
        'additionalMessages': value.additionalMessages,
    };
}

exports.UnprocessableEntityErrorPayloadFromJSON = UnprocessableEntityErrorPayloadFromJSON;
exports.UnprocessableEntityErrorPayloadFromJSONTyped = UnprocessableEntityErrorPayloadFromJSONTyped;
exports.UnprocessableEntityErrorPayloadToJSON = UnprocessableEntityErrorPayloadToJSON;
