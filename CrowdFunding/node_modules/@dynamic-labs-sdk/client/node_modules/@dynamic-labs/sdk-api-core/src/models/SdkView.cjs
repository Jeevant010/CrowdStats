'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var SdkViewSection = require('./SdkViewSection.cjs');
var SdkViewType = require('./SdkViewType.cjs');

/* tslint:disable */
function SdkViewFromJSON(json) {
    return SdkViewFromJSONTyped(json);
}
function SdkViewFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': SdkViewType.SdkViewTypeFromJSON(json['type']),
        'sections': !runtime.exists(json, 'sections') ? undefined : (json['sections'].map(SdkViewSection.SdkViewSectionFromJSON)),
    };
}
function SdkViewToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': SdkViewType.SdkViewTypeToJSON(value.type),
        'sections': value.sections === undefined ? undefined : (value.sections.map(SdkViewSection.SdkViewSectionToJSON)),
    };
}

exports.SdkViewFromJSON = SdkViewFromJSON;
exports.SdkViewFromJSONTyped = SdkViewFromJSONTyped;
exports.SdkViewToJSON = SdkViewToJSON;
