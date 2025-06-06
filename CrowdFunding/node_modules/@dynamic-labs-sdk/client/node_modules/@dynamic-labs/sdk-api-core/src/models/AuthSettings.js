import { AuthStorageEnumFromJSON, AuthStorageEnumToJSON } from './AuthStorageEnum.js';

/* tslint:disable */
function AuthSettingsFromJSON(json) {
    return AuthSettingsFromJSONTyped(json);
}
function AuthSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'storage': (json['storage'].map(AuthStorageEnumFromJSON)),
    };
}
function AuthSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'storage': (value.storage.map(AuthStorageEnumToJSON)),
    };
}

export { AuthSettingsFromJSON, AuthSettingsFromJSONTyped, AuthSettingsToJSON };
