'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var SdkViewSection = require('./SdkViewSection.cjs');

/* tslint:disable */
function SdkViewUpdateRequestFromJSON(json) {
    return SdkViewUpdateRequestFromJSONTyped(json);
}
function SdkViewUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'sections': !runtime.exists(json, 'sections') ? undefined : (json['sections'].map(SdkViewSection.SdkViewSectionFromJSON)),
    };
}
function SdkViewUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sections': value.sections === undefined ? undefined : (value.sections.map(SdkViewSection.SdkViewSectionToJSON)),
    };
}

exports.SdkViewUpdateRequestFromJSON = SdkViewUpdateRequestFromJSON;
exports.SdkViewUpdateRequestFromJSONTyped = SdkViewUpdateRequestFromJSONTyped;
exports.SdkViewUpdateRequestToJSON = SdkViewUpdateRequestToJSON;
