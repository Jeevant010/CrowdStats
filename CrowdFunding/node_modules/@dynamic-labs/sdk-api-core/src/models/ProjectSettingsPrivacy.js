import { exists } from '../runtime.js';

/* tslint:disable */
function ProjectSettingsPrivacyFromJSON(json) {
    return ProjectSettingsPrivacyFromJSONTyped(json);
}
function ProjectSettingsPrivacyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'collectIp': !exists(json, 'collectIp') ? undefined : json['collectIp'],
    };
}
function ProjectSettingsPrivacyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'collectIp': value.collectIp,
    };
}

export { ProjectSettingsPrivacyFromJSON, ProjectSettingsPrivacyFromJSONTyped, ProjectSettingsPrivacyToJSON };
