import { exists } from '../runtime.js';

/* tslint:disable */
function WalletKeyShareInfoWithEncryptedAccountCredentialAllOfFromJSON(json) {
    return WalletKeyShareInfoWithEncryptedAccountCredentialAllOfFromJSONTyped(json);
}
function WalletKeyShareInfoWithEncryptedAccountCredentialAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'encryptedAccountCredential': !exists(json, 'encryptedAccountCredential') ? undefined : json['encryptedAccountCredential'],
    };
}
function WalletKeyShareInfoWithEncryptedAccountCredentialAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'encryptedAccountCredential': value.encryptedAccountCredential,
    };
}

export { WalletKeyShareInfoWithEncryptedAccountCredentialAllOfFromJSON, WalletKeyShareInfoWithEncryptedAccountCredentialAllOfFromJSONTyped, WalletKeyShareInfoWithEncryptedAccountCredentialAllOfToJSON };
