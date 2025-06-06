'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var HealthcheckStatus = require('./HealthcheckStatus.cjs');

/* tslint:disable */
function HealthcheckResponseFromJSON(json) {
    return HealthcheckResponseFromJSONTyped(json);
}
function HealthcheckResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'status': HealthcheckStatus.HealthcheckStatusFromJSON(json['status']),
    };
}
function HealthcheckResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'status': HealthcheckStatus.HealthcheckStatusToJSON(value.status),
    };
}

exports.HealthcheckResponseFromJSON = HealthcheckResponseFromJSON;
exports.HealthcheckResponseFromJSONTyped = HealthcheckResponseFromJSONTyped;
exports.HealthcheckResponseToJSON = HealthcheckResponseToJSON;
