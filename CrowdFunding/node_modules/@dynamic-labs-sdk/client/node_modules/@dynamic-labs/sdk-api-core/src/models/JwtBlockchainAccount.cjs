'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var NameServiceData = require('./NameServiceData.cjs');
var WalletProviderEnum = require('./WalletProviderEnum.cjs');

/* tslint:disable */
function JwtBlockchainAccountFromJSON(json) {
    return JwtBlockchainAccountFromJSONTyped(json);
}
function JwtBlockchainAccountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'chain': json['chain'],
        'id': json['id'],
        'nameService': !runtime.exists(json, 'name_service') ? undefined : NameServiceData.NameServiceDataFromJSON(json['name_service']),
        'walletName': json['wallet_name'],
        'walletProvider': WalletProviderEnum.WalletProviderEnumFromJSON(json['wallet_provider']),
    };
}
function JwtBlockchainAccountToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'chain': value.chain,
        'id': value.id,
        'name_service': NameServiceData.NameServiceDataToJSON(value.nameService),
        'wallet_name': value.walletName,
        'wallet_provider': WalletProviderEnum.WalletProviderEnumToJSON(value.walletProvider),
    };
}

exports.JwtBlockchainAccountFromJSON = JwtBlockchainAccountFromJSON;
exports.JwtBlockchainAccountFromJSONTyped = JwtBlockchainAccountFromJSONTyped;
exports.JwtBlockchainAccountToJSON = JwtBlockchainAccountToJSON;
