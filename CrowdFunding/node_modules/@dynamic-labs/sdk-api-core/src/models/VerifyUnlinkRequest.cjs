'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function VerifyUnlinkRequestFromJSON(json) {
    return VerifyUnlinkRequestFromJSONTyped(json);
}
function VerifyUnlinkRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletId': !runtime.exists(json, 'walletId') ? undefined : json['walletId'],
        'verifiedCrentialId': !runtime.exists(json, 'verifiedCrentialId') ? undefined : json['verifiedCrentialId'],
        'primaryWalletId': !runtime.exists(json, 'primaryWalletId') ? undefined : json['primaryWalletId'],
    };
}
function VerifyUnlinkRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'walletId': value.walletId,
        'verifiedCrentialId': value.verifiedCrentialId,
        'primaryWalletId': value.primaryWalletId,
    };
}

exports.VerifyUnlinkRequestFromJSON = VerifyUnlinkRequestFromJSON;
exports.VerifyUnlinkRequestFromJSONTyped = VerifyUnlinkRequestFromJSONTyped;
exports.VerifyUnlinkRequestToJSON = VerifyUnlinkRequestToJSON;
