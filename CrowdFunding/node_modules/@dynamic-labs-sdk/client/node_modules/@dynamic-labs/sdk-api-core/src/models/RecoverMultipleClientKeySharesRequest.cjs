'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function RecoverMultipleClientKeySharesRequestFromJSON(json) {
    return RecoverMultipleClientKeySharesRequestFromJSONTyped(json);
}
function RecoverMultipleClientKeySharesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'keyShareIds': !runtime.exists(json, 'keyShareIds') ? undefined : json['keyShareIds'],
    };
}
function RecoverMultipleClientKeySharesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'keyShareIds': value.keyShareIds,
    };
}

exports.RecoverMultipleClientKeySharesRequestFromJSON = RecoverMultipleClientKeySharesRequestFromJSON;
exports.RecoverMultipleClientKeySharesRequestFromJSONTyped = RecoverMultipleClientKeySharesRequestFromJSONTyped;
exports.RecoverMultipleClientKeySharesRequestToJSON = RecoverMultipleClientKeySharesRequestToJSON;
