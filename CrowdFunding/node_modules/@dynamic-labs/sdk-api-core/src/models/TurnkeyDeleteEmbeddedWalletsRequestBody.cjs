'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TurnkeyDeleteEmbeddedWalletsRequestBodyParameters = require('./TurnkeyDeleteEmbeddedWalletsRequestBodyParameters.cjs');

/* tslint:disable */
function TurnkeyDeleteEmbeddedWalletsRequestBodyFromJSON(json) {
    return TurnkeyDeleteEmbeddedWalletsRequestBodyFromJSONTyped(json);
}
function TurnkeyDeleteEmbeddedWalletsRequestBodyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'organizationId': json['organizationId'],
        'parameters': TurnkeyDeleteEmbeddedWalletsRequestBodyParameters.TurnkeyDeleteEmbeddedWalletsRequestBodyParametersFromJSON(json['parameters']),
        'timestampMs': json['timestampMs'],
        'type': json['type'],
    };
}
function TurnkeyDeleteEmbeddedWalletsRequestBodyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'organizationId': value.organizationId,
        'parameters': TurnkeyDeleteEmbeddedWalletsRequestBodyParameters.TurnkeyDeleteEmbeddedWalletsRequestBodyParametersToJSON(value.parameters),
        'timestampMs': value.timestampMs,
        'type': value.type,
    };
}

exports.TurnkeyDeleteEmbeddedWalletsRequestBodyFromJSON = TurnkeyDeleteEmbeddedWalletsRequestBodyFromJSON;
exports.TurnkeyDeleteEmbeddedWalletsRequestBodyFromJSONTyped = TurnkeyDeleteEmbeddedWalletsRequestBodyFromJSONTyped;
exports.TurnkeyDeleteEmbeddedWalletsRequestBodyToJSON = TurnkeyDeleteEmbeddedWalletsRequestBodyToJSON;
