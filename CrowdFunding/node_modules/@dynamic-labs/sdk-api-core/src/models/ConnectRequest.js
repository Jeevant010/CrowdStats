import { exists } from '../runtime.js';
import { AuthModeEnumFromJSON, AuthModeEnumToJSON } from './AuthModeEnum.js';
import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';
import { WalletProviderEnumFromJSON, WalletProviderEnumToJSON } from './WalletProviderEnum.js';

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
        'chain': ChainEnumFromJSON(json['chain']),
        'provider': WalletProviderEnumFromJSON(json['provider']),
        'walletName': json['walletName'],
        'authMode': !exists(json, 'authMode') ? undefined : AuthModeEnumFromJSON(json['authMode']),
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
        'chain': ChainEnumToJSON(value.chain),
        'provider': WalletProviderEnumToJSON(value.provider),
        'walletName': value.walletName,
        'authMode': AuthModeEnumToJSON(value.authMode),
    };
}

export { ConnectRequestFromJSON, ConnectRequestFromJSONTyped, ConnectRequestToJSON };
