import { exists } from '../runtime.js';
import { NameServiceDataFromJSON, NameServiceDataToJSON } from './NameServiceData.js';
import { WalletProviderEnumFromJSON, WalletProviderEnumToJSON } from './WalletProviderEnum.js';

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
        'nameService': !exists(json, 'name_service') ? undefined : NameServiceDataFromJSON(json['name_service']),
        'walletName': json['wallet_name'],
        'walletProvider': WalletProviderEnumFromJSON(json['wallet_provider']),
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
        'name_service': NameServiceDataToJSON(value.nameService),
        'wallet_name': value.walletName,
        'wallet_provider': WalletProviderEnumToJSON(value.walletProvider),
    };
}

export { JwtBlockchainAccountFromJSON, JwtBlockchainAccountFromJSONTyped, JwtBlockchainAccountToJSON };
