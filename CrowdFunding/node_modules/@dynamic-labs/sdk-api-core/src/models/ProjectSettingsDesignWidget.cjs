'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ProjectSettingsDesignWidgetFromJSON(json) {
    return ProjectSettingsDesignWidgetFromJSONTyped(json);
}
function ProjectSettingsDesignWidgetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'backgroundColor': !runtime.exists(json, 'backgroundColor') ? undefined : json['backgroundColor'],
        'border': !runtime.exists(json, 'border') ? undefined : json['border'],
        'radius': !runtime.exists(json, 'radius') ? undefined : json['radius'],
        'textColor': !runtime.exists(json, 'textColor') ? undefined : json['textColor'],
        'theme': !runtime.exists(json, 'theme') ? undefined : json['theme'],
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

exports.ProjectSettingsDesignWidgetFromJSON = ProjectSettingsDesignWidgetFromJSON;
exports.ProjectSettingsDesignWidgetFromJSONTyped = ProjectSettingsDesignWidgetFromJSONTyped;
exports.ProjectSettingsDesignWidgetToJSON = ProjectSettingsDesignWidgetToJSON;
