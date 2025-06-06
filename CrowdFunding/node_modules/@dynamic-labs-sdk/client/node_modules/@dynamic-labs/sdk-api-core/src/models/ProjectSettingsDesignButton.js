import { exists } from '../runtime.js';

/* tslint:disable */
function ProjectSettingsDesignButtonFromJSON(json) {
    return ProjectSettingsDesignButtonFromJSONTyped(json);
}
function ProjectSettingsDesignButtonFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'background': !exists(json, 'background') ? undefined : json['background'],
        'fontColor': !exists(json, 'fontColor') ? undefined : json['fontColor'],
        'paddingHeight': !exists(json, 'paddingHeight') ? undefined : json['paddingHeight'],
        'paddingWidth': !exists(json, 'paddingWidth') ? undefined : json['paddingWidth'],
        'radius': !exists(json, 'radius') ? undefined : json['radius'],
    };
}
function ProjectSettingsDesignButtonToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'background': value.background,
        'fontColor': value.fontColor,
        'paddingHeight': value.paddingHeight,
        'paddingWidth': value.paddingWidth,
        'radius': value.radius,
    };
}

export { ProjectSettingsDesignButtonFromJSON, ProjectSettingsDesignButtonFromJSONTyped, ProjectSettingsDesignButtonToJSON };
