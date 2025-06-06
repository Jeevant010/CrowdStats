import { MergeUserConflictFromJSON, MergeUserConflictToJSON } from './MergeUserConflict.js';
import { SdkUserFromJSON, SdkUserToJSON } from './SdkUser.js';

/* tslint:disable */
function MergeConflictsFromJSON(json) {
    return MergeConflictsFromJSONTyped(json);
}
function MergeConflictsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fromUser': SdkUserFromJSON(json['fromUser']),
        'conflicts': (json['conflicts'].map(MergeUserConflictFromJSON)),
    };
}
function MergeConflictsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fromUser': SdkUserToJSON(value.fromUser),
        'conflicts': (value.conflicts.map(MergeUserConflictToJSON)),
    };
}

export { MergeConflictsFromJSON, MergeConflictsFromJSONTyped, MergeConflictsToJSON };
