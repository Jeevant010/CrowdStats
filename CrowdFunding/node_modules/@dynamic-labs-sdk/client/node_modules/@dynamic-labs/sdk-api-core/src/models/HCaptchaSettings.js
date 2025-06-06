import { exists } from '../runtime.js';

/* tslint:disable */
function HCaptchaSettingsFromJSON(json) {
    return HCaptchaSettingsFromJSONTyped(json);
}
function HCaptchaSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'secretKey': !exists(json, 'secretKey') ? undefined : json['secretKey'],
        'siteKey': !exists(json, 'siteKey') ? undefined : json['siteKey'],
    };
}
function HCaptchaSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'enabled': value.enabled,
        'secretKey': value.secretKey,
        'siteKey': value.siteKey,
    };
}

export { HCaptchaSettingsFromJSON, HCaptchaSettingsFromJSONTyped, HCaptchaSettingsToJSON };
