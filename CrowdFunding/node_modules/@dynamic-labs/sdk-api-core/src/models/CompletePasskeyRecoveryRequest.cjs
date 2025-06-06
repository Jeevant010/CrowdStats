'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PasskeyRegistrationCredential = require('./PasskeyRegistrationCredential.cjs');

/* tslint:disable */
function CompletePasskeyRecoveryRequestFromJSON(json) {
    return CompletePasskeyRecoveryRequestFromJSONTyped(json);
}
function CompletePasskeyRecoveryRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletId': json['walletId'],
        'attestation': PasskeyRegistrationCredential.PasskeyRegistrationCredentialFromJSON(json['attestation']),
        'challenge': json['challenge'],
    };
}
function CompletePasskeyRecoveryRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'walletId': value.walletId,
        'attestation': PasskeyRegistrationCredential.PasskeyRegistrationCredentialToJSON(value.attestation),
        'challenge': value.challenge,
    };
}

exports.CompletePasskeyRecoveryRequestFromJSON = CompletePasskeyRecoveryRequestFromJSON;
exports.CompletePasskeyRecoveryRequestFromJSONTyped = CompletePasskeyRecoveryRequestFromJSONTyped;
exports.CompletePasskeyRecoveryRequestToJSON = CompletePasskeyRecoveryRequestToJSON;
