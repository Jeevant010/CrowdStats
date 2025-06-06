'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function NameServiceDataFromJSON(json) {
    return NameServiceDataFromJSONTyped(json);
}
function NameServiceDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'avatar': !runtime.exists(json, 'avatar') ? undefined : json['avatar'],
        'name': !runtime.exists(json, 'name') ? undefined : json['name'],
    };
}
function NameServiceDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'avatar': value.avatar,
        'name': value.name,
    };
}

exports.NameServiceDataFromJSON = NameServiceDataFromJSON;
exports.NameServiceDataFromJSONTyped = NameServiceDataFromJSONTyped;
exports.NameServiceDataToJSON = NameServiceDataToJSON;
