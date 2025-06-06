import { PasskeyRegistrationCredentialFromJSON, PasskeyRegistrationCredentialToJSON } from './PasskeyRegistrationCredential.js';

/* tslint:disable */
function CreateTurnkeyEmbeddedWalletSpecificOptsFromJSON(json) {
    return CreateTurnkeyEmbeddedWalletSpecificOptsFromJSONTyped(json);
}
function CreateTurnkeyEmbeddedWalletSpecificOptsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attestation': PasskeyRegistrationCredentialFromJSON(json['attestation']),
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
        'attestation': PasskeyRegistrationCredentialToJSON(value.attestation),
        'challenge': value.challenge,
    };
}

export { CreateTurnkeyEmbeddedWalletSpecificOptsFromJSON, CreateTurnkeyEmbeddedWalletSpecificOptsFromJSONTyped, CreateTurnkeyEmbeddedWalletSpecificOptsToJSON };
