import { MergeUserFromJSON, MergeUserToJSON } from './MergeUser.js';
import { ProjectSettingsKycFromJSON, ProjectSettingsKycToJSON } from './ProjectSettingsKyc.js';

/* tslint:disable */
function MergeUserConflictFromJSON(json) {
    return MergeUserConflictFromJSONTyped(json);
}
function MergeUserConflictFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'field': ProjectSettingsKycFromJSON(json['field']),
        'fromUser': MergeUserFromJSON(json['fromUser']),
        'currentUser': MergeUserFromJSON(json['currentUser']),
    };
}
function MergeUserConflictToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'field': ProjectSettingsKycToJSON(value.field),
        'fromUser': MergeUserToJSON(value.fromUser),
        'currentUser': MergeUserToJSON(value.currentUser),
    };
}

export { MergeUserConflictFromJSON, MergeUserConflictFromJSONTyped, MergeUserConflictToJSON };
