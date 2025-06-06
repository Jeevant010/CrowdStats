import { exists } from '../runtime.js';

/* tslint:disable */
function ForbiddenErrorPayloadFromJSON(json) {
    return ForbiddenErrorPayloadFromJSONTyped(json);
}
function ForbiddenErrorPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletPublicKey': !exists(json, 'walletPublicKey') ? undefined : json['walletPublicKey'],
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}
function ForbiddenErrorPayloadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'walletPublicKey': value.walletPublicKey,
        'email': value.email,
    };
}

export { ForbiddenErrorPayloadFromJSON, ForbiddenErrorPayloadFromJSONTyped, ForbiddenErrorPayloadToJSON };
