import { exists } from '../runtime.js';
import { OauthResultStatusFromJSON, OauthResultStatusToJSON } from './OauthResultStatus.js';

/* tslint:disable */
function OauthResultResponseFromJSON(json) {
    return OauthResultResponseFromJSONTyped(json);
}
function OauthResultResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !exists(json, 'code') ? undefined : json['code'],
        'error': !exists(json, 'error') ? undefined : json['error'],
        'status': OauthResultStatusFromJSON(json['status']),
    };
}
function OauthResultResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'error': value.error,
        'status': OauthResultStatusToJSON(value.status),
    };
}

export { OauthResultResponseFromJSON, OauthResultResponseFromJSONTyped, OauthResultResponseToJSON };
