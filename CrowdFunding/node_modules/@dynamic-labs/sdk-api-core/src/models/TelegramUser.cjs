'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function TelegramUserFromJSON(json) {
    return TelegramUserFromJSONTyped(json);
}
function TelegramUserFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'firstName': !runtime.exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !runtime.exists(json, 'lastName') ? undefined : json['lastName'],
        'hash': json['hash'],
        'photoURL': !runtime.exists(json, 'photoURL') ? undefined : json['photoURL'],
        'username': !runtime.exists(json, 'username') ? undefined : json['username'],
        'authDate': json['authDate'],
    };
}
function TelegramUserToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'hash': value.hash,
        'photoURL': value.photoURL,
        'username': value.username,
        'authDate': value.authDate,
    };
}

exports.TelegramUserFromJSON = TelegramUserFromJSON;
exports.TelegramUserFromJSONTyped = TelegramUserFromJSONTyped;
exports.TelegramUserToJSON = TelegramUserToJSON;
