'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var MergeUserConflictResolution = require('./MergeUserConflictResolution.cjs');

/* tslint:disable */
function MergeUserConflictResolutionsFromJSON(json) {
    return MergeUserConflictResolutionsFromJSONTyped(json);
}
function MergeUserConflictResolutionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mergeUserResolutions': !runtime.exists(json, 'mergeUserResolutions') ? undefined : (json['mergeUserResolutions'].map(MergeUserConflictResolution.MergeUserConflictResolutionFromJSON)),
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
        'mergeUserResolutions': value.mergeUserResolutions === undefined ? undefined : (value.mergeUserResolutions.map(MergeUserConflictResolution.MergeUserConflictResolutionToJSON)),
    };
}

exports.MergeUserConflictResolutionsFromJSON = MergeUserConflictResolutionsFromJSON;
exports.MergeUserConflictResolutionsFromJSONTyped = MergeUserConflictResolutionsFromJSONTyped;
exports.MergeUserConflictResolutionsToJSON = MergeUserConflictResolutionsToJSON;
