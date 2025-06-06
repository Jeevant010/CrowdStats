'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TelegramUser = require('./TelegramUser.cjs');

/* tslint:disable */
function TelegramPostRequestFromJSON(json) {
    return TelegramPostRequestFromJSONTyped(json);
}
function TelegramPostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'state': json['state'],
        'telegramUser': TelegramUser.TelegramUserFromJSON(json['telegramUser']),
    };
}
function TelegramPostRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'state': value.state,
        'telegramUser': TelegramUser.TelegramUserToJSON(value.telegramUser),
    };
}

exports.TelegramPostRequestFromJSON = TelegramPostRequestFromJSON;
exports.TelegramPostRequestFromJSONTyped = TelegramPostRequestFromJSONTyped;
exports.TelegramPostRequestToJSON = TelegramPostRequestToJSON;
