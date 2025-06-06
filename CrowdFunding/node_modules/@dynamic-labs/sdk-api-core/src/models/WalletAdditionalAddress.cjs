'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var WalletAddressType = require('./WalletAddressType.cjs');

/* tslint:disable */
function WalletAdditionalAddressFromJSON(json) {
    return WalletAdditionalAddressFromJSONTyped(json);
}
function WalletAdditionalAddressFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'publicKey': !runtime.exists(json, 'publicKey') ? undefined : json['publicKey'],
        'type': WalletAddressType.WalletAddressTypeFromJSON(json['type']),
    };
}
function WalletAdditionalAddressToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'publicKey': value.publicKey,
        'type': WalletAddressType.WalletAddressTypeToJSON(value.type),
    };
}

exports.WalletAdditionalAddressFromJSON = WalletAdditionalAddressFromJSON;
exports.WalletAdditionalAddressFromJSONTyped = WalletAdditionalAddressFromJSONTyped;
exports.WalletAdditionalAddressToJSON = WalletAdditionalAddressToJSON;
