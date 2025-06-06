'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var CreateEmbeddedWalletSpecificOpts = require('./CreateEmbeddedWalletSpecificOpts.cjs');
var EmbeddedWalletChainEnum = require('./EmbeddedWalletChainEnum.cjs');
var EmbeddedWalletProviderEnum = require('./EmbeddedWalletProviderEnum.cjs');

/* tslint:disable */
function CreateEmbeddedWalletParamsFromJSON(json) {
    return CreateEmbeddedWalletParamsFromJSONTyped(json);
}
function CreateEmbeddedWalletParamsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chains': !runtime.exists(json, 'chains') ? undefined : (json['chains'].map(EmbeddedWalletChainEnum.EmbeddedWalletChainEnumFromJSON)),
        'chain': !runtime.exists(json, 'chain') ? undefined : EmbeddedWalletChainEnum.EmbeddedWalletChainEnumFromJSON(json['chain']),
        'embeddedWalletProvider': EmbeddedWalletProviderEnum.EmbeddedWalletProviderEnumFromJSON(json['embeddedWalletProvider']),
        'embeddedWalletSpecificOpts': !runtime.exists(json, 'embeddedWalletSpecificOpts') ? undefined : CreateEmbeddedWalletSpecificOpts.CreateEmbeddedWalletSpecificOptsFromJSON(json['embeddedWalletSpecificOpts']),
        'isAuthenticatorAttached': !runtime.exists(json, 'isAuthenticatorAttached') ? undefined : json['isAuthenticatorAttached'],
        'passkeyAlias': !runtime.exists(json, 'passkeyAlias') ? undefined : json['passkeyAlias'],
        'sessionPublicKey': !runtime.exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
    };
}
function CreateEmbeddedWalletParamsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chains': value.chains === undefined ? undefined : (value.chains.map(EmbeddedWalletChainEnum.EmbeddedWalletChainEnumToJSON)),
        'chain': EmbeddedWalletChainEnum.EmbeddedWalletChainEnumToJSON(value.chain),
        'embeddedWalletProvider': EmbeddedWalletProviderEnum.EmbeddedWalletProviderEnumToJSON(value.embeddedWalletProvider),
        'embeddedWalletSpecificOpts': CreateEmbeddedWalletSpecificOpts.CreateEmbeddedWalletSpecificOptsToJSON(value.embeddedWalletSpecificOpts),
        'isAuthenticatorAttached': value.isAuthenticatorAttached,
        'passkeyAlias': value.passkeyAlias,
        'sessionPublicKey': value.sessionPublicKey,
    };
}

exports.CreateEmbeddedWalletParamsFromJSON = CreateEmbeddedWalletParamsFromJSON;
exports.CreateEmbeddedWalletParamsFromJSONTyped = CreateEmbeddedWalletParamsFromJSONTyped;
exports.CreateEmbeddedWalletParamsToJSON = CreateEmbeddedWalletParamsToJSON;
