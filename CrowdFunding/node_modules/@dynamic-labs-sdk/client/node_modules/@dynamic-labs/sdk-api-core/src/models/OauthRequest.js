import { exists } from '../runtime.js';

/* tslint:disable */
function OauthRequestFromJSON(json) {
    return OauthRequestFromJSONTyped(json);
}
function OauthRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !exists(json, 'code') ? undefined : json['code'],
        'codeVerifier': !exists(json, 'codeVerifier') ? undefined : json['codeVerifier'],
        'state': json['state'],
        'captchaToken': !exists(json, 'captchaToken') ? undefined : json['captchaToken'],
        'sessionPublicKey': !exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
    };
}
function OauthRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'codeVerifier': value.codeVerifier,
        'state': value.state,
        'captchaToken': value.captchaToken,
        'sessionPublicKey': value.sessionPublicKey,
    };
}

export { OauthRequestFromJSON, OauthRequestFromJSONTyped, OauthRequestToJSON };
