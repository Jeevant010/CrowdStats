'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var HardwareWalletEnum = require('./HardwareWalletEnum.cjs');

/* tslint:disable */
function HardwareWalletPropertiesFromJSON(json) {
    return HardwareWalletPropertiesFromJSONTyped(json);
}
function HardwareWalletPropertiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hardwareWallet': !runtime.exists(json, 'hardwareWallet') ? undefined : HardwareWalletEnum.HardwareWalletEnumFromJSON(json['hardwareWallet']),
    };
}
function HardwareWalletPropertiesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hardwareWallet': HardwareWalletEnum.HardwareWalletEnumToJSON(value.hardwareWallet),
    };
}

exports.HardwareWalletPropertiesFromJSON = HardwareWalletPropertiesFromJSON;
exports.HardwareWalletPropertiesFromJSONTyped = HardwareWalletPropertiesFromJSONTyped;
exports.HardwareWalletPropertiesToJSON = HardwareWalletPropertiesToJSON;
