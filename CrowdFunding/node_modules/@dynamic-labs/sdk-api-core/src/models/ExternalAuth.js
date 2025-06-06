import { exists } from '../runtime.js';

/* tslint:disable */
function ExternalAuthFromJSON(json) {
    return ExternalAuthFromJSONTyped(json);
}
function ExternalAuthFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'iss': !exists(json, 'iss') ? undefined : json['iss'],
        'aud': !exists(json, 'aud') ? undefined : json['aud'],
        'jwksUrl': !exists(json, 'jwksUrl') ? undefined : json['jwksUrl'],
        'cookieName': !exists(json, 'cookieName') ? undefined : json['cookieName'],
    };
}
function ExternalAuthToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'enabled': value.enabled,
        'iss': value.iss,
        'aud': value.aud,
        'jwksUrl': value.jwksUrl,
        'cookieName': value.cookieName,
    };
}

export { ExternalAuthFromJSON, ExternalAuthFromJSONTyped, ExternalAuthToJSON };
