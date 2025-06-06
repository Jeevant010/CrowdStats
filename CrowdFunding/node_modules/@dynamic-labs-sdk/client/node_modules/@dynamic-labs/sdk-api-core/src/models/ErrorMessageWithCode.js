import { exists } from '../runtime.js';

/* tslint:disable */
function ErrorMessageWithCodeFromJSON(json) {
    return ErrorMessageWithCodeFromJSONTyped(json);
}
function ErrorMessageWithCodeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !exists(json, 'code') ? undefined : json['code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}
function ErrorMessageWithCodeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'message': value.message,
    };
}

export { ErrorMessageWithCodeFromJSON, ErrorMessageWithCodeFromJSONTyped, ErrorMessageWithCodeToJSON };
