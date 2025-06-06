import { exists } from '../runtime.js';
import { UnprocessableEntityErrorCodeFromJSON, UnprocessableEntityErrorCodeToJSON } from './UnprocessableEntityErrorCode.js';
import { UnprocessableEntityErrorPayloadFromJSON, UnprocessableEntityErrorPayloadToJSON } from './UnprocessableEntityErrorPayload.js';

/* tslint:disable */
function UnprocessableEntityFromJSON(json) {
    return UnprocessableEntityFromJSONTyped(json);
}
function UnprocessableEntityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': json['error'],
        'code': !exists(json, 'code') ? undefined : UnprocessableEntityErrorCodeFromJSON(json['code']),
        'payload': !exists(json, 'payload') ? undefined : UnprocessableEntityErrorPayloadFromJSON(json['payload']),
    };
}
function UnprocessableEntityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'error': value.error,
        'code': UnprocessableEntityErrorCodeToJSON(value.code),
        'payload': UnprocessableEntityErrorPayloadToJSON(value.payload),
    };
}

export { UnprocessableEntityFromJSON, UnprocessableEntityFromJSONTyped, UnprocessableEntityToJSON };
