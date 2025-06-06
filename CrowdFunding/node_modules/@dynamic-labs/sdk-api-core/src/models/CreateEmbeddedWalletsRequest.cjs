'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var CreateEmbeddedWalletParams = require('./CreateEmbeddedWalletParams.cjs');

/* tslint:disable */
function CreateEmbeddedWalletsRequestFromJSON(json) {
    return CreateEmbeddedWalletsRequestFromJSONTyped(json);
}
function CreateEmbeddedWalletsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'embeddedWallets': (json['embeddedWallets'].map(CreateEmbeddedWalletParams.CreateEmbeddedWalletParamsFromJSON)),
    };
}
function CreateEmbeddedWalletsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'embeddedWallets': (value.embeddedWallets.map(CreateEmbeddedWalletParams.CreateEmbeddedWalletParamsToJSON)),
    };
}

exports.CreateEmbeddedWalletsRequestFromJSON = CreateEmbeddedWalletsRequestFromJSON;
exports.CreateEmbeddedWalletsRequestFromJSONTyped = CreateEmbeddedWalletsRequestFromJSONTyped;
exports.CreateEmbeddedWalletsRequestToJSON = CreateEmbeddedWalletsRequestToJSON;
