import { exists } from '../runtime.js';
import { CreateMfaTokenFromJSON, CreateMfaTokenToJSON } from './CreateMfaToken.js';

/* tslint:disable */
function MFAAuthRecoveryDevicePostRequestFromJSON(json) {
    return MFAAuthRecoveryDevicePostRequestFromJSONTyped(json);
}
function MFAAuthRecoveryDevicePostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'createMfaToken': !exists(json, 'createMfaToken') ? undefined : CreateMfaTokenFromJSON(json['createMfaToken']),
        'code': json['code'],
    };
}
function MFAAuthRecoveryDevicePostRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'createMfaToken': CreateMfaTokenToJSON(value.createMfaToken),
        'code': value.code,
    };
}

export { MFAAuthRecoveryDevicePostRequestFromJSON, MFAAuthRecoveryDevicePostRequestFromJSONTyped, MFAAuthRecoveryDevicePostRequestToJSON };
