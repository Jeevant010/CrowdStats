'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TurnkeySignedRequest = require('./TurnkeySignedRequest.cjs');

/* tslint:disable */
function DeleteEmbeddedWalletsRequestFromJSON(json) {
    return DeleteEmbeddedWalletsRequestFromJSONTyped(json);
}
function DeleteEmbeddedWalletsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'turnkeySignedRequest': TurnkeySignedRequest.TurnkeySignedRequestFromJSON(json['turnkeySignedRequest']),
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
        'turnkeySignedRequest': TurnkeySignedRequest.TurnkeySignedRequestToJSON(value.turnkeySignedRequest),
    };
}

exports.DeleteEmbeddedWalletsRequestFromJSON = DeleteEmbeddedWalletsRequestFromJSON;
exports.DeleteEmbeddedWalletsRequestFromJSONTyped = DeleteEmbeddedWalletsRequestFromJSONTyped;
exports.DeleteEmbeddedWalletsRequestToJSON = DeleteEmbeddedWalletsRequestToJSON;
