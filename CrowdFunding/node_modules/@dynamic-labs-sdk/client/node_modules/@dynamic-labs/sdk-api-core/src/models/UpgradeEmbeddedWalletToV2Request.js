import { exists } from '../runtime.js';

/* tslint:disable */
function UpgradeEmbeddedWalletToV2RequestFromJSON(json) {
    return UpgradeEmbeddedWalletToV2RequestFromJSONTyped(json);
}
function UpgradeEmbeddedWalletToV2RequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'sessionPublicKey': !exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
    };
}
function UpgradeEmbeddedWalletToV2RequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sessionPublicKey': value.sessionPublicKey,
    };
}

export { UpgradeEmbeddedWalletToV2RequestFromJSON, UpgradeEmbeddedWalletToV2RequestFromJSONTyped, UpgradeEmbeddedWalletToV2RequestToJSON };
