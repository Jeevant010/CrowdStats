'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ProviderEnum = require('./ProviderEnum.cjs');

/* tslint:disable */
function EmailProviderResponseFromJSON(json) {
    return EmailProviderResponseFromJSONTyped(json);
}
function EmailProviderResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'emailProvider': ProviderEnum.ProviderEnumFromJSON(json['emailProvider']),
    };
}
function EmailProviderResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'emailProvider': ProviderEnum.ProviderEnumToJSON(value.emailProvider),
    };
}

exports.EmailProviderResponseFromJSON = EmailProviderResponseFromJSON;
exports.EmailProviderResponseFromJSONTyped = EmailProviderResponseFromJSONTyped;
exports.EmailProviderResponseToJSON = EmailProviderResponseToJSON;
