import { exists } from '../runtime.js';

/* tslint:disable */
function NameServiceSdkSettingsEvmFromJSON(json) {
    return NameServiceSdkSettingsEvmFromJSONTyped(json);
}
function NameServiceSdkSettingsEvmFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
    };
}
function NameServiceSdkSettingsEvmToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'domain': value.domain,
    };
}

export { NameServiceSdkSettingsEvmFromJSON, NameServiceSdkSettingsEvmFromJSONTyped, NameServiceSdkSettingsEvmToJSON };
