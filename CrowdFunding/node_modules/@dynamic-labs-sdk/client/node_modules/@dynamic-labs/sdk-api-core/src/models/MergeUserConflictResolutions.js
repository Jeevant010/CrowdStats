import { exists } from '../runtime.js';
import { MergeUserConflictResolutionFromJSON, MergeUserConflictResolutionToJSON } from './MergeUserConflictResolution.js';

/* tslint:disable */
function MergeUserConflictResolutionsFromJSON(json) {
    return MergeUserConflictResolutionsFromJSONTyped(json);
}
function MergeUserConflictResolutionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mergeUserResolutions': !exists(json, 'mergeUserResolutions') ? undefined : (json['mergeUserResolutions'].map(MergeUserConflictResolutionFromJSON)),
    };
}
function MergeUserConflictResolutionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mergeUserResolutions': value.mergeUserResolutions === undefined ? undefined : (value.mergeUserResolutions.map(MergeUserConflictResolutionToJSON)),
    };
}

export { MergeUserConflictResolutionsFromJSON, MergeUserConflictResolutionsFromJSONTyped, MergeUserConflictResolutionsToJSON };
