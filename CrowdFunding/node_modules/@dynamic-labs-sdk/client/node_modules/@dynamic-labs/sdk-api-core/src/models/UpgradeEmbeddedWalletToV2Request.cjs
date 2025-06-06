'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function UpgradeEmbeddedWalletToV2RequestFromJSON(json) {
    return UpgradeEmbeddedWalletToV2RequestFromJSONTyped(json);
}
function UpgradeEmbeddedWalletToV2RequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'sessionPublicKey': !runtime.exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
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

exports.UpgradeEmbeddedWalletToV2RequestFromJSON = UpgradeEmbeddedWalletToV2RequestFromJSON;
exports.UpgradeEmbeddedWalletToV2RequestFromJSONTyped = UpgradeEmbeddedWalletToV2RequestFromJSONTyped;
exports.UpgradeEmbeddedWalletToV2RequestToJSON = UpgradeEmbeddedWalletToV2RequestToJSON;
