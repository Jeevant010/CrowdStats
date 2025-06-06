import { exists } from '../runtime.js';
import { PasswordSourceTypeEnumFromJSON, PasswordSourceTypeEnumToJSON } from './PasswordSourceTypeEnum.js';

/* tslint:disable */
function EmbeddedWalletSecretWithUpdatedJwtAllOfFromJSON(json) {
    return EmbeddedWalletSecretWithUpdatedJwtAllOfFromJSONTyped(json);
}
function EmbeddedWalletSecretWithUpdatedJwtAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletId': json['walletId'],
        'secret': !exists(json, 'secret') ? undefined : json['secret'],
        'source': !exists(json, 'source') ? undefined : PasswordSourceTypeEnumFromJSON(json['source']),
    };
}
function EmbeddedWalletSecretWithUpdatedJwtAllOfToJSON(value) {
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

export { EmbeddedWalletSecretWithUpdatedJwtAllOfFromJSON, EmbeddedWalletSecretWithUpdatedJwtAllOfFromJSONTyped, EmbeddedWalletSecretWithUpdatedJwtAllOfToJSON };
