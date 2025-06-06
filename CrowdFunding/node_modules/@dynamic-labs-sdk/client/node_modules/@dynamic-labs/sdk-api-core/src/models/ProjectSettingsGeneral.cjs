'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ProjectSettingsGeneralFromJSON(json) {
    return ProjectSettingsGeneralFromJSONTyped(json);
}
function ProjectSettingsGeneralFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'displayName': !runtime.exists(json, 'displayName') ? undefined : json['displayName'],
        'supportEmail': !runtime.exists(json, 'supportEmail') ? undefined : json['supportEmail'],
        'supportText': !runtime.exists(json, 'supportText') ? undefined : json['supportText'],
        'appLogo': !runtime.exists(json, 'appLogo') ? undefined : json['appLogo'],
        'imageUserNotInAccessList': !runtime.exists(json, 'imageUserNotInAccessList') ? undefined : json['imageUserNotInAccessList'],
        'imageUserInAccessList': !runtime.exists(json, 'imageUserInAccessList') ? undefined : json['imageUserInAccessList'],
        'supportUrls': !runtime.exists(json, 'supportUrls') ? undefined : json['supportUrls'],
        'collectUserDataWelcomeHeader': !runtime.exists(json, 'collectUserDataWelcomeHeader') ? undefined : json['collectUserDataWelcomeHeader'],
        'collectUserDataWelcomeMessage': !runtime.exists(json, 'collectUserDataWelcomeMessage') ? undefined : json['collectUserDataWelcomeMessage'],
        'skipOptionalKYCFieldDuringOnboarding': !runtime.exists(json, 'skipOptionalKYCFieldDuringOnboarding') ? undefined : json['skipOptionalKYCFieldDuringOnboarding'],
        'emailCompanyName': !runtime.exists(json, 'emailCompanyName') ? undefined : json['emailCompanyName'],
    };
}
function ProjectSettingsGeneralToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'displayName': value.displayName,
        'supportEmail': value.supportEmail,
        'supportText': value.supportText,
        'appLogo': value.appLogo,
        'imageUserNotInAccessList': value.imageUserNotInAccessList,
        'imageUserInAccessList': value.imageUserInAccessList,
        'supportUrls': value.supportUrls,
        'collectUserDataWelcomeHeader': value.collectUserDataWelcomeHeader,
        'collectUserDataWelcomeMessage': value.collectUserDataWelcomeMessage,
        'skipOptionalKYCFieldDuringOnboarding': value.skipOptionalKYCFieldDuringOnboarding,
        'emailCompanyName': value.emailCompanyName,
    };
}

exports.ProjectSettingsGeneralFromJSON = ProjectSettingsGeneralFromJSON;
exports.ProjectSettingsGeneralFromJSONTyped = ProjectSettingsGeneralFromJSONTyped;
exports.ProjectSettingsGeneralToJSON = ProjectSettingsGeneralToJSON;
