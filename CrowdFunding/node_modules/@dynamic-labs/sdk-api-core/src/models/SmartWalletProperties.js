import { exists } from '../runtime.js';
import { EcdsaValidatorOptionsFromJSON, EcdsaValidatorOptionsToJSON } from './EcdsaValidatorOptions.js';
import { ProviderEntryPointVersionEnumFromJSON, ProviderEntryPointVersionEnumToJSON } from './ProviderEntryPointVersionEnum.js';
import { ProviderKernelVersionEnumFromJSON, ProviderKernelVersionEnumToJSON } from './ProviderKernelVersionEnum.js';

/* tslint:disable */
function SmartWalletPropertiesFromJSON(json) {
    return SmartWalletPropertiesFromJSONTyped(json);
}
function SmartWalletPropertiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'entryPointVersion': !exists(json, 'entryPointVersion') ? undefined : ProviderEntryPointVersionEnumFromJSON(json['entryPointVersion']),
        'kernelVersion': !exists(json, 'kernelVersion') ? undefined : ProviderKernelVersionEnumFromJSON(json['kernelVersion']),
        'ecdsaProviderType': !exists(json, 'ecdsaProviderType') ? undefined : EcdsaValidatorOptionsFromJSON(json['ecdsaProviderType']),
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
        'entryPointVersion': ProviderEntryPointVersionEnumToJSON(value.entryPointVersion),
        'kernelVersion': ProviderKernelVersionEnumToJSON(value.kernelVersion),
        'ecdsaProviderType': EcdsaValidatorOptionsToJSON(value.ecdsaProviderType),
    };
}

export { SmartWalletPropertiesFromJSON, SmartWalletPropertiesFromJSONTyped, SmartWalletPropertiesToJSON };
