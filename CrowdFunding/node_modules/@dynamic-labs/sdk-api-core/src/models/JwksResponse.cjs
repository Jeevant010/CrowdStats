'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var JwksKey = require('./JwksKey.cjs');

/* tslint:disable */
function JwksResponseFromJSON(json) {
    return JwksResponseFromJSONTyped(json);
}
function JwksResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'keys': (json['keys'].map(JwksKey.JwksKeyFromJSON)),
    };
}
function JwksResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'keys': (value.keys.map(JwksKey.JwksKeyToJSON)),
    };
}

exports.JwksResponseFromJSON = JwksResponseFromJSON;
exports.JwksResponseFromJSONTyped = JwksResponseFromJSONTyped;
exports.JwksResponseToJSON = JwksResponseToJSON;
