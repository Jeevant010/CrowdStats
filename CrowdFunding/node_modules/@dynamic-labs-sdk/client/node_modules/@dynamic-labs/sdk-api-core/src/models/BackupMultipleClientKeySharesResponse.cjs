'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var WalletKeyShareInfo = require('./WalletKeyShareInfo.cjs');

/* tslint:disable */
function BackupMultipleClientKeySharesResponseFromJSON(json) {
    return BackupMultipleClientKeySharesResponseFromJSONTyped(json);
}
function BackupMultipleClientKeySharesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'keyShares': (json['keyShares'].map(WalletKeyShareInfo.WalletKeyShareInfoFromJSON)),
    };
}
function BackupMultipleClientKeySharesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'keyShares': (value.keyShares.map(WalletKeyShareInfo.WalletKeyShareInfoToJSON)),
    };
}

exports.BackupMultipleClientKeySharesResponseFromJSON = BackupMultipleClientKeySharesResponseFromJSON;
exports.BackupMultipleClientKeySharesResponseFromJSONTyped = BackupMultipleClientKeySharesResponseFromJSONTyped;
exports.BackupMultipleClientKeySharesResponseToJSON = BackupMultipleClientKeySharesResponseToJSON;
