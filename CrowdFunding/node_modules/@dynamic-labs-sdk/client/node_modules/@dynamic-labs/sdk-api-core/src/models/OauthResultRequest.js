import { exists } from '../runtime.js';

/* tslint:disable */
function OauthResultRequestFromJSON(json) {
    return OauthResultRequestFromJSONTyped(json);
}
function OauthResultRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'state': !exists(json, 'state') ? undefined : json['state'],
        'telegramAuthToken': !exists(json, 'telegramAuthToken') ? undefined : json['telegramAuthToken'],
        'forceCreateUser': !exists(json, 'forceCreateUser') ? undefined : json['forceCreateUser'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'sessionPublicKey': !exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
    };
}
function OauthResultRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'state': value.state,
        'telegramAuthToken': value.telegramAuthToken,
        'forceCreateUser': value.forceCreateUser,
        'code': value.code,
        'sessionPublicKey': value.sessionPublicKey,
    };
}

export { OauthResultRequestFromJSON, OauthResultRequestFromJSONTyped, OauthResultRequestToJSON };
