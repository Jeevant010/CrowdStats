import { UserPasskeyFromJSON, UserPasskeyToJSON } from './UserPasskey.js';

/* tslint:disable */
function GetUserPasskeysResponseFromJSON(json) {
    return GetUserPasskeysResponseFromJSONTyped(json);
}
function GetUserPasskeysResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'passkeys': (json['passkeys'].map(UserPasskeyFromJSON)),
        'count': json['count'],
    };
}
function GetUserPasskeysResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'passkeys': (value.passkeys.map(UserPasskeyToJSON)),
        'count': value.count,
    };
}

export { GetUserPasskeysResponseFromJSON, GetUserPasskeysResponseFromJSONTyped, GetUserPasskeysResponseToJSON };
