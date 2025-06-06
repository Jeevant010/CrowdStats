'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function SimulateUserOpRequestFromJSON(json) {
    return SimulateUserOpRequestFromJSONTyped(json);
}
function SimulateUserOpRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainId': json['chainId'],
        'operation': json['operation'],
        'entryPoint': json['entryPoint'],
        'domain': !runtime.exists(json, 'domain') ? undefined : json['domain'],
        'value': json['value'],
    };
}
function SimulateUserOpRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chainId': value.chainId,
        'operation': value.operation,
        'entryPoint': value.entryPoint,
        'domain': value.domain,
        'value': value.value,
    };
}

exports.SimulateUserOpRequestFromJSON = SimulateUserOpRequestFromJSON;
exports.SimulateUserOpRequestFromJSONTyped = SimulateUserOpRequestFromJSONTyped;
exports.SimulateUserOpRequestToJSON = SimulateUserOpRequestToJSON;
