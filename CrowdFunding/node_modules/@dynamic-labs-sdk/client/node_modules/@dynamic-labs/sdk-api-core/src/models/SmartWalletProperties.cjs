'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var EcdsaValidatorOptions = require('./EcdsaValidatorOptions.cjs');
var ProviderEntryPointVersionEnum = require('./ProviderEntryPointVersionEnum.cjs');
var ProviderKernelVersionEnum = require('./ProviderKernelVersionEnum.cjs');

/* tslint:disable */
function SmartWalletPropertiesFromJSON(json) {
    return SmartWalletPropertiesFromJSONTyped(json);
}
function SmartWalletPropertiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'entryPointVersion': !runtime.exists(json, 'entryPointVersion') ? undefined : ProviderEntryPointVersionEnum.ProviderEntryPointVersionEnumFromJSON(json['entryPointVersion']),
        'kernelVersion': !runtime.exists(json, 'kernelVersion') ? undefined : ProviderKernelVersionEnum.ProviderKernelVersionEnumFromJSON(json['kernelVersion']),
        'ecdsaProviderType': !runtime.exists(json, 'ecdsaProviderType') ? undefined : EcdsaValidatorOptions.EcdsaValidatorOptionsFromJSON(json['ecdsaProviderType']),
    };
}
function SmartWalletPropertiesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'entryPointVersion': ProviderEntryPointVersionEnum.ProviderEntryPointVersionEnumToJSON(value.entryPointVersion),
        'kernelVersion': ProviderKernelVersionEnum.ProviderKernelVersionEnumToJSON(value.kernelVersion),
        'ecdsaProviderType': EcdsaValidatorOptions.EcdsaValidatorOptionsToJSON(value.ecdsaProviderType),
    };
}

exports.SmartWalletPropertiesFromJSON = SmartWalletPropertiesFromJSON;
exports.SmartWalletPropertiesFromJSONTyped = SmartWalletPropertiesFromJSONTyped;
exports.SmartWalletPropertiesToJSON = SmartWalletPropertiesToJSON;
