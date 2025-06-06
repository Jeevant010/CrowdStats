'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var PasswordSourceTypeEnum = require('./PasswordSourceTypeEnum.cjs');
var SdkUser = require('./SdkUser.cjs');

/* tslint:disable */
function EmbeddedWalletSecretWithUpdatedJwtFromJSON(json) {
    return EmbeddedWalletSecretWithUpdatedJwtFromJSONTyped(json);
}
function EmbeddedWalletSecretWithUpdatedJwtFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mfaToken': !runtime.exists(json, 'mfaToken') ? undefined : json['mfaToken'],
        'jwt': !runtime.exists(json, 'jwt') ? undefined : json['jwt'],
        'user': SdkUser.SdkUserFromJSON(json['user']),
        'minifiedJwt': !runtime.exists(json, 'minifiedJwt') ? undefined : json['minifiedJwt'],
        'expiresAt': json['expiresAt'],
        'walletId': json['walletId'],
        'secret': !runtime.exists(json, 'secret') ? undefined : json['secret'],
        'source': !runtime.exists(json, 'source') ? undefined : PasswordSourceTypeEnum.PasswordSourceTypeEnumFromJSON(json['source']),
    };
}
function EmbeddedWalletSecretWithUpdatedJwtToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mfaToken': value.mfaToken,
        'jwt': value.jwt,
        'user': SdkUser.SdkUserToJSON(value.user),
        'minifiedJwt': value.minifiedJwt,
        'expiresAt': value.expiresAt,
        'walletId': value.walletId,
        'secret': value.secret,
        'source': PasswordSourceTypeEnum.PasswordSourceTypeEnumToJSON(value.source),
    };
}

exports.EmbeddedWalletSecretWithUpdatedJwtFromJSON = EmbeddedWalletSecretWithUpdatedJwtFromJSON;
exports.EmbeddedWalletSecretWithUpdatedJwtFromJSONTyped = EmbeddedWalletSecretWithUpdatedJwtFromJSONTyped;
exports.EmbeddedWalletSecretWithUpdatedJwtToJSON = EmbeddedWalletSecretWithUpdatedJwtToJSON;
