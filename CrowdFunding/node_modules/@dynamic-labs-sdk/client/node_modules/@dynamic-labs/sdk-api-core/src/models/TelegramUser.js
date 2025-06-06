import { exists } from '../runtime.js';

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
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'hash': json['hash'],
        'photoURL': !exists(json, 'photoURL') ? undefined : json['photoURL'],
        'username': !exists(json, 'username') ? undefined : json['username'],
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

export { TelegramUserFromJSON, TelegramUserFromJSONTyped, TelegramUserToJSON };
