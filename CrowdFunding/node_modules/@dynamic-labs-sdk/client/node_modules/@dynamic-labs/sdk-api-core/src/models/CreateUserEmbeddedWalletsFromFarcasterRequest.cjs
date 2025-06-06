'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var EmbeddedWalletChainEnum = require('./EmbeddedWalletChainEnum.cjs');

/* tslint:disable */
function CreateUserEmbeddedWalletsFromFarcasterRequestFromJSON(json) {
    return CreateUserEmbeddedWalletsFromFarcasterRequestFromJSONTyped(json);
}
function CreateUserEmbeddedWalletsFromFarcasterRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': json['email'],
        'fid': json['fid'],
        'chains': (json['chains'].map(EmbeddedWalletChainEnum.EmbeddedWalletChainEnumFromJSON)),
    };
}
function CreateUserEmbeddedWalletsFromFarcasterRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': value.email,
        'fid': value.fid,
        'chains': (value.chains.map(EmbeddedWalletChainEnum.EmbeddedWalletChainEnumToJSON)),
    };
}

exports.CreateUserEmbeddedWalletsFromFarcasterRequestFromJSON = CreateUserEmbeddedWalletsFromFarcasterRequestFromJSON;
exports.CreateUserEmbeddedWalletsFromFarcasterRequestFromJSONTyped = CreateUserEmbeddedWalletsFromFarcasterRequestFromJSONTyped;
exports.CreateUserEmbeddedWalletsFromFarcasterRequestToJSON = CreateUserEmbeddedWalletsFromFarcasterRequestToJSON;
