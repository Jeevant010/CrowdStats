'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

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
        'deleteWithoutExport': !runtime.exists(json, 'deleteWithoutExport') ? undefined : json['deleteWithoutExport'],
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

exports.TurnkeyDeleteEmbeddedWalletsRequestBodyParametersFromJSON = TurnkeyDeleteEmbeddedWalletsRequestBodyParametersFromJSON;
exports.TurnkeyDeleteEmbeddedWalletsRequestBodyParametersFromJSONTyped = TurnkeyDeleteEmbeddedWalletsRequestBodyParametersFromJSONTyped;
exports.TurnkeyDeleteEmbeddedWalletsRequestBodyParametersToJSON = TurnkeyDeleteEmbeddedWalletsRequestBodyParametersToJSON;
