'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var NameService = require('./NameService.cjs');
var NativeCurrency = require('./NativeCurrency.cjs');

/* tslint:disable */
function NetworkConfigurationFromJSON(json) {
    return NetworkConfigurationFromJSONTyped(json);
}
function NetworkConfigurationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'lcdUrl': !runtime.exists(json, 'lcdUrl') ? undefined : json['lcdUrl'],
        'chainName': !runtime.exists(json, 'chainName') ? undefined : json['chainName'],
        'key': !runtime.exists(json, 'key') ? undefined : json['key'],
        'name': json['name'],
        'shortName': json['shortName'],
        'isTestnet': !runtime.exists(json, 'isTestnet') ? undefined : json['isTestnet'],
        'chain': json['chain'],
        'chainId': json['chainId'],
        'nameService': !runtime.exists(json, 'nameService') ? undefined : NameService.NameServiceFromJSON(json['nameService']),
        'networkId': json['networkId'],
        'iconUrls': json['iconUrls'],
        'nativeCurrency': NativeCurrency.NativeCurrencyFromJSON(json['nativeCurrency']),
        'rpcUrls': json['rpcUrls'],
        'privateCustomerRpcUrls': !runtime.exists(json, 'privateCustomerRpcUrls') ? undefined : json['privateCustomerRpcUrls'],
        'blockExplorerUrls': json['blockExplorerUrls'],
        'vanityName': !runtime.exists(json, 'vanityName') ? undefined : json['vanityName'],
        'bech32Prefix': !runtime.exists(json, 'bech32Prefix') ? undefined : json['bech32Prefix'],
        'genesisHash': !runtime.exists(json, 'genesisHash') ? undefined : json['genesisHash'],
        'cluster': !runtime.exists(json, 'cluster') ? undefined : json['cluster'],
    };
}
function NetworkConfigurationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'lcdUrl': value.lcdUrl,
        'chainName': value.chainName,
        'key': value.key,
        'name': value.name,
        'shortName': value.shortName,
        'isTestnet': value.isTestnet,
        'chain': value.chain,
        'chainId': value.chainId,
        'nameService': NameService.NameServiceToJSON(value.nameService),
        'networkId': value.networkId,
        'iconUrls': value.iconUrls,
        'nativeCurrency': NativeCurrency.NativeCurrencyToJSON(value.nativeCurrency),
        'rpcUrls': value.rpcUrls,
        'privateCustomerRpcUrls': value.privateCustomerRpcUrls,
        'blockExplorerUrls': value.blockExplorerUrls,
        'vanityName': value.vanityName,
        'bech32Prefix': value.bech32Prefix,
        'genesisHash': value.genesisHash,
        'cluster': value.cluster,
    };
}

exports.NetworkConfigurationFromJSON = NetworkConfigurationFromJSON;
exports.NetworkConfigurationFromJSONTyped = NetworkConfigurationFromJSONTyped;
exports.NetworkConfigurationToJSON = NetworkConfigurationToJSON;
