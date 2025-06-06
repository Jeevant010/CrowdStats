'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var PasswordSourceTypeEnum = require('./PasswordSourceTypeEnum.cjs');

/* tslint:disable */
function EmbeddedWalletSecretFromJSON(json) {
    return EmbeddedWalletSecretFromJSONTyped(json);
}
function EmbeddedWalletSecretFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletId': json['walletId'],
        'secret': json['secret'],
        'source': !runtime.exists(json, 'source') ? undefined : PasswordSourceTypeEnum.PasswordSourceTypeEnumFromJSON(json['source']),
    };
}
function EmbeddedWalletSecretToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'walletId': value.walletId,
        'secret': value.secret,
        'source': PasswordSourceTypeEnum.PasswordSourceTypeEnumToJSON(value.source),
    };
}

exports.EmbeddedWalletSecretFromJSON = EmbeddedWalletSecretFromJSON;
exports.EmbeddedWalletSecretFromJSONTyped = EmbeddedWalletSecretFromJSONTyped;
exports.EmbeddedWalletSecretToJSON = EmbeddedWalletSecretToJSON;
