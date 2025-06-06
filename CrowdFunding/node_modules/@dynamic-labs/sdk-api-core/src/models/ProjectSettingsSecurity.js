import { exists } from '../runtime.js';
import { AuthSettingsFromJSON, AuthSettingsToJSON } from './AuthSettings.js';
import { DurationFromJSON, DurationToJSON } from './Duration.js';
import { ExternalAuthFromJSON, ExternalAuthToJSON } from './ExternalAuth.js';
import { HCaptchaSettingsFromJSON, HCaptchaSettingsToJSON } from './HCaptchaSettings.js';
import { MFASettingsFromJSON, MFASettingsToJSON } from './MFASettings.js';

/* tslint:disable */
function ProjectSettingsSecurityFromJSON(json) {
    return ProjectSettingsSecurityFromJSONTyped(json);
}
function ProjectSettingsSecurityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'jwtDuration': !exists(json, 'jwtDuration') ? undefined : DurationFromJSON(json['jwtDuration']),
        'hCaptcha': !exists(json, 'hCaptcha') ? undefined : HCaptchaSettingsFromJSON(json['hCaptcha']),
        'mfa': !exists(json, 'mfa') ? undefined : MFASettingsFromJSON(json['mfa']),
        'auth': !exists(json, 'auth') ? undefined : AuthSettingsFromJSON(json['auth']),
        'externalAuth': !exists(json, 'externalAuth') ? undefined : ExternalAuthFromJSON(json['externalAuth']),
    };
}
function ProjectSettingsSecurityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'jwtDuration': DurationToJSON(value.jwtDuration),
        'hCaptcha': HCaptchaSettingsToJSON(value.hCaptcha),
        'mfa': MFASettingsToJSON(value.mfa),
        'auth': AuthSettingsToJSON(value.auth),
        'externalAuth': ExternalAuthToJSON(value.externalAuth),
    };
}

export { ProjectSettingsSecurityFromJSON, ProjectSettingsSecurityFromJSONTyped, ProjectSettingsSecurityToJSON };
