import { KycFieldTypeFromJSON, KycFieldTypeToJSON } from './KycFieldType.js';

/* tslint:disable */
function MergeUserConflictResolutionFromJSON(json) {
    return MergeUserConflictResolutionFromJSONTyped(json);
}
function MergeUserConflictResolutionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'userId': json['userId'],
        'fieldKey': json['fieldKey'],
        'type': KycFieldTypeFromJSON(json['type']),
    };
}
function MergeUserConflictResolutionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'userId': value.userId,
        'fieldKey': value.fieldKey,
        'type': KycFieldTypeToJSON(value.type),
    };
}

export { MergeUserConflictResolutionFromJSON, MergeUserConflictResolutionFromJSONTyped, MergeUserConflictResolutionToJSON };
