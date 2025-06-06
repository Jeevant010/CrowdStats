import { exists } from '../runtime.js';

/* tslint:disable */
function IntegrationSettingFromJSON(json) {
    return IntegrationSettingFromJSONTyped(json);
}
function IntegrationSettingFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'enabled': json['enabled'],
    };
}
function IntegrationSettingToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'required': value.required,
        'enabled': value.enabled,
    };
}

export { IntegrationSettingFromJSON, IntegrationSettingFromJSONTyped, IntegrationSettingToJSON };
