'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ChainConfiguration = require('./ChainConfiguration.cjs');
var Duration = require('./Duration.cjs');
var EmbeddedWalletVersionEnum = require('./EmbeddedWalletVersionEnum.cjs');
var SupportedSecurityMethods = require('./SupportedSecurityMethods.cjs');

/* tslint:disable */
function ProjectSettingsSdkEmbeddedWalletsFromJSON(json) {
    return ProjectSettingsSdkEmbeddedWalletsFromJSONTyped(json);
}
function ProjectSettingsSdkEmbeddedWalletsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'automaticEmbeddedWalletCreation': !runtime.exists(json, 'automaticEmbeddedWalletCreation') ? undefined : json['automaticEmbeddedWalletCreation'],
        'automaticEmbeddedWalletCreationForExternal': !runtime.exists(json, 'automaticEmbeddedWalletCreationForExternal') ? undefined : json['automaticEmbeddedWalletCreationForExternal'],
        'showEmbeddedWalletActionsUI': !runtime.exists(json, 'showEmbeddedWalletActionsUI') ? undefined : json['showEmbeddedWalletActionsUI'],
        'emailRecoveryEnabled': !runtime.exists(json, 'emailRecoveryEnabled') ? undefined : json['emailRecoveryEnabled'],
        'forceAuthenticatorAtSignup': !runtime.exists(json, 'forceAuthenticatorAtSignup') ? undefined : json['forceAuthenticatorAtSignup'],
        'allowSkippingAuthenticatorAtSignup': !runtime.exists(json, 'allowSkippingAuthenticatorAtSignup') ? undefined : json['allowSkippingAuthenticatorAtSignup'],
        'sessionKeyDuration': !runtime.exists(json, 'sessionKeyDuration') ? undefined : Duration.DurationFromJSON(json['sessionKeyDuration']),
        'supportedSecurityMethods': !runtime.exists(json, 'supportedSecurityMethods') ? undefined : SupportedSecurityMethods.SupportedSecurityMethodsFromJSON(json['supportedSecurityMethods']),
        'chainConfigurations': !runtime.exists(json, 'chainConfigurations') ? undefined : (json['chainConfigurations'].map(ChainConfiguration.ChainConfigurationFromJSON)),
        'domainEnabledByProvider': !runtime.exists(json, 'domainEnabledByProvider') ? undefined : json['domainEnabledByProvider'],
        'defaultWalletVersion': !runtime.exists(json, 'defaultWalletVersion') ? undefined : EmbeddedWalletVersionEnum.EmbeddedWalletVersionEnumFromJSON(json['defaultWalletVersion']),
        'promptForKeyExport': !runtime.exists(json, 'promptForKeyExport') ? undefined : json['promptForKeyExport'],
        'transactionSimulation': !runtime.exists(json, 'transactionSimulation') ? undefined : json['transactionSimulation'],
    };
}
function ProjectSettingsSdkEmbeddedWalletsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'automaticEmbeddedWalletCreation': value.automaticEmbeddedWalletCreation,
        'automaticEmbeddedWalletCreationForExternal': value.automaticEmbeddedWalletCreationForExternal,
        'showEmbeddedWalletActionsUI': value.showEmbeddedWalletActionsUI,
        'emailRecoveryEnabled': value.emailRecoveryEnabled,
        'forceAuthenticatorAtSignup': value.forceAuthenticatorAtSignup,
        'allowSkippingAuthenticatorAtSignup': value.allowSkippingAuthenticatorAtSignup,
        'sessionKeyDuration': Duration.DurationToJSON(value.sessionKeyDuration),
        'supportedSecurityMethods': SupportedSecurityMethods.SupportedSecurityMethodsToJSON(value.supportedSecurityMethods),
        'chainConfigurations': value.chainConfigurations === undefined ? undefined : (value.chainConfigurations.map(ChainConfiguration.ChainConfigurationToJSON)),
        'domainEnabledByProvider': value.domainEnabledByProvider,
        'defaultWalletVersion': EmbeddedWalletVersionEnum.EmbeddedWalletVersionEnumToJSON(value.defaultWalletVersion),
        'promptForKeyExport': value.promptForKeyExport,
        'transactionSimulation': value.transactionSimulation,
    };
}

exports.ProjectSettingsSdkEmbeddedWalletsFromJSON = ProjectSettingsSdkEmbeddedWalletsFromJSON;
exports.ProjectSettingsSdkEmbeddedWalletsFromJSONTyped = ProjectSettingsSdkEmbeddedWalletsFromJSONTyped;
exports.ProjectSettingsSdkEmbeddedWalletsToJSON = ProjectSettingsSdkEmbeddedWalletsToJSON;
