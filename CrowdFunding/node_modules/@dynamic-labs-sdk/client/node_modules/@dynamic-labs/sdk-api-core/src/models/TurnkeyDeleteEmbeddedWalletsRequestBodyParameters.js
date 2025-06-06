import { exists } from '../runtime.js';

/* tslint:disable */
function TurnkeyDeleteEmbeddedWalletsRequestBodyParametersFromJSON(json) {
    return TurnkeyDeleteEmbeddedWalletsRequestBodyParametersFromJSONTyped(json);
}
function TurnkeyDeleteEmbeddedWalletsRequestBodyParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletIds': json['walletIds'],
        'deleteWithoutExport': !exists(json, 'deleteWithoutExport') ? undefined : json['deleteWithoutExport'],
    };
}
function TurnkeyDeleteEmbeddedWalletsRequestBodyParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'walletIds': value.walletIds,
        'deleteWithoutExport': value.deleteWithoutExport,
    };
}

export { TurnkeyDeleteEmbeddedWalletsRequestBodyParametersFromJSON, TurnkeyDeleteEmbeddedWalletsRequestBodyParametersFromJSONTyped, TurnkeyDeleteEmbeddedWalletsRequestBodyParametersToJSON };
