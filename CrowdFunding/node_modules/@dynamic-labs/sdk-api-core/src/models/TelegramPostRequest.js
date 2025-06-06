import { TelegramUserFromJSON, TelegramUserToJSON } from './TelegramUser.js';

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
        'telegramUser': TelegramUserFromJSON(json['telegramUser']),
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
        'telegramUser': TelegramUserToJSON(value.telegramUser),
    };
}

export { TelegramPostRequestFromJSON, TelegramPostRequestFromJSONTyped, TelegramPostRequestToJSON };
