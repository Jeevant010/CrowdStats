import { exists } from '../runtime.js';

/* tslint:disable */
function ProjectSettingsGeneralFromJSON(json) {
    return ProjectSettingsGeneralFromJSONTyped(json);
}
function ProjectSettingsGeneralFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'supportEmail': !exists(json, 'supportEmail') ? undefined : json['supportEmail'],
        'supportText': !exists(json, 'supportText') ? undefined : json['supportText'],
        'appLogo': !exists(json, 'appLogo') ? undefined : json['appLogo'],
        'imageUserNotInAccessList': !exists(json, 'imageUserNotInAccessList') ? undefined : json['imageUserNotInAccessList'],
        'imageUserInAccessList': !exists(json, 'imageUserInAccessList') ? undefined : json['imageUserInAccessList'],
        'supportUrls': !exists(json, 'supportUrls') ? undefined : json['supportUrls'],
        'collectUserDataWelcomeHeader': !exists(json, 'collectUserDataWelcomeHeader') ? undefined : json['collectUserDataWelcomeHeader'],
        'collectUserDataWelcomeMessage': !exists(json, 'collectUserDataWelcomeMessage') ? undefined : json['collectUserDataWelcomeMessage'],
        'skipOptionalKYCFieldDuringOnboarding': !exists(json, 'skipOptionalKYCFieldDuringOnboarding') ? undefined : json['skipOptionalKYCFieldDuringOnboarding'],
        'emailCompanyName': !exists(json, 'emailCompanyName') ? undefined : json['emailCompanyName'],
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

export { ProjectSettingsGeneralFromJSON, ProjectSettingsGeneralFromJSONTyped, ProjectSettingsGeneralToJSON };
