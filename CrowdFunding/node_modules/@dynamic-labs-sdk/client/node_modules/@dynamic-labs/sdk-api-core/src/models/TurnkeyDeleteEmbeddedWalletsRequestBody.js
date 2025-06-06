import { TurnkeyDeleteEmbeddedWalletsRequestBodyParametersFromJSON, TurnkeyDeleteEmbeddedWalletsRequestBodyParametersToJSON } from './TurnkeyDeleteEmbeddedWalletsRequestBodyParameters.js';

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
        'parameters': TurnkeyDeleteEmbeddedWalletsRequestBodyParametersFromJSON(json['parameters']),
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
        'parameters': TurnkeyDeleteEmbeddedWalletsRequestBodyParametersToJSON(value.parameters),
        'timestampMs': value.timestampMs,
        'type': value.type,
    };
}

export { TurnkeyDeleteEmbeddedWalletsRequestBodyFromJSON, TurnkeyDeleteEmbeddedWalletsRequestBodyFromJSONTyped, TurnkeyDeleteEmbeddedWalletsRequestBodyToJSON };
