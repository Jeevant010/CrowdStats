'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var PasskeyStorage = require('./PasskeyStorage.cjs');

/* tslint:disable */
function UserPasskeyFromJSON(json) {
    return UserPasskeyFromJSONTyped(json);
}
function UserPasskeyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'alias': !runtime.exists(json, 'alias') ? undefined : json['alias'],
        'userAgent': !runtime.exists(json, 'userAgent') ? undefined : json['userAgent'],
        'origin': !runtime.exists(json, 'origin') ? undefined : json['origin'],
        'credentialId': json['credentialId'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': !runtime.exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'storage': !runtime.exists(json, 'storage') ? undefined : PasskeyStorage.PasskeyStorageFromJSON(json['storage']),
    };
}
function UserPasskeyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'alias': value.alias,
        'userAgent': value.userAgent,
        'origin': value.origin,
        'credentialId': value.credentialId,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'storage': PasskeyStorage.PasskeyStorageToJSON(value.storage),
    };
}

exports.UserPasskeyFromJSON = UserPasskeyFromJSON;
exports.UserPasskeyFromJSONTyped = UserPasskeyFromJSONTyped;
exports.UserPasskeyToJSON = UserPasskeyToJSON;
