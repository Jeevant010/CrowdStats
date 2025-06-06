import { exists } from '../runtime.js';

/* tslint:disable */
function VerifyUnlinkRequestFromJSON(json) {
    return VerifyUnlinkRequestFromJSONTyped(json);
}
function VerifyUnlinkRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletId': !exists(json, 'walletId') ? undefined : json['walletId'],
        'verifiedCrentialId': !exists(json, 'verifiedCrentialId') ? undefined : json['verifiedCrentialId'],
        'primaryWalletId': !exists(json, 'primaryWalletId') ? undefined : json['primaryWalletId'],
    };
}
function VerifyUnlinkRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'walletId': value.walletId,
        'verifiedCrentialId': value.verifiedCrentialId,
        'primaryWalletId': value.primaryWalletId,
    };
}

export { VerifyUnlinkRequestFromJSON, VerifyUnlinkRequestFromJSONTyped, VerifyUnlinkRequestToJSON };
