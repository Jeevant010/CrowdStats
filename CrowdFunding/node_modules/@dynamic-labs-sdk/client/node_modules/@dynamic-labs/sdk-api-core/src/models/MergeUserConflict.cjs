'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MergeUser = require('./MergeUser.cjs');
var ProjectSettingsKyc = require('./ProjectSettingsKyc.cjs');

/* tslint:disable */
function MergeUserConflictFromJSON(json) {
    return MergeUserConflictFromJSONTyped(json);
}
function MergeUserConflictFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'field': ProjectSettingsKyc.ProjectSettingsKycFromJSON(json['field']),
        'fromUser': MergeUser.MergeUserFromJSON(json['fromUser']),
        'currentUser': MergeUser.MergeUserFromJSON(json['currentUser']),
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
        'field': ProjectSettingsKyc.ProjectSettingsKycToJSON(value.field),
        'fromUser': MergeUser.MergeUserToJSON(value.fromUser),
        'currentUser': MergeUser.MergeUserToJSON(value.currentUser),
    };
}

exports.MergeUserConflictFromJSON = MergeUserConflictFromJSON;
exports.MergeUserConflictFromJSONTyped = MergeUserConflictFromJSONTyped;
exports.MergeUserConflictToJSON = MergeUserConflictToJSON;
