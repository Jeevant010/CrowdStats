'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function JwksKeyFromJSON(json) {
    return JwksKeyFromJSONTyped(json);
}
function JwksKeyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'kid': !runtime.exists(json, 'kid') ? undefined : json['kid'],
        'alg': !runtime.exists(json, 'alg') ? undefined : json['alg'],
        'kty': !runtime.exists(json, 'kty') ? undefined : json['kty'],
        'use': !runtime.exists(json, 'use') ? undefined : json['use'],
        'e': !runtime.exists(json, 'e') ? undefined : json['e'],
        'n': !runtime.exists(json, 'n') ? undefined : json['n'],
    };
}
function JwksKeyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'kid': value.kid,
        'alg': value.alg,
        'kty': value.kty,
        'use': value.use,
        'e': value.e,
        'n': value.n,
    };
}

exports.JwksKeyFromJSON = JwksKeyFromJSON;
exports.JwksKeyFromJSONTyped = JwksKeyFromJSONTyped;
exports.JwksKeyToJSON = JwksKeyToJSON;
