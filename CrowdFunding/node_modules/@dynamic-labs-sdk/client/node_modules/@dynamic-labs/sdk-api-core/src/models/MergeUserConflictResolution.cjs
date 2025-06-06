'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var KycFieldType = require('./KycFieldType.cjs');

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
        'type': KycFieldType.KycFieldTypeFromJSON(json['type']),
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
        'type': KycFieldType.KycFieldTypeToJSON(value.type),
    };
}

exports.MergeUserConflictResolutionFromJSON = MergeUserConflictResolutionFromJSON;
exports.MergeUserConflictResolutionFromJSONTyped = MergeUserConflictResolutionFromJSONTyped;
exports.MergeUserConflictResolutionToJSON = MergeUserConflictResolutionToJSON;
