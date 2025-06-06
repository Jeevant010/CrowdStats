import { exists } from '../runtime.js';
import { ChainConfigurationFromJSON, ChainConfigurationToJSON } from './ChainConfiguration.js';
import { DurationFromJSON, DurationToJSON } from './Duration.js';
import { EmbeddedWalletVersionEnumFromJSON, EmbeddedWalletVersionEnumToJSON } from './EmbeddedWalletVersionEnum.js';
import { SupportedSecurityMethodsFromJSON, SupportedSecurityMethodsToJSON } from './SupportedSecurityMethods.js';

/* tslint:disable */
function ProjectSettingsSdkEmbeddedWalletsFromJSON(json) {
    return ProjectSettingsSdkEmbeddedWalletsFromJSONTyped(json);
}
function ProjectSettingsSdkEmbeddedWalletsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'automaticEmbeddedWalletCreation': !exists(json, 'automaticEmbeddedWalletCreation') ? undefined : json['automaticEmbeddedWalletCreation'],
        'automaticEmbeddedWalletCreationForExternal': !exists(json, 'automaticEmbeddedWalletCreationForExternal') ? undefined : json['automaticEmbeddedWalletCreationForExternal'],
        'showEmbeddedWalletActionsUI': !exists(json, 'showEmbeddedWalletActionsUI') ? undefined : json['showEmbeddedWalletActionsUI'],
        'emailRecoveryEnabled': !exists(json, 'emailRecoveryEnabled') ? undefined : json['emailRecoveryEnabled'],
        'forceAuthenticatorAtSignup': !exists(json, 'forceAuthenticatorAtSignup') ? undefined : json['forceAuthenticatorAtSignup'],
        'allowSkippingAuthenticatorAtSignup': !exists(json, 'allowSkippingAuthenticatorAtSignup') ? undefined : json['allowSkippingAuthenticatorAtSignup'],
        'sessionKeyDuration': !exists(json, 'sessionKeyDuration') ? undefined : DurationFromJSON(json['sessionKeyDuration']),
        'supportedSecurityMethods': !exists(json, 'supportedSecurityMethods') ? undefined : SupportedSecurityMethodsFromJSON(json['supportedSecurityMethods']),
        'chainConfigurations': !exists(json, 'chainConfigurations') ? undefined : (json['chainConfigurations'].map(ChainConfigurationFromJSON)),
        'domainEnabledByProvider': !exists(json, 'domainEnabledByProvider') ? undefined : json['domainEnabledByProvider'],
        'defaultWalletVersion': !exists(json, 'defaultWalletVersion') ? undefined : EmbeddedWalletVersionEnumFromJSON(json['defaultWalletVersion']),
        'promptForKeyExport': !exists(json, 'promptForKeyExport') ? undefined : json['promptForKeyExport'],
        'transactionSimulation': !exists(json, 'transactionSimulation') ? undefined : json['transactionSimulation'],
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
        'sessionKeyDuration': DurationToJSON(value.sessionKeyDuration),
        'supportedSecurityMethods': SupportedSecurityMethodsToJSON(value.supportedSecurityMethods),
        'chainConfigurations': value.chainConfigurations === undefined ? undefined : (value.chainConfigurations.map(ChainConfigurationToJSON)),
        'domainEnabledByProvider': value.domainEnabledByProvider,
        'defaultWalletVersion': EmbeddedWalletVersionEnumToJSON(value.defaultWalletVersion),
        'promptForKeyExport': value.promptForKeyExport,
        'transactionSimulation': value.transactionSimulation,
    };
}

export { ProjectSettingsSdkEmbeddedWalletsFromJSON, ProjectSettingsSdkEmbeddedWalletsFromJSONTyped, ProjectSettingsSdkEmbeddedWalletsToJSON };
