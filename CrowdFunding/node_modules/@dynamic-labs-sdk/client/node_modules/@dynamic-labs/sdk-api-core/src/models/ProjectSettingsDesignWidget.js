import { exists } from '../runtime.js';

/* tslint:disable */
function ProjectSettingsDesignWidgetFromJSON(json) {
    return ProjectSettingsDesignWidgetFromJSONTyped(json);
}
function ProjectSettingsDesignWidgetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'backgroundColor': !exists(json, 'backgroundColor') ? undefined : json['backgroundColor'],
        'border': !exists(json, 'border') ? undefined : json['border'],
        'radius': !exists(json, 'radius') ? undefined : json['radius'],
        'textColor': !exists(json, 'textColor') ? undefined : json['textColor'],
        'theme': !exists(json, 'theme') ? undefined : json['theme'],
    };
}
function ProjectSettingsDesignWidgetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'backgroundColor': value.backgroundColor,
        'border': value.border,
        'radius': value.radius,
        'textColor': value.textColor,
        'theme': value.theme,
    };
}

export { ProjectSettingsDesignWidgetFromJSON, ProjectSettingsDesignWidgetFromJSONTyped, ProjectSettingsDesignWidgetToJSON };
