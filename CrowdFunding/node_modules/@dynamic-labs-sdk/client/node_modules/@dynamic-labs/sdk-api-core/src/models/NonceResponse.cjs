'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function NonceResponseFromJSON(json) {
    return NonceResponseFromJSONTyped(json);
}
function NonceResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nonce': !runtime.exists(json, 'nonce') ? undefined : json['nonce'],
    };
}
function NonceResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nonce': value.nonce,
    };
}

exports.NonceResponseFromJSON = NonceResponseFromJSON;
exports.NonceResponseFromJSONTyped = NonceResponseFromJSONTyped;
exports.NonceResponseToJSON = NonceResponseToJSON;
