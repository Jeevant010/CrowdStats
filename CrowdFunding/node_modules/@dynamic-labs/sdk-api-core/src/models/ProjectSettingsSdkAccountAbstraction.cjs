'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function ProjectSettingsSdkAccountAbstractionFromJSON(json) {
    return ProjectSettingsSdkAccountAbstractionFromJSONTyped(json);
}
function ProjectSettingsSdkAccountAbstractionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allWallets': !runtime.exists(json, 'allWallets') ? undefined : json['allWallets'],
        'allUsers': !runtime.exists(json, 'allUsers') ? undefined : json['allUsers'],
        'separateSmartWalletAndSigner': !runtime.exists(json, 'separateSmartWalletAndSigner') ? undefined : json['separateSmartWalletAndSigner'],
        'enablePasskeys': !runtime.exists(json, 'enablePasskeys') ? undefined : json['enablePasskeys'],
    };
}
function ProjectSettingsSdkAccountAbstractionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allWallets': value.allWallets,
        'allUsers': value.allUsers,
        'separateSmartWalletAndSigner': value.separateSmartWalletAndSigner,
        'enablePasskeys': value.enablePasskeys,
    };
}

exports.ProjectSettingsSdkAccountAbstractionFromJSON = ProjectSettingsSdkAccountAbstractionFromJSON;
exports.ProjectSettingsSdkAccountAbstractionFromJSONTyped = ProjectSettingsSdkAccountAbstractionFromJSONTyped;
exports.ProjectSettingsSdkAccountAbstractionToJSON = ProjectSettingsSdkAccountAbstractionToJSON;
