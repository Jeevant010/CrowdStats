'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MergeUserConflict = require('./MergeUserConflict.cjs');
var SdkUser = require('./SdkUser.cjs');

/* tslint:disable */
function MergeConflictsFromJSON(json) {
    return MergeConflictsFromJSONTyped(json);
}
function MergeConflictsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fromUser': SdkUser.SdkUserFromJSON(json['fromUser']),
        'conflicts': (json['conflicts'].map(MergeUserConflict.MergeUserConflictFromJSON)),
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
        'fromUser': SdkUser.SdkUserToJSON(value.fromUser),
        'conflicts': (value.conflicts.map(MergeUserConflict.MergeUserConflictToJSON)),
    };
}

exports.MergeConflictsFromJSON = MergeConflictsFromJSON;
exports.MergeConflictsFromJSONTyped = MergeConflictsFromJSONTyped;
exports.MergeConflictsToJSON = MergeConflictsToJSON;
