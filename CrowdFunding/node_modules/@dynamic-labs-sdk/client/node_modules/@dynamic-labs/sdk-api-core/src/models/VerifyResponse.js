import { exists } from '../runtime.js';
import { SdkUserFromJSON, SdkUserToJSON } from './SdkUser.js';

/* tslint:disable */
function VerifyResponseFromJSON(json) {
    return VerifyResponseFromJSONTyped(json);
}
function VerifyResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mfaToken': !exists(json, 'mfaToken') ? undefined : json['mfaToken'],
        'jwt': !exists(json, 'jwt') ? undefined : json['jwt'],
        'user': SdkUserFromJSON(json['user']),
        'minifiedJwt': !exists(json, 'minifiedJwt') ? undefined : json['minifiedJwt'],
        'expiresAt': json['expiresAt'],
    };
}
function VerifyResponseToJSON(value) {
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
    };
}

export { VerifyResponseFromJSON, VerifyResponseFromJSONTyped, VerifyResponseToJSON };
