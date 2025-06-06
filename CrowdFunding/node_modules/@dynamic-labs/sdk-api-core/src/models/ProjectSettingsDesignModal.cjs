'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ProjectSettingsDesignModalFromJSON(json) {
    return ProjectSettingsDesignModalFromJSONTyped(json);
}
function ProjectSettingsDesignModalFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'border': !runtime.exists(json, 'border') ? undefined : json['border'],
        'brand': !runtime.exists(json, 'brand') ? undefined : json['brand'],
        'primaryColor': !runtime.exists(json, 'primaryColor') ? undefined : json['primaryColor'],
        'radius': !runtime.exists(json, 'radius') ? undefined : json['radius'],
        'theme': !runtime.exists(json, 'theme') ? undefined : json['theme'],
        'view': !runtime.exists(json, 'view') ? undefined : json['view'],
        'template': !runtime.exists(json, 'template') ? undefined : json['template'],
        'displayOrder': !runtime.exists(json, 'displayOrder') ? undefined : json['displayOrder'],
        'emailOnly': !runtime.exists(json, 'emailOnly') ? undefined : json['emailOnly'],
        'showWalletsButton': !runtime.exists(json, 'showWalletsButton') ? undefined : json['showWalletsButton'],
        'emailSubmitButtonInsideInput': !runtime.exists(json, 'emailSubmitButtonInsideInput') ? undefined : json['emailSubmitButtonInsideInput'],
        'splitEmailAndSocial': !runtime.exists(json, 'splitEmailAndSocial') ? undefined : json['splitEmailAndSocial'],
        'socialAboveEmail': !runtime.exists(json, 'socialAboveEmail') ? undefined : json['socialAboveEmail'],
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

exports.ProjectSettingsDesignModalFromJSON = ProjectSettingsDesignModalFromJSON;
exports.ProjectSettingsDesignModalFromJSONTyped = ProjectSettingsDesignModalFromJSONTyped;
exports.ProjectSettingsDesignModalToJSON = ProjectSettingsDesignModalToJSON;
