'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function PasskeyStorageFromJSON(json) {
    return PasskeyStorageFromJSONTyped(json);
}
function PasskeyStorageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'icon': json['icon'],
        'updatedAt': !runtime.exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}
function PasskeyStorageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'icon': value.icon,
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

exports.PasskeyStorageFromJSON = PasskeyStorageFromJSON;
exports.PasskeyStorageFromJSONTyped = PasskeyStorageFromJSONTyped;
exports.PasskeyStorageToJSON = PasskeyStorageToJSON;
