import { TurnkeySignedRequestFromJSON, TurnkeySignedRequestToJSON } from './TurnkeySignedRequest.js';

/* tslint:disable */
function DeleteEmbeddedWalletsRequestFromJSON(json) {
    return DeleteEmbeddedWalletsRequestFromJSONTyped(json);
}
function DeleteEmbeddedWalletsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'turnkeySignedRequest': TurnkeySignedRequestFromJSON(json['turnkeySignedRequest']),
    };
}
function DeleteEmbeddedWalletsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'turnkeySignedRequest': TurnkeySignedRequestToJSON(value.turnkeySignedRequest),
    };
}

export { DeleteEmbeddedWalletsRequestFromJSON, DeleteEmbeddedWalletsRequestFromJSONTyped, DeleteEmbeddedWalletsRequestToJSON };
