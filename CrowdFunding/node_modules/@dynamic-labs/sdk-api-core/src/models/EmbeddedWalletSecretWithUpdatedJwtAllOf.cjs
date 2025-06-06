'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var PasswordSourceTypeEnum = require('./PasswordSourceTypeEnum.cjs');

/* tslint:disable */
function EmbeddedWalletSecretWithUpdatedJwtAllOfFromJSON(json) {
    return EmbeddedWalletSecretWithUpdatedJwtAllOfFromJSONTyped(json);
}
function EmbeddedWalletSecretWithUpdatedJwtAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletId': json['walletId'],
        'secret': !runtime.exists(json, 'secret') ? undefined : json['secret'],
        'source': !runtime.exists(json, 'source') ? undefined : PasswordSourceTypeEnum.PasswordSourceTypeEnumFromJSON(json['source']),
    };
}
function EmbeddedWalletSecretWithUpdatedJwtAllOfToJSON(value) {
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

exports.EmbeddedWalletSecretWithUpdatedJwtAllOfFromJSON = EmbeddedWalletSecretWithUpdatedJwtAllOfFromJSON;
exports.EmbeddedWalletSecretWithUpdatedJwtAllOfFromJSONTyped = EmbeddedWalletSecretWithUpdatedJwtAllOfFromJSONTyped;
exports.EmbeddedWalletSecretWithUpdatedJwtAllOfToJSON = EmbeddedWalletSecretWithUpdatedJwtAllOfToJSON;
