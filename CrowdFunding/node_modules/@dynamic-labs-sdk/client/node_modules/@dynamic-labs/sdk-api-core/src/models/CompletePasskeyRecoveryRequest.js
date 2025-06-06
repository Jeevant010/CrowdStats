import { PasskeyRegistrationCredentialFromJSON, PasskeyRegistrationCredentialToJSON } from './PasskeyRegistrationCredential.js';

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
        'attestation': PasskeyRegistrationCredentialFromJSON(json['attestation']),
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
        'attestation': PasskeyRegistrationCredentialToJSON(value.attestation),
        'challenge': value.challenge,
    };
}

export { CompletePasskeyRecoveryRequestFromJSON, CompletePasskeyRecoveryRequestFromJSONTyped, CompletePasskeyRecoveryRequestToJSON };
