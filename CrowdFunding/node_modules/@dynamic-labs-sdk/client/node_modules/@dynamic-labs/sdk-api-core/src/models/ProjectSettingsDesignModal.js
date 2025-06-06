import { exists } from '../runtime.js';

/* tslint:disable */
function ProjectSettingsDesignModalFromJSON(json) {
    return ProjectSettingsDesignModalFromJSONTyped(json);
}
function ProjectSettingsDesignModalFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'border': !exists(json, 'border') ? undefined : json['border'],
        'brand': !exists(json, 'brand') ? undefined : json['brand'],
        'primaryColor': !exists(json, 'primaryColor') ? undefined : json['primaryColor'],
        'radius': !exists(json, 'radius') ? undefined : json['radius'],
        'theme': !exists(json, 'theme') ? undefined : json['theme'],
        'view': !exists(json, 'view') ? undefined : json['view'],
        'template': !exists(json, 'template') ? undefined : json['template'],
        'displayOrder': !exists(json, 'displayOrder') ? undefined : json['displayOrder'],
        'emailOnly': !exists(json, 'emailOnly') ? undefined : json['emailOnly'],
        'showWalletsButton': !exists(json, 'showWalletsButton') ? undefined : json['showWalletsButton'],
        'emailSubmitButtonInsideInput': !exists(json, 'emailSubmitButtonInsideInput') ? undefined : json['emailSubmitButtonInsideInput'],
        'splitEmailAndSocial': !exists(json, 'splitEmailAndSocial') ? undefined : json['splitEmailAndSocial'],
        'socialAboveEmail': !exists(json, 'socialAboveEmail') ? undefined : json['socialAboveEmail'],
    };
}
function ProjectSettingsDesignModalToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'border': value.border,
        'brand': value.brand,
        'primaryColor': value.primaryColor,
        'radius': value.radius,
        'theme': value.theme,
        'view': value.view,
        'template': value.template,
        'displayOrder': value.displayOrder,
        'emailOnly': value.emailOnly,
        'showWalletsButton': value.showWalletsButton,
        'emailSubmitButtonInsideInput': value.emailSubmitButtonInsideInput,
        'splitEmailAndSocial': value.splitEmailAndSocial,
        'socialAboveEmail': value.socialAboveEmail,
    };
}

export { ProjectSettingsDesignModalFromJSON, ProjectSettingsDesignModalFromJSONTyped, ProjectSettingsDesignModalToJSON };
