'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function WalletKeyShareInfoWithEncryptedAccountCredentialAllOfFromJSON(json) {
    return WalletKeyShareInfoWithEncryptedAccountCredentialAllOfFromJSONTyped(json);
}
function WalletKeyShareInfoWithEncryptedAccountCredentialAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'encryptedAccountCredential': !runtime.exists(json, 'encryptedAccountCredential') ? undefined : json['encryptedAccountCredential'],
    };
}
function WalletKeyShareInfoWithEncryptedAccountCredentialAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'encryptedAccountCredential': value.encryptedAccountCredential,
    };
}

exports.WalletKeyShareInfoWithEncryptedAccountCredentialAllOfFromJSON = WalletKeyShareInfoWithEncryptedAccountCredentialAllOfFromJSON;
exports.WalletKeyShareInfoWithEncryptedAccountCredentialAllOfFromJSONTyped = WalletKeyShareInfoWithEncryptedAccountCredentialAllOfFromJSONTyped;
exports.WalletKeyShareInfoWithEncryptedAccountCredentialAllOfToJSON = WalletKeyShareInfoWithEncryptedAccountCredentialAllOfToJSON;
