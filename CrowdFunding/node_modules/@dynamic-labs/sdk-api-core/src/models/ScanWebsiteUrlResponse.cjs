'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ScanWebsiteUrlResponseFromJSON(json) {
    return ScanWebsiteUrlResponseFromJSONTyped(json);
}
function ScanWebsiteUrlResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'isMalicious': !runtime.exists(json, 'isMalicious') ? undefined : json['isMalicious'],
    };
}
function ScanWebsiteUrlResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'isMalicious': value.isMalicious,
    };
}

exports.ScanWebsiteUrlResponseFromJSON = ScanWebsiteUrlResponseFromJSON;
exports.ScanWebsiteUrlResponseFromJSONTyped = ScanWebsiteUrlResponseFromJSONTyped;
exports.ScanWebsiteUrlResponseToJSON = ScanWebsiteUrlResponseToJSON;
