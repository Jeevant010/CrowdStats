'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ThresholdSignatureScheme = require('./ThresholdSignatureScheme.cjs');
var WalletKeyShareInfo = require('./WalletKeyShareInfo.cjs');

/* tslint:disable */
function WaasWalletPropertiesFromJSON(json) {
    return WaasWalletPropertiesFromJSONTyped(json);
}
function WaasWalletPropertiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'keyShares': !runtime.exists(json, 'keyShares') ? undefined : (json['keyShares'].map(WalletKeyShareInfo.WalletKeyShareInfoFromJSON)),
        'thresholdSignatureScheme': !runtime.exists(json, 'thresholdSignatureScheme') ? undefined : ThresholdSignatureScheme.ThresholdSignatureSchemeFromJSON(json['thresholdSignatureScheme']),
        'derivationPath': !runtime.exists(json, 'derivationPath') ? undefined : json['derivationPath'],
    };
}
function WaasWalletPropertiesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'keyShares': value.keyShares === undefined ? undefined : (value.keyShares.map(WalletKeyShareInfo.WalletKeyShareInfoToJSON)),
        'thresholdSignatureScheme': ThresholdSignatureScheme.ThresholdSignatureSchemeToJSON(value.thresholdSignatureScheme),
        'derivationPath': value.derivationPath,
    };
}

exports.WaasWalletPropertiesFromJSON = WaasWalletPropertiesFromJSON;
exports.WaasWalletPropertiesFromJSONTyped = WaasWalletPropertiesFromJSONTyped;
exports.WaasWalletPropertiesToJSON = WaasWalletPropertiesToJSON;
