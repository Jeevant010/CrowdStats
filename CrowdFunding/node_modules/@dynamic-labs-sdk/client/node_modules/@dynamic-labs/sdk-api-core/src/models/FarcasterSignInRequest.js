import { exists } from '../runtime.js';

/* tslint:disable */
function FarcasterSignInRequestFromJSON(json) {
    return FarcasterSignInRequestFromJSONTyped(json);
}
function FarcasterSignInRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'domain': json['domain'],
        'nonce': json['nonce'],
        'message': json['message'],
        'signature': json['signature'],
        'captchaToken': !exists(json, 'captchaToken') ? undefined : json['captchaToken'],
        'sessionPublicKey': !exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
    };
}
function FarcasterSignInRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'domain': value.domain,
        'nonce': value.nonce,
        'message': value.message,
        'signature': value.signature,
        'captchaToken': value.captchaToken,
        'sessionPublicKey': value.sessionPublicKey,
    };
}

export { FarcasterSignInRequestFromJSON, FarcasterSignInRequestFromJSONTyped, FarcasterSignInRequestToJSON };
