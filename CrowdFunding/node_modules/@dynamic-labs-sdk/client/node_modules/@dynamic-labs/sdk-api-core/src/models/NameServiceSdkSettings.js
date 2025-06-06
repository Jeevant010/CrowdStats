import { NameServiceSdkSettingsEvmFromJSON, NameServiceSdkSettingsEvmToJSON } from './NameServiceSdkSettingsEvm.js';

/* tslint:disable */
function NameServiceSdkSettingsFromJSON(json) {
    return NameServiceSdkSettingsFromJSONTyped(json);
}
function NameServiceSdkSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'evm': NameServiceSdkSettingsEvmFromJSON(json['evm']),
    };
}
function NameServiceSdkSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'evm': NameServiceSdkSettingsEvmToJSON(value.evm),
    };
}

export { NameServiceSdkSettingsFromJSON, NameServiceSdkSettingsFromJSONTyped, NameServiceSdkSettingsToJSON };
