'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TurnkeySignedRequest = require('./TurnkeySignedRequest.cjs');

/* tslint:disable */
function UpdateRecoveryEmailRequestFromJSON(json) {
    return UpdateRecoveryEmailRequestFromJSONTyped(json);
}
function UpdateRecoveryEmailRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'turnkeySignedRequest': TurnkeySignedRequest.TurnkeySignedRequestFromJSON(json['turnkeySignedRequest']),
    };
}
function UpdateRecoveryEmailRequestToJSON(value) {
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

exports.UpdateRecoveryEmailRequestFromJSON = UpdateRecoveryEmailRequestFromJSON;
exports.UpdateRecoveryEmailRequestFromJSONTyped = UpdateRecoveryEmailRequestFromJSONTyped;
exports.UpdateRecoveryEmailRequestToJSON = UpdateRecoveryEmailRequestToJSON;
