import { CreateEmbeddedWalletParamsFromJSON, CreateEmbeddedWalletParamsToJSON } from './CreateEmbeddedWalletParams.js';

/* tslint:disable */
function CreateEmbeddedWalletsRequestFromJSON(json) {
    return CreateEmbeddedWalletsRequestFromJSONTyped(json);
}
function CreateEmbeddedWalletsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'embeddedWallets': (json['embeddedWallets'].map(CreateEmbeddedWalletParamsFromJSON)),
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
        'embeddedWallets': (value.embeddedWallets.map(CreateEmbeddedWalletParamsToJSON)),
    };
}

export { CreateEmbeddedWalletsRequestFromJSON, CreateEmbeddedWalletsRequestFromJSONTyped, CreateEmbeddedWalletsRequestToJSON };
