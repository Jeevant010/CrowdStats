'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ProjectSettingsDesignButtonFromJSON(json) {
    return ProjectSettingsDesignButtonFromJSONTyped(json);
}
function ProjectSettingsDesignButtonFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'background': !runtime.exists(json, 'background') ? undefined : json['background'],
        'fontColor': !runtime.exists(json, 'fontColor') ? undefined : json['fontColor'],
        'paddingHeight': !runtime.exists(json, 'paddingHeight') ? undefined : json['paddingHeight'],
        'paddingWidth': !runtime.exists(json, 'paddingWidth') ? undefined : json['paddingWidth'],
        'radius': !runtime.exists(json, 'radius') ? undefined : json['radius'],
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

exports.ProjectSettingsDesignButtonFromJSON = ProjectSettingsDesignButtonFromJSON;
exports.ProjectSettingsDesignButtonFromJSONTyped = ProjectSettingsDesignButtonFromJSONTyped;
exports.ProjectSettingsDesignButtonToJSON = ProjectSettingsDesignButtonToJSON;
