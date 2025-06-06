import { exists } from '../runtime.js';
import { NameServiceFromJSON, NameServiceToJSON } from './NameService.js';
import { NativeCurrencyFromJSON, NativeCurrencyToJSON } from './NativeCurrency.js';

/* tslint:disable */
function NetworkConfigurationFromJSON(json) {
    return NetworkConfigurationFromJSONTyped(json);
}
function NetworkConfigurationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'lcdUrl': !exists(json, 'lcdUrl') ? undefined : json['lcdUrl'],
        'chainName': !exists(json, 'chainName') ? undefined : json['chainName'],
        'key': !exists(json, 'key') ? undefined : json['key'],
        'name': json['name'],
        'shortName': json['shortName'],
        'isTestnet': !exists(json, 'isTestnet') ? undefined : json['isTestnet'],
        'chain': json['chain'],
        'chainId': json['chainId'],
        'nameService': !exists(json, 'nameService') ? undefined : NameServiceFromJSON(json['nameService']),
        'networkId': json['networkId'],
        'iconUrls': json['iconUrls'],
        'nativeCurrency': NativeCurrencyFromJSON(json['nativeCurrency']),
        'rpcUrls': json['rpcUrls'],
        'privateCustomerRpcUrls': !exists(json, 'privateCustomerRpcUrls') ? undefined : json['privateCustomerRpcUrls'],
        'blockExplorerUrls': json['blockExplorerUrls'],
        'vanityName': !exists(json, 'vanityName') ? undefined : json['vanityName'],
        'bech32Prefix': !exists(json, 'bech32Prefix') ? undefined : json['bech32Prefix'],
        'genesisHash': !exists(json, 'genesisHash') ? undefined : json['genesisHash'],
        'cluster': !exists(json, 'cluster') ? undefined : json['cluster'],
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
        'nameService': NameServiceToJSON(value.nameService),
        'networkId': value.networkId,
        'iconUrls': value.iconUrls,
        'nativeCurrency': NativeCurrencyToJSON(value.nativeCurrency),
        'rpcUrls': value.rpcUrls,
        'privateCustomerRpcUrls': value.privateCustomerRpcUrls,
        'blockExplorerUrls': value.blockExplorerUrls,
        'vanityName': value.vanityName,
        'bech32Prefix': value.bech32Prefix,
        'genesisHash': value.genesisHash,
        'cluster': value.cluster,
    };
}

export { NetworkConfigurationFromJSON, NetworkConfigurationFromJSONTyped, NetworkConfigurationToJSON };
