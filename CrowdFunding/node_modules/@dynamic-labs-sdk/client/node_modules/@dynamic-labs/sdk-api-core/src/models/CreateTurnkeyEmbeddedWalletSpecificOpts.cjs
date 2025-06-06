'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PasskeyRegistrationCredential = require('./PasskeyRegistrationCredential.cjs');

/* tslint:disable */
function CreateTurnkeyEmbeddedWalletSpecificOptsFromJSON(json) {
    return CreateTurnkeyEmbeddedWalletSpecificOptsFromJSONTyped(json);
}
function CreateTurnkeyEmbeddedWalletSpecificOptsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attestation': PasskeyRegistrationCredential.PasskeyRegistrationCredentialFromJSON(json['attestation']),
        'challenge': json['challenge'],
    };
}
function CreateTurnkeyEmbeddedWalletSpecificOptsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attestation': PasskeyRegistrationCredential.PasskeyRegistrationCredentialToJSON(value.attestation),
        'challenge': value.challenge,
    };
}

exports.CreateTurnkeyEmbeddedWalletSpecificOptsFromJSON = CreateTurnkeyEmbeddedWalletSpecificOptsFromJSON;
exports.CreateTurnkeyEmbeddedWalletSpecificOptsFromJSONTyped = CreateTurnkeyEmbeddedWalletSpecificOptsFromJSONTyped;
exports.CreateTurnkeyEmbeddedWalletSpecificOptsToJSON = CreateTurnkeyEmbeddedWalletSpecificOptsToJSON;
