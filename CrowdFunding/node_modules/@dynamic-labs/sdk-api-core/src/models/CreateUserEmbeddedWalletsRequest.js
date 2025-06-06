import { exists } from '../runtime.js';
import { EmbeddedWalletChainEnumFromJSON, EmbeddedWalletChainEnumToJSON } from './EmbeddedWalletChainEnum.js';
import { ProviderEnumFromJSON, ProviderEnumToJSON } from './ProviderEnum.js';
import { SmsCountryCodeFromJSON, SmsCountryCodeToJSON } from './SmsCountryCode.js';
import { UserIdentifierTypeEnumFromJSON, UserIdentifierTypeEnumToJSON } from './UserIdentifierTypeEnum.js';

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
        'type': UserIdentifierTypeEnumFromJSON(json['type']),
        'chains': !exists(json, 'chains') ? undefined : (json['chains'].map(EmbeddedWalletChainEnumFromJSON)),
        'chain': !exists(json, 'chain') ? undefined : EmbeddedWalletChainEnumFromJSON(json['chain']),
        'smsCountryCode': !exists(json, 'smsCountryCode') ? undefined : SmsCountryCodeFromJSON(json['smsCountryCode']),
        'socialProvider': !exists(json, 'socialProvider') ? undefined : ProviderEnumFromJSON(json['socialProvider']),
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
        'type': UserIdentifierTypeEnumToJSON(value.type),
        'chains': value.chains === undefined ? undefined : (value.chains.map(EmbeddedWalletChainEnumToJSON)),
        'chain': EmbeddedWalletChainEnumToJSON(value.chain),
        'smsCountryCode': SmsCountryCodeToJSON(value.smsCountryCode),
        'socialProvider': ProviderEnumToJSON(value.socialProvider),
    };
}

export { CreateUserEmbeddedWalletsRequestFromJSON, CreateUserEmbeddedWalletsRequestFromJSONTyped, CreateUserEmbeddedWalletsRequestToJSON };
