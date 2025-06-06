import { exists } from '../runtime.js';

/* tslint:disable */
function RecoverMultipleClientKeySharesRequestFromJSON(json) {
    return RecoverMultipleClientKeySharesRequestFromJSONTyped(json);
}
function RecoverMultipleClientKeySharesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'keyShareIds': !exists(json, 'keyShareIds') ? undefined : json['keyShareIds'],
    };
}
function RecoverMultipleClientKeySharesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'keyShareIds': value.keyShareIds,
    };
}

export { RecoverMultipleClientKeySharesRequestFromJSON, RecoverMultipleClientKeySharesRequestFromJSONTyped, RecoverMultipleClientKeySharesRequestToJSON };
