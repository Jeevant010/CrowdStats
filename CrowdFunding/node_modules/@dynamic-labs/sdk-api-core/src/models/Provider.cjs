'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var EcdsaValidatorOptions = require('./EcdsaValidatorOptions.cjs');
var ProviderAgreement = require('./ProviderAgreement.cjs');
var ProviderEntryPointVersionEnum = require('./ProviderEntryPointVersionEnum.cjs');
var ProviderEnum = require('./ProviderEnum.cjs');
var ProviderKernelVersionEnum = require('./ProviderKernelVersionEnum.cjs');
var ProviderMultichainAccountAbstractionProviders = require('./ProviderMultichainAccountAbstractionProviders.cjs');
var SmsCountryCode = require('./SmsCountryCode.cjs');
var ZerodevBundlerProvider = require('./ZerodevBundlerProvider.cjs');

/* tslint:disable */
function ProviderFromJSON(json) {
    return ProviderFromJSONTyped(json);
}
function ProviderFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !runtime.exists(json, 'id') ? undefined : json['id'],
        'provider': ProviderEnum.ProviderEnumFromJSON(json['provider']),
        'enabledAt': !runtime.exists(json, 'enabledAt') ? undefined : (json['enabledAt'] === null ? null : new Date(json['enabledAt'])),
        'clientId': !runtime.exists(json, 'clientId') ? undefined : json['clientId'],
        'clientSecret': !runtime.exists(json, 'clientSecret') ? undefined : json['clientSecret'],
        'providerProjectId': !runtime.exists(json, 'providerProjectId') ? undefined : json['providerProjectId'],
        'authorizationUrl': !runtime.exists(json, 'authorizationUrl') ? undefined : json['authorizationUrl'],
        'redirectUrl': !runtime.exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
        'defaultChainId': !runtime.exists(json, 'defaultChainId') ? undefined : json['defaultChainId'],
        'defaultChain': !runtime.exists(json, 'defaultChain') ? undefined : json['defaultChain'],
        'keyExportUrl': !runtime.exists(json, 'keyExportUrl') ? undefined : json['keyExportUrl'],
        'termsAcceptedByUser': !runtime.exists(json, 'termsAcceptedByUser') ? undefined : ProviderAgreement.ProviderAgreementFromJSON(json['termsAcceptedByUser']),
        'scopes': !runtime.exists(json, 'scopes') ? undefined : json['scopes'],
        'baseAuthUrl': !runtime.exists(json, 'baseAuthUrl') ? undefined : json['baseAuthUrl'],
        'appleKeyId': !runtime.exists(json, 'appleKeyId') ? undefined : json['appleKeyId'],
        'appleTeamId': !runtime.exists(json, 'appleTeamId') ? undefined : json['appleTeamId'],
        'shopifyStore': !runtime.exists(json, 'shopifyStore') ? undefined : json['shopifyStore'],
        'accountSid': !runtime.exists(json, 'accountSid') ? undefined : json['accountSid'],
        'twilioNumber': !runtime.exists(json, 'twilioNumber') ? undefined : json['twilioNumber'],
        'enabledCountries': !runtime.exists(json, 'enabledCountries') ? undefined : (json['enabledCountries'].map(SmsCountryCode.SmsCountryCodeFromJSON)),
        'entryPointVersion': !runtime.exists(json, 'entryPointVersion') ? undefined : ProviderEntryPointVersionEnum.ProviderEntryPointVersionEnumFromJSON(json['entryPointVersion']),
        'kernelVersion': !runtime.exists(json, 'kernelVersion') ? undefined : ProviderKernelVersionEnum.ProviderKernelVersionEnumFromJSON(json['kernelVersion']),
        'factoryAddress': !runtime.exists(json, 'factoryAddress') ? undefined : json['factoryAddress'],
        'paymasterAddress': !runtime.exists(json, 'paymasterAddress') ? undefined : json['paymasterAddress'],
        'passkeyAddress': !runtime.exists(json, 'passkeyAddress') ? undefined : json['passkeyAddress'],
        'sessionAddress': !runtime.exists(json, 'sessionAddress') ? undefined : json['sessionAddress'],
        'salt': !runtime.exists(json, 'salt') ? undefined : json['salt'],
        'multichainAccountAbstractionProviders': !runtime.exists(json, 'multichainAccountAbstractionProviders') ? undefined : (json['multichainAccountAbstractionProviders'].map(ProviderMultichainAccountAbstractionProviders.ProviderMultichainAccountAbstractionProvidersFromJSON)),
        'ecdsaProviderType': !runtime.exists(json, 'ecdsaProviderType') ? undefined : EcdsaValidatorOptions.EcdsaValidatorOptionsFromJSON(json['ecdsaProviderType']),
        'createNewAccounts': !runtime.exists(json, 'createNewAccounts') ? undefined : json['createNewAccounts'],
        'enableKernelV3Migration': !runtime.exists(json, 'enableKernelV3Migration') ? undefined : json['enableKernelV3Migration'],
        'enableEIP7702': !runtime.exists(json, 'enableEIP7702') ? undefined : json['enableEIP7702'],
        'zerodevBundlerProvider': !runtime.exists(json, 'zerodevBundlerProvider') ? undefined : ZerodevBundlerProvider.ZerodevBundlerProviderFromJSON(json['zerodevBundlerProvider']),
        'zerodevBundlerRpcUrl': !runtime.exists(json, 'zerodevBundlerRpcUrl') ? undefined : json['zerodevBundlerRpcUrl'],
        'zerodevPaymasterRpcUrl': !runtime.exists(json, 'zerodevPaymasterRpcUrl') ? undefined : json['zerodevPaymasterRpcUrl'],
        'zerodevKernelDelegationAddress': !runtime.exists(json, 'zerodevKernelDelegationAddress') ? undefined : json['zerodevKernelDelegationAddress'],
    };
}
function ProviderToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'provider': ProviderEnum.ProviderEnumToJSON(value.provider),
        'enabledAt': value.enabledAt === undefined ? undefined : (value.enabledAt === null ? null : value.enabledAt.toISOString()),
        'clientId': value.clientId,
        'clientSecret': value.clientSecret,
        'providerProjectId': value.providerProjectId,
        'authorizationUrl': value.authorizationUrl,
        'redirectUrl': value.redirectUrl,
        'defaultChainId': value.defaultChainId,
        'defaultChain': value.defaultChain,
        'keyExportUrl': value.keyExportUrl,
        'termsAcceptedByUser': ProviderAgreement.ProviderAgreementToJSON(value.termsAcceptedByUser),
        'scopes': value.scopes,
        'baseAuthUrl': value.baseAuthUrl,
        'appleKeyId': value.appleKeyId,
        'appleTeamId': value.appleTeamId,
        'shopifyStore': value.shopifyStore,
        'accountSid': value.accountSid,
        'twilioNumber': value.twilioNumber,
        'enabledCountries': value.enabledCountries === undefined ? undefined : (value.enabledCountries.map(SmsCountryCode.SmsCountryCodeToJSON)),
        'entryPointVersion': ProviderEntryPointVersionEnum.ProviderEntryPointVersionEnumToJSON(value.entryPointVersion),
        'kernelVersion': ProviderKernelVersionEnum.ProviderKernelVersionEnumToJSON(value.kernelVersion),
        'factoryAddress': value.factoryAddress,
        'paymasterAddress': value.paymasterAddress,
        'passkeyAddress': value.passkeyAddress,
        'sessionAddress': value.sessionAddress,
        'salt': value.salt,
        'multichainAccountAbstractionProviders': value.multichainAccountAbstractionProviders === undefined ? undefined : (value.multichainAccountAbstractionProviders.map(ProviderMultichainAccountAbstractionProviders.ProviderMultichainAccountAbstractionProvidersToJSON)),
        'ecdsaProviderType': EcdsaValidatorOptions.EcdsaValidatorOptionsToJSON(value.ecdsaProviderType),
        'createNewAccounts': value.createNewAccounts,
        'enableKernelV3Migration': value.enableKernelV3Migration,
        'enableEIP7702': value.enableEIP7702,
        'zerodevBundlerProvider': ZerodevBundlerProvider.ZerodevBundlerProviderToJSON(value.zerodevBundlerProvider),
        'zerodevBundlerRpcUrl': value.zerodevBundlerRpcUrl,
        'zerodevPaymasterRpcUrl': value.zerodevPaymasterRpcUrl,
        'zerodevKernelDelegationAddress': value.zerodevKernelDelegationAddress,
    };
}

exports.ProviderFromJSON = ProviderFromJSON;
exports.ProviderFromJSONTyped = ProviderFromJSONTyped;
exports.ProviderToJSON = ProviderToJSON;
