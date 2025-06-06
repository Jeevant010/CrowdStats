import { exists } from '../runtime.js';
import { EcdsaValidatorOptionsFromJSON, EcdsaValidatorOptionsToJSON } from './EcdsaValidatorOptions.js';
import { ProviderAgreementFromJSON, ProviderAgreementToJSON } from './ProviderAgreement.js';
import { ProviderEntryPointVersionEnumFromJSON, ProviderEntryPointVersionEnumToJSON } from './ProviderEntryPointVersionEnum.js';
import { ProviderEnumFromJSON, ProviderEnumToJSON } from './ProviderEnum.js';
import { ProviderKernelVersionEnumFromJSON, ProviderKernelVersionEnumToJSON } from './ProviderKernelVersionEnum.js';
import { ProviderMultichainAccountAbstractionProvidersFromJSON, ProviderMultichainAccountAbstractionProvidersToJSON } from './ProviderMultichainAccountAbstractionProviders.js';
import { SmsCountryCodeFromJSON, SmsCountryCodeToJSON } from './SmsCountryCode.js';
import { ZerodevBundlerProviderFromJSON, ZerodevBundlerProviderToJSON } from './ZerodevBundlerProvider.js';

/* tslint:disable */
function ProviderFromJSON(json) {
    return ProviderFromJSONTyped(json);
}
function ProviderFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'provider': ProviderEnumFromJSON(json['provider']),
        'enabledAt': !exists(json, 'enabledAt') ? undefined : (json['enabledAt'] === null ? null : new Date(json['enabledAt'])),
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'clientSecret': !exists(json, 'clientSecret') ? undefined : json['clientSecret'],
        'providerProjectId': !exists(json, 'providerProjectId') ? undefined : json['providerProjectId'],
        'authorizationUrl': !exists(json, 'authorizationUrl') ? undefined : json['authorizationUrl'],
        'redirectUrl': !exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
        'defaultChainId': !exists(json, 'defaultChainId') ? undefined : json['defaultChainId'],
        'defaultChain': !exists(json, 'defaultChain') ? undefined : json['defaultChain'],
        'keyExportUrl': !exists(json, 'keyExportUrl') ? undefined : json['keyExportUrl'],
        'termsAcceptedByUser': !exists(json, 'termsAcceptedByUser') ? undefined : ProviderAgreementFromJSON(json['termsAcceptedByUser']),
        'scopes': !exists(json, 'scopes') ? undefined : json['scopes'],
        'baseAuthUrl': !exists(json, 'baseAuthUrl') ? undefined : json['baseAuthUrl'],
        'appleKeyId': !exists(json, 'appleKeyId') ? undefined : json['appleKeyId'],
        'appleTeamId': !exists(json, 'appleTeamId') ? undefined : json['appleTeamId'],
        'shopifyStore': !exists(json, 'shopifyStore') ? undefined : json['shopifyStore'],
        'accountSid': !exists(json, 'accountSid') ? undefined : json['accountSid'],
        'twilioNumber': !exists(json, 'twilioNumber') ? undefined : json['twilioNumber'],
        'enabledCountries': !exists(json, 'enabledCountries') ? undefined : (json['enabledCountries'].map(SmsCountryCodeFromJSON)),
        'entryPointVersion': !exists(json, 'entryPointVersion') ? undefined : ProviderEntryPointVersionEnumFromJSON(json['entryPointVersion']),
        'kernelVersion': !exists(json, 'kernelVersion') ? undefined : ProviderKernelVersionEnumFromJSON(json['kernelVersion']),
        'factoryAddress': !exists(json, 'factoryAddress') ? undefined : json['factoryAddress'],
        'paymasterAddress': !exists(json, 'paymasterAddress') ? undefined : json['paymasterAddress'],
        'passkeyAddress': !exists(json, 'passkeyAddress') ? undefined : json['passkeyAddress'],
        'sessionAddress': !exists(json, 'sessionAddress') ? undefined : json['sessionAddress'],
        'salt': !exists(json, 'salt') ? undefined : json['salt'],
        'multichainAccountAbstractionProviders': !exists(json, 'multichainAccountAbstractionProviders') ? undefined : (json['multichainAccountAbstractionProviders'].map(ProviderMultichainAccountAbstractionProvidersFromJSON)),
        'ecdsaProviderType': !exists(json, 'ecdsaProviderType') ? undefined : EcdsaValidatorOptionsFromJSON(json['ecdsaProviderType']),
        'createNewAccounts': !exists(json, 'createNewAccounts') ? undefined : json['createNewAccounts'],
        'enableKernelV3Migration': !exists(json, 'enableKernelV3Migration') ? undefined : json['enableKernelV3Migration'],
        'enableEIP7702': !exists(json, 'enableEIP7702') ? undefined : json['enableEIP7702'],
        'zerodevBundlerProvider': !exists(json, 'zerodevBundlerProvider') ? undefined : ZerodevBundlerProviderFromJSON(json['zerodevBundlerProvider']),
        'zerodevBundlerRpcUrl': !exists(json, 'zerodevBundlerRpcUrl') ? undefined : json['zerodevBundlerRpcUrl'],
        'zerodevPaymasterRpcUrl': !exists(json, 'zerodevPaymasterRpcUrl') ? undefined : json['zerodevPaymasterRpcUrl'],
        'zerodevKernelDelegationAddress': !exists(json, 'zerodevKernelDelegationAddress') ? undefined : json['zerodevKernelDelegationAddress'],
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
        'provider': ProviderEnumToJSON(value.provider),
        'enabledAt': value.enabledAt === undefined ? undefined : (value.enabledAt === null ? null : value.enabledAt.toISOString()),
        'clientId': value.clientId,
        'clientSecret': value.clientSecret,
        'providerProjectId': value.providerProjectId,
        'authorizationUrl': value.authorizationUrl,
        'redirectUrl': value.redirectUrl,
        'defaultChainId': value.defaultChainId,
        'defaultChain': value.defaultChain,
        'keyExportUrl': value.keyExportUrl,
        'termsAcceptedByUser': ProviderAgreementToJSON(value.termsAcceptedByUser),
        'scopes': value.scopes,
        'baseAuthUrl': value.baseAuthUrl,
        'appleKeyId': value.appleKeyId,
        'appleTeamId': value.appleTeamId,
        'shopifyStore': value.shopifyStore,
        'accountSid': value.accountSid,
        'twilioNumber': value.twilioNumber,
        'enabledCountries': value.enabledCountries === undefined ? undefined : (value.enabledCountries.map(SmsCountryCodeToJSON)),
        'entryPointVersion': ProviderEntryPointVersionEnumToJSON(value.entryPointVersion),
        'kernelVersion': ProviderKernelVersionEnumToJSON(value.kernelVersion),
        'factoryAddress': value.factoryAddress,
        'paymasterAddress': value.paymasterAddress,
        'passkeyAddress': value.passkeyAddress,
        'sessionAddress': value.sessionAddress,
        'salt': value.salt,
        'multichainAccountAbstractionProviders': value.multichainAccountAbstractionProviders === undefined ? undefined : (value.multichainAccountAbstractionProviders.map(ProviderMultichainAccountAbstractionProvidersToJSON)),
        'ecdsaProviderType': EcdsaValidatorOptionsToJSON(value.ecdsaProviderType),
        'createNewAccounts': value.createNewAccounts,
        'enableKernelV3Migration': value.enableKernelV3Migration,
        'enableEIP7702': value.enableEIP7702,
        'zerodevBundlerProvider': ZerodevBundlerProviderToJSON(value.zerodevBundlerProvider),
        'zerodevBundlerRpcUrl': value.zerodevBundlerRpcUrl,
        'zerodevPaymasterRpcUrl': value.zerodevPaymasterRpcUrl,
        'zerodevKernelDelegationAddress': value.zerodevKernelDelegationAddress,
    };
}

export { ProviderFromJSON, ProviderFromJSONTyped, ProviderToJSON };
