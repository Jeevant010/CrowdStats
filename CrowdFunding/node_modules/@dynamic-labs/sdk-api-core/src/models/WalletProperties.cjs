'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var EcdsaValidatorOptions = require('./EcdsaValidatorOptions.cjs');
var EmbeddedWalletVersionEnum = require('./EmbeddedWalletVersionEnum.cjs');
var HardwareWalletEnum = require('./HardwareWalletEnum.cjs');
var PasswordSourceTypeEnum = require('./PasswordSourceTypeEnum.cjs');
var ProviderEntryPointVersionEnum = require('./ProviderEntryPointVersionEnum.cjs');
var ProviderKernelVersionEnum = require('./ProviderKernelVersionEnum.cjs');
var ThresholdSignatureScheme = require('./ThresholdSignatureScheme.cjs');
var WalletKeyShareInfo = require('./WalletKeyShareInfo.cjs');

/* tslint:disable */
function WalletPropertiesFromJSON(json) {
    return WalletPropertiesFromJSONTyped(json);
}
function WalletPropertiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'turnkeySubOrganizationId': !runtime.exists(json, 'turnkeySubOrganizationId') ? undefined : json['turnkeySubOrganizationId'],
        'turnkeyPrivateKeyId': !runtime.exists(json, 'turnkeyPrivateKeyId') ? undefined : json['turnkeyPrivateKeyId'],
        'turnkeyHDWalletId': !runtime.exists(json, 'turnkeyHDWalletId') ? undefined : json['turnkeyHDWalletId'],
        'isAuthenticatorAttached': !runtime.exists(json, 'isAuthenticatorAttached') ? undefined : json['isAuthenticatorAttached'],
        'turnkeyUserId': !runtime.exists(json, 'turnkeyUserId') ? undefined : json['turnkeyUserId'],
        'isSessionKeyCompatible': !runtime.exists(json, 'isSessionKeyCompatible') ? undefined : json['isSessionKeyCompatible'],
        'version': !runtime.exists(json, 'version') ? undefined : EmbeddedWalletVersionEnum.EmbeddedWalletVersionEnumFromJSON(json['version']),
        'ecdsaProviderType': !runtime.exists(json, 'ecdsaProviderType') ? undefined : EcdsaValidatorOptions.EcdsaValidatorOptionsFromJSON(json['ecdsaProviderType']),
        'entryPointVersion': !runtime.exists(json, 'entryPointVersion') ? undefined : ProviderEntryPointVersionEnum.ProviderEntryPointVersionEnumFromJSON(json['entryPointVersion']),
        'kernelVersion': !runtime.exists(json, 'kernelVersion') ? undefined : ProviderKernelVersionEnum.ProviderKernelVersionEnumFromJSON(json['kernelVersion']),
        'hardwareWallet': !runtime.exists(json, 'hardwareWallet') ? undefined : HardwareWalletEnum.HardwareWalletEnumFromJSON(json['hardwareWallet']),
        'claimed': !runtime.exists(json, 'claimed') ? undefined : json['claimed'],
        'source': !runtime.exists(json, 'source') ? undefined : PasswordSourceTypeEnum.PasswordSourceTypeEnumFromJSON(json['source']),
        'keyShares': !runtime.exists(json, 'keyShares') ? undefined : (json['keyShares'].map(WalletKeyShareInfo.WalletKeyShareInfoFromJSON)),
        'thresholdSignatureScheme': !runtime.exists(json, 'thresholdSignatureScheme') ? undefined : ThresholdSignatureScheme.ThresholdSignatureSchemeFromJSON(json['thresholdSignatureScheme']),
        'derivationPath': !runtime.exists(json, 'derivationPath') ? undefined : json['derivationPath'],
    };
}
function WalletPropertiesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'turnkeySubOrganizationId': value.turnkeySubOrganizationId,
        'turnkeyPrivateKeyId': value.turnkeyPrivateKeyId,
        'turnkeyHDWalletId': value.turnkeyHDWalletId,
        'isAuthenticatorAttached': value.isAuthenticatorAttached,
        'turnkeyUserId': value.turnkeyUserId,
        'isSessionKeyCompatible': value.isSessionKeyCompatible,
        'version': EmbeddedWalletVersionEnum.EmbeddedWalletVersionEnumToJSON(value.version),
        'ecdsaProviderType': EcdsaValidatorOptions.EcdsaValidatorOptionsToJSON(value.ecdsaProviderType),
        'entryPointVersion': ProviderEntryPointVersionEnum.ProviderEntryPointVersionEnumToJSON(value.entryPointVersion),
        'kernelVersion': ProviderKernelVersionEnum.ProviderKernelVersionEnumToJSON(value.kernelVersion),
        'hardwareWallet': HardwareWalletEnum.HardwareWalletEnumToJSON(value.hardwareWallet),
        'claimed': value.claimed,
        'source': PasswordSourceTypeEnum.PasswordSourceTypeEnumToJSON(value.source),
        'keyShares': value.keyShares === undefined ? undefined : (value.keyShares.map(WalletKeyShareInfo.WalletKeyShareInfoToJSON)),
        'thresholdSignatureScheme': ThresholdSignatureScheme.ThresholdSignatureSchemeToJSON(value.thresholdSignatureScheme),
        'derivationPath': value.derivationPath,
    };
}

exports.WalletPropertiesFromJSON = WalletPropertiesFromJSON;
exports.WalletPropertiesFromJSONTyped = WalletPropertiesFromJSONTyped;
exports.WalletPropertiesToJSON = WalletPropertiesToJSON;
