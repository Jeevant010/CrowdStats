'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function UpdateUserPasskeyRequestFromJSON(json) {
    return UpdateUserPasskeyRequestFromJSONTyped(json);
}
function UpdateUserPasskeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'alias': !runtime.exists(json, 'alias') ? undefined : json['alias'],
    };
}
function UpdateUserPasskeyRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'alias': value.alias,
    };
}

exports.UpdateUserPasskeyRequestFromJSON = UpdateUserPasskeyRequestFromJSON;
exports.UpdateUserPasskeyRequestFromJSONTyped = UpdateUserPasskeyRequestFromJSONTyped;
exports.UpdateUserPasskeyRequestToJSON = UpdateUserPasskeyRequestToJSON;
