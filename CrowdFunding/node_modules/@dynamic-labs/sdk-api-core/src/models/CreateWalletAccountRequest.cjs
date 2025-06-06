'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TurnkeySignedRequest = require('./TurnkeySignedRequest.cjs');

/* tslint:disable */
function CreateWalletAccountRequestFromJSON(json) {
    return CreateWalletAccountRequestFromJSONTyped(json);
}
function CreateWalletAccountRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'turnkeySignedRequest': TurnkeySignedRequest.TurnkeySignedRequestFromJSON(json['turnkeySignedRequest']),
    };
}
function CreateWalletAccountRequestToJSON(value) {
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

exports.CreateWalletAccountRequestFromJSON = CreateWalletAccountRequestFromJSON;
exports.CreateWalletAccountRequestFromJSONTyped = CreateWalletAccountRequestFromJSONTyped;
exports.CreateWalletAccountRequestToJSON = CreateWalletAccountRequestToJSON;
