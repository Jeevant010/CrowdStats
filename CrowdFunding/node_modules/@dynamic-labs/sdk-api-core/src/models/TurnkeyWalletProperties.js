import { exists } from '../runtime.js';
import { EcdsaValidatorOptionsFromJSON, EcdsaValidatorOptionsToJSON } from './EcdsaValidatorOptions.js';
import { EmbeddedWalletVersionEnumFromJSON, EmbeddedWalletVersionEnumToJSON } from './EmbeddedWalletVersionEnum.js';
import { ProviderEntryPointVersionEnumFromJSON, ProviderEntryPointVersionEnumToJSON } from './ProviderEntryPointVersionEnum.js';
import { ProviderKernelVersionEnumFromJSON, ProviderKernelVersionEnumToJSON } from './ProviderKernelVersionEnum.js';

/* tslint:disable */
function TurnkeyWalletPropertiesFromJSON(json) {
    return TurnkeyWalletPropertiesFromJSONTyped(json);
}
function TurnkeyWalletPropertiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'turnkeySubOrganizationId': !exists(json, 'turnkeySubOrganizationId') ? undefined : json['turnkeySubOrganizationId'],
        'turnkeyPrivateKeyId': !exists(json, 'turnkeyPrivateKeyId') ? undefined : json['turnkeyPrivateKeyId'],
        'turnkeyHDWalletId': !exists(json, 'turnkeyHDWalletId') ? undefined : json['turnkeyHDWalletId'],
        'isAuthenticatorAttached': !exists(json, 'isAuthenticatorAttached') ? undefined : json['isAuthenticatorAttached'],
        'turnkeyUserId': !exists(json, 'turnkeyUserId') ? undefined : json['turnkeyUserId'],
        'isSessionKeyCompatible': !exists(json, 'isSessionKeyCompatible') ? undefined : json['isSessionKeyCompatible'],
        'version': !exists(json, 'version') ? undefined : EmbeddedWalletVersionEnumFromJSON(json['version']),
        'ecdsaProviderType': !exists(json, 'ecdsaProviderType') ? undefined : EcdsaValidatorOptionsFromJSON(json['ecdsaProviderType']),
        'entryPointVersion': !exists(json, 'entryPointVersion') ? undefined : ProviderEntryPointVersionEnumFromJSON(json['entryPointVersion']),
        'kernelVersion': !exists(json, 'kernelVersion') ? undefined : ProviderKernelVersionEnumFromJSON(json['kernelVersion']),
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
        'version': EmbeddedWalletVersionEnumToJSON(value.version),
        'ecdsaProviderType': EcdsaValidatorOptionsToJSON(value.ecdsaProviderType),
        'entryPointVersion': ProviderEntryPointVersionEnumToJSON(value.entryPointVersion),
        'kernelVersion': ProviderKernelVersionEnumToJSON(value.kernelVersion),
    };
}

export { TurnkeyWalletPropertiesFromJSON, TurnkeyWalletPropertiesFromJSONTyped, TurnkeyWalletPropertiesToJSON };
