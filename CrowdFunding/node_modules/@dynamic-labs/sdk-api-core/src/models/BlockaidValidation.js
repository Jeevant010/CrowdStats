import { exists } from '../runtime.js';

/* tslint:disable */
function BlockaidValidationFromJSON(json) {
    return BlockaidValidationFromJSONTyped(json);
}
function BlockaidValidationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': json['result'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'reason': json['reason'],
        'classification': !exists(json, 'classification') ? undefined : json['classification'],
    };
}
function BlockaidValidationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'result': value.result,
        'description': value.description,
        'reason': value.reason,
        'classification': value.classification,
    };
}

export { BlockaidValidationFromJSON, BlockaidValidationFromJSONTyped, BlockaidValidationToJSON };
