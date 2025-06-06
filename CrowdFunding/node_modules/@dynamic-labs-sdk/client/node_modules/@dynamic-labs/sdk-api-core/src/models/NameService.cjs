'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function NameServiceFromJSON(json) {
    return NameServiceFromJSONTyped(json);
}
function NameServiceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'registry': !runtime.exists(json, 'registry') ? undefined : json['registry'],
    };
}
function NameServiceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'registry': value.registry,
    };
}

exports.NameServiceFromJSON = NameServiceFromJSON;
exports.NameServiceFromJSONTyped = NameServiceFromJSONTyped;
exports.NameServiceToJSON = NameServiceToJSON;
