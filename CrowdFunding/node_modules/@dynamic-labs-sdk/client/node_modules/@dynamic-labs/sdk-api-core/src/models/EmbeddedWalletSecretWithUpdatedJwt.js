import { exists } from '../runtime.js';
import { PasswordSourceTypeEnumFromJSON, PasswordSourceTypeEnumToJSON } from './PasswordSourceTypeEnum.js';
import { SdkUserFromJSON, SdkUserToJSON } from './SdkUser.js';

/* tslint:disable */
function EmbeddedWalletSecretWithUpdatedJwtFromJSON(json) {
    return EmbeddedWalletSecretWithUpdatedJwtFromJSONTyped(json);
}
function EmbeddedWalletSecretWithUpdatedJwtFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mfaToken': !exists(json, 'mfaToken') ? undefined : json['mfaToken'],
        'jwt': !exists(json, 'jwt') ? undefined : json['jwt'],
        'user': SdkUserFromJSON(json['user']),
        'minifiedJwt': !exists(json, 'minifiedJwt') ? undefined : json['minifiedJwt'],
        'expiresAt': json['expiresAt'],
        'walletId': json['walletId'],
        'secret': !exists(json, 'secret') ? undefined : json['secret'],
        'source': !exists(json, 'source') ? undefined : PasswordSourceTypeEnumFromJSON(json['source']),
    };
}
function EmbeddedWalletSecretWithUpdatedJwtToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mfaToken': value.mfaToken,
        'jwt': value.jwt,
        'user': SdkUserToJSON(value.user),
        'minifiedJwt': value.minifiedJwt,
        'expiresAt': value.expiresAt,
        'walletId': value.walletId,
        'secret': value.secret,
        'source': PasswordSourceTypeEnumToJSON(value.source),
    };
}

export { EmbeddedWalletSecretWithUpdatedJwtFromJSON, EmbeddedWalletSecretWithUpdatedJwtFromJSONTyped, EmbeddedWalletSecretWithUpdatedJwtToJSON };
