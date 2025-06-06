import { exists } from '../runtime.js';

/* tslint:disable */
function RegisterSessionKeyRequestFromJSON(json) {
    return RegisterSessionKeyRequestFromJSONTyped(json);
}
function RegisterSessionKeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'publicKey': json['publicKey'],
        'prevSessionKeySignature': !exists(json, 'prevSessionKeySignature') ? undefined : json['prevSessionKeySignature'],
        'walletId': !exists(json, 'walletId') ? undefined : json['walletId'],
    };
}
function RegisterSessionKeyRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'publicKey': value.publicKey,
        'prevSessionKeySignature': value.prevSessionKeySignature,
        'walletId': value.walletId,
    };
}

export { RegisterSessionKeyRequestFromJSON, RegisterSessionKeyRequestFromJSONTyped, RegisterSessionKeyRequestToJSON };
