import { exists } from '../runtime.js';
import { NextJsSettingsFromJSON, NextJsSettingsToJSON } from './NextJsSettings.js';
import { ReactSettingsFromJSON, ReactSettingsToJSON } from './ReactSettings.js';

/* tslint:disable */
function FrameworkSettingsFromJSON(json) {
    return FrameworkSettingsFromJSONTyped(json);
}
function FrameworkSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'react': !exists(json, 'react') ? undefined : ReactSettingsFromJSON(json['react']),
        'nextjs': !exists(json, 'nextjs') ? undefined : NextJsSettingsFromJSON(json['nextjs']),
    };
}
function FrameworkSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'react': ReactSettingsToJSON(value.react),
        'nextjs': NextJsSettingsToJSON(value.nextjs),
    };
}

export { FrameworkSettingsFromJSON, FrameworkSettingsFromJSONTyped, FrameworkSettingsToJSON };
