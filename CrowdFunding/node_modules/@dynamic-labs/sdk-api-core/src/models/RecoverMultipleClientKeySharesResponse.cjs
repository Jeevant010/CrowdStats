'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var WalletKeyShareInfoWithEncryptedAccountCredential = require('./WalletKeyShareInfoWithEncryptedAccountCredential.cjs');

/* tslint:disable */
function RecoverMultipleClientKeySharesResponseFromJSON(json) {
    return RecoverMultipleClientKeySharesResponseFromJSONTyped(json);
}
function RecoverMultipleClientKeySharesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'keyShares': (json['keyShares'].map(WalletKeyShareInfoWithEncryptedAccountCredential.WalletKeyShareInfoWithEncryptedAccountCredentialFromJSON)),
    };
}
function RecoverMultipleClientKeySharesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'keyShares': (value.keyShares.map(WalletKeyShareInfoWithEncryptedAccountCredential.WalletKeyShareInfoWithEncryptedAccountCredentialToJSON)),
    };
}

exports.RecoverMultipleClientKeySharesResponseFromJSON = RecoverMultipleClientKeySharesResponseFromJSON;
exports.RecoverMultipleClientKeySharesResponseFromJSONTyped = RecoverMultipleClientKeySharesResponseFromJSONTyped;
exports.RecoverMultipleClientKeySharesResponseToJSON = RecoverMultipleClientKeySharesResponseToJSON;
