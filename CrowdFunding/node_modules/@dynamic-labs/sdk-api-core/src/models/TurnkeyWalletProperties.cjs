'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var EcdsaValidatorOptions = require('./EcdsaValidatorOptions.cjs');
var EmbeddedWalletVersionEnum = require('./EmbeddedWalletVersionEnum.cjs');
var ProviderEntryPointVersionEnum = require('./ProviderEntryPointVersionEnum.cjs');
var ProviderKernelVersionEnum = require('./ProviderKernelVersionEnum.cjs');

/* tslint:disable */
function TurnkeyWalletPropertiesFromJSON(json) {
    return TurnkeyWalletPropertiesFromJSONTyped(json);
}
function TurnkeyWalletPropertiesFromJSONTyped(json, ignoreDiscriminator) {
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
    };
}
function TurnkeyWalletPropertiesToJSON(value) {
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
    };
}

exports.TurnkeyWalletPropertiesFromJSON = TurnkeyWalletPropertiesFromJSON;
exports.TurnkeyWalletPropertiesFromJSONTyped = TurnkeyWalletPropertiesFromJSONTyped;
exports.TurnkeyWalletPropertiesToJSON = TurnkeyWalletPropertiesToJSON;
