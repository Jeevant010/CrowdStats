'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AuthModeEnum = require('./AuthModeEnum.cjs');
var ChainEnum = require('./ChainEnum.cjs');
var WalletProviderEnum = require('./WalletProviderEnum.cjs');

/* tslint:disable */
function ConnectRequestFromJSON(json) {
    return ConnectRequestFromJSONTyped(json);
}
function ConnectRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'chain': ChainEnum.ChainEnumFromJSON(json['chain']),
        'provider': WalletProviderEnum.WalletProviderEnumFromJSON(json['provider']),
        'walletName': json['walletName'],
        'authMode': !runtime.exists(json, 'authMode') ? undefined : AuthModeEnum.AuthModeEnumFromJSON(json['authMode']),
    };
}
function ConnectRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'chain': ChainEnum.ChainEnumToJSON(value.chain),
        'provider': WalletProviderEnum.WalletProviderEnumToJSON(value.provider),
        'walletName': value.walletName,
        'authMode': AuthModeEnum.AuthModeEnumToJSON(value.authMode),
    };
}

exports.ConnectRequestFromJSON = ConnectRequestFromJSON;
exports.ConnectRequestFromJSONTyped = ConnectRequestFromJSONTyped;
exports.ConnectRequestToJSON = ConnectRequestToJSON;
