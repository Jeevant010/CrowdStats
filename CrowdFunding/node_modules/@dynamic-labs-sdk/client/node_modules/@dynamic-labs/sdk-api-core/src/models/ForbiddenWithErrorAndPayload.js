import { exists } from '../runtime.js';
import { ErrorMessageWithCodeFromJSON, ErrorMessageWithCodeToJSON } from './ErrorMessageWithCode.js';
import { ForbiddenErrorPayloadFromJSON, ForbiddenErrorPayloadToJSON } from './ForbiddenErrorPayload.js';

/* tslint:disable */
function ForbiddenWithErrorAndPayloadFromJSON(json) {
    return ForbiddenWithErrorAndPayloadFromJSONTyped(json);
}
function ForbiddenWithErrorAndPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'error': !exists(json, 'error') ? undefined : ErrorMessageWithCodeFromJSON(json['error']),
        'payload': !exists(json, 'payload') ? undefined : ForbiddenErrorPayloadFromJSON(json['payload']),
    };
}
function ForbiddenWithErrorAndPayloadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'error': ErrorMessageWithCodeToJSON(value.error),
        'payload': ForbiddenErrorPayloadToJSON(value.payload),
    };
}

export { ForbiddenWithErrorAndPayloadFromJSON, ForbiddenWithErrorAndPayloadFromJSONTyped, ForbiddenWithErrorAndPayloadToJSON };
