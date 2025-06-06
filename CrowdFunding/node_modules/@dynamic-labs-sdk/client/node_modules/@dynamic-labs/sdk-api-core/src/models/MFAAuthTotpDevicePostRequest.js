import { exists } from '../runtime.js';
import { CreateMfaTokenFromJSON, CreateMfaTokenToJSON } from './CreateMfaToken.js';

/* tslint:disable */
function MFAAuthTotpDevicePostRequestFromJSON(json) {
    return MFAAuthTotpDevicePostRequestFromJSONTyped(json);
}
function MFAAuthTotpDevicePostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'createMfaToken': !exists(json, 'createMfaToken') ? undefined : CreateMfaTokenFromJSON(json['createMfaToken']),
        'code': json['code'],
    };
}
function MFAAuthTotpDevicePostRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'createMfaToken': CreateMfaTokenToJSON(value.createMfaToken),
        'code': value.code,
    };
}

export { MFAAuthTotpDevicePostRequestFromJSON, MFAAuthTotpDevicePostRequestFromJSONTyped, MFAAuthTotpDevicePostRequestToJSON };
