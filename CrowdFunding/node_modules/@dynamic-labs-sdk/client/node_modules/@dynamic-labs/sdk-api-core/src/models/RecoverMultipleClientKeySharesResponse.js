import { WalletKeyShareInfoWithEncryptedAccountCredentialFromJSON, WalletKeyShareInfoWithEncryptedAccountCredentialToJSON } from './WalletKeyShareInfoWithEncryptedAccountCredential.js';

/* tslint:disable */
function RecoverMultipleClientKeySharesResponseFromJSON(json) {
    return RecoverMultipleClientKeySharesResponseFromJSONTyped(json);
}
function RecoverMultipleClientKeySharesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'keyShares': (json['keyShares'].map(WalletKeyShareInfoWithEncryptedAccountCredentialFromJSON)),
    };
}
function RecoverMultipleClientKeySharesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'keyShares': (value.keyShares.map(WalletKeyShareInfoWithEncryptedAccountCredentialToJSON)),
    };
}

export { RecoverMultipleClientKeySharesResponseFromJSON, RecoverMultipleClientKeySharesResponseFromJSONTyped, RecoverMultipleClientKeySharesResponseToJSON };
