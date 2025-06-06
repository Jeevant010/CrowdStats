import { exists } from '../runtime.js';
import { PasswordSourceTypeEnumFromJSON, PasswordSourceTypeEnumToJSON } from './PasswordSourceTypeEnum.js';

/* tslint:disable */
function EmbeddedWalletSecretFromJSON(json) {
    return EmbeddedWalletSecretFromJSONTyped(json);
}
function EmbeddedWalletSecretFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletId': json['walletId'],
        'secret': json['secret'],
        'source': !exists(json, 'source') ? undefined : PasswordSourceTypeEnumFromJSON(json['source']),
    };
}
function EmbeddedWalletSecretToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'walletId': value.walletId,
        'secret': value.secret,
        'source': PasswordSourceTypeEnumToJSON(value.source),
    };
}

export { EmbeddedWalletSecretFromJSON, EmbeddedWalletSecretFromJSONTyped, EmbeddedWalletSecretToJSON };
