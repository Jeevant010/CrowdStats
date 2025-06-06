import { exists } from '../runtime.js';
import { FrameworkSettingsFromJSON, FrameworkSettingsToJSON } from './FrameworkSettings.js';

/* tslint:disable */
function SdkSettingsRequestFromJSON(json) {
    return SdkSettingsRequestFromJSONTyped(json);
}
function SdkSettingsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dynamicContextProps': !exists(json, 'dynamicContextProps') ? undefined : json['dynamicContextProps'],
        'dynamicWagmiSettings': !exists(json, 'dynamicWagmiSettings') ? undefined : json['dynamicWagmiSettings'],
        'frameworkSettings': !exists(json, 'frameworkSettings') ? undefined : FrameworkSettingsFromJSON(json['frameworkSettings']),
    };
}
function SdkSettingsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dynamicContextProps': value.dynamicContextProps,
        'dynamicWagmiSettings': value.dynamicWagmiSettings,
        'frameworkSettings': FrameworkSettingsToJSON(value.frameworkSettings),
    };
}

export { SdkSettingsRequestFromJSON, SdkSettingsRequestFromJSONTyped, SdkSettingsRequestToJSON };
