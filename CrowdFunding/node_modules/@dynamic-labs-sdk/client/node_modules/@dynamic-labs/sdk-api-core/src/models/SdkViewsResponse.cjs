'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var SdkView = require('./SdkView.cjs');

/* tslint:disable */
function SdkViewsResponseFromJSON(json) {
    return SdkViewsResponseFromJSONTyped(json);
}
function SdkViewsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'sdkViews': !runtime.exists(json, 'sdkViews') ? undefined : (json['sdkViews'].map(SdkView.SdkViewFromJSON)),
    };
}
function SdkViewsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sdkViews': value.sdkViews === undefined ? undefined : (value.sdkViews.map(SdkView.SdkViewToJSON)),
    };
}

exports.SdkViewsResponseFromJSON = SdkViewsResponseFromJSON;
exports.SdkViewsResponseFromJSONTyped = SdkViewsResponseFromJSONTyped;
exports.SdkViewsResponseToJSON = SdkViewsResponseToJSON;
