import { WalletKeyShareInfoFromJSON, WalletKeyShareInfoToJSON } from './WalletKeyShareInfo.js';

/* tslint:disable */
function BackupMultipleClientKeySharesResponseFromJSON(json) {
    return BackupMultipleClientKeySharesResponseFromJSONTyped(json);
}
function BackupMultipleClientKeySharesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'keyShares': (json['keyShares'].map(WalletKeyShareInfoFromJSON)),
    };
}
function BackupMultipleClientKeySharesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'keyShares': (value.keyShares.map(WalletKeyShareInfoToJSON)),
    };
}

export { BackupMultipleClientKeySharesResponseFromJSON, BackupMultipleClientKeySharesResponseFromJSONTyped, BackupMultipleClientKeySharesResponseToJSON };
