import { exists } from '../runtime.js';

/* tslint:disable */
function MobileSettingsFromJSON(json) {
    return MobileSettingsFromJSONTyped(json);
}
function MobileSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'deeplinkUrlsEnabled': !exists(json, 'deeplinkUrlsEnabled') ? undefined : json['deeplinkUrlsEnabled'],
    };
}
function MobileSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'deeplinkUrlsEnabled': value.deeplinkUrlsEnabled,
    };
}

export { MobileSettingsFromJSON, MobileSettingsFromJSONTyped, MobileSettingsToJSON };
