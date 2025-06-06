'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var EmbeddedWalletChainEnum = require('./EmbeddedWalletChainEnum.cjs');
var ProviderEnum = require('./ProviderEnum.cjs');
var SmsCountryCode = require('./SmsCountryCode.cjs');
var UserIdentifierTypeEnum = require('./UserIdentifierTypeEnum.cjs');

/* tslint:disable */
function CreateUserEmbeddedWalletsRequestFromJSON(json) {
    return CreateUserEmbeddedWalletsRequestFromJSONTyped(json);
}
function CreateUserEmbeddedWalletsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'identifier': json['identifier'],
        'type': UserIdentifierTypeEnum.UserIdentifierTypeEnumFromJSON(json['type']),
        'chains': !runtime.exists(json, 'chains') ? undefined : (json['chains'].map(EmbeddedWalletChainEnum.EmbeddedWalletChainEnumFromJSON)),
        'chain': !runtime.exists(json, 'chain') ? undefined : EmbeddedWalletChainEnum.EmbeddedWalletChainEnumFromJSON(json['chain']),
        'smsCountryCode': !runtime.exists(json, 'smsCountryCode') ? undefined : SmsCountryCode.SmsCountryCodeFromJSON(json['smsCountryCode']),
        'socialProvider': !runtime.exists(json, 'socialProvider') ? undefined : ProviderEnum.ProviderEnumFromJSON(json['socialProvider']),
    };
}
function CreateUserEmbeddedWalletsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'identifier': value.identifier,
        'type': UserIdentifierTypeEnum.UserIdentifierTypeEnumToJSON(value.type),
        'chains': value.chains === undefined ? undefined : (value.chains.map(EmbeddedWalletChainEnum.EmbeddedWalletChainEnumToJSON)),
        'chain': EmbeddedWalletChainEnum.EmbeddedWalletChainEnumToJSON(value.chain),
        'smsCountryCode': SmsCountryCode.SmsCountryCodeToJSON(value.smsCountryCode),
        'socialProvider': ProviderEnum.ProviderEnumToJSON(value.socialProvider),
    };
}

exports.CreateUserEmbeddedWalletsRequestFromJSON = CreateUserEmbeddedWalletsRequestFromJSON;
exports.CreateUserEmbeddedWalletsRequestFromJSONTyped = CreateUserEmbeddedWalletsRequestFromJSONTyped;
exports.CreateUserEmbeddedWalletsRequestToJSON = CreateUserEmbeddedWalletsRequestToJSON;
