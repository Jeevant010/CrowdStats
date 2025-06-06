'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var SdkViewSectionAlignment = require('./SdkViewSectionAlignment.cjs');
var SdkViewSectionType = require('./SdkViewSectionType.cjs');

/* tslint:disable */
function SdkViewSectionFromJSON(json) {
    return SdkViewSectionFromJSONTyped(json);
}
function SdkViewSectionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': SdkViewSectionType.SdkViewSectionTypeFromJSON(json['type']),
        'label': !runtime.exists(json, 'label') ? undefined : json['label'],
        'numOfItemsToDisplay': !runtime.exists(json, 'numOfItemsToDisplay') ? undefined : json['numOfItemsToDisplay'],
        'defaultItem': !runtime.exists(json, 'defaultItem') ? undefined : json['defaultItem'],
        'alignment': !runtime.exists(json, 'alignment') ? undefined : SdkViewSectionAlignment.SdkViewSectionAlignmentFromJSON(json['alignment']),
    };
}
function SdkViewSectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': SdkViewSectionType.SdkViewSectionTypeToJSON(value.type),
        'label': value.label,
        'numOfItemsToDisplay': value.numOfItemsToDisplay,
        'defaultItem': value.defaultItem,
        'alignment': SdkViewSectionAlignment.SdkViewSectionAlignmentToJSON(value.alignment),
    };
}

exports.SdkViewSectionFromJSON = SdkViewSectionFromJSON;
exports.SdkViewSectionFromJSONTyped = SdkViewSectionFromJSONTyped;
exports.SdkViewSectionToJSON = SdkViewSectionToJSON;
