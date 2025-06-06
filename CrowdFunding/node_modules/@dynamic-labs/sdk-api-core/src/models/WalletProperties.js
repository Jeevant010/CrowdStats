import { exists } from '../runtime.js';
import { EcdsaValidatorOptionsFromJSON, EcdsaValidatorOptionsToJSON } from './EcdsaValidatorOptions.js';
import { EmbeddedWalletVersionEnumFromJSON, EmbeddedWalletVersionEnumToJSON } from './EmbeddedWalletVersionEnum.js';
import { HardwareWalletEnumFromJSON, HardwareWalletEnumToJSON } from './HardwareWalletEnum.js';
import { PasswordSourceTypeEnumFromJSON, PasswordSourceTypeEnumToJSON } from './PasswordSourceTypeEnum.js';
import { ProviderEntryPointVersionEnumFromJSON, ProviderEntryPointVersionEnumToJSON } from './ProviderEntryPointVersionEnum.js';
import { ProviderKernelVersionEnumFromJSON, ProviderKernelVersionEnumToJSON } from './ProviderKernelVersionEnum.js';
import { ThresholdSignatureSchemeFromJSON, ThresholdSignatureSchemeToJSON } from './ThresholdSignatureScheme.js';
import { WalletKeyShareInfoFromJSON, WalletKeyShareInfoToJSON } from './WalletKeyShareInfo.js';

/* tslint:disable */
function WalletPropertiesFromJSON(json) {
    return WalletPropertiesFromJSONTyped(json);
}
function WalletPropertiesFromJSONTyped(json, ignoreDiscriminator) {
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
        'hardwareWallet': !exists(json, 'hardwareWallet') ? undefined : HardwareWalletEnumFromJSON(json['hardwareWallet']),
        'claimed': !exists(json, 'claimed') ? undefined : json['claimed'],
        'source': !exists(json, 'source') ? undefined : PasswordSourceTypeEnumFromJSON(json['source']),
        'keyShares': !exists(json, 'keyShares') ? undefined : (json['keyShares'].map(WalletKeyShareInfoFromJSON)),
        'thresholdSignatureScheme': !exists(json, 'thresholdSignatureScheme') ? undefined : ThresholdSignatureSchemeFromJSON(json['thresholdSignatureScheme']),
        'derivationPath': !exists(json, 'derivationPath') ? undefined : json['derivationPath'],
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
        'version': EmbeddedWalletVersionEnumToJSON(value.version),
        'ecdsaProviderType': EcdsaValidatorOptionsToJSON(value.ecdsaProviderType),
        'entryPointVersion': ProviderEntryPointVersionEnumToJSON(value.entryPointVersion),
        'kernelVersion': ProviderKernelVersionEnumToJSON(value.kernelVersion),
        'hardwareWallet': HardwareWalletEnumToJSON(value.hardwareWallet),
        'claimed': value.claimed,
        'source': PasswordSourceTypeEnumToJSON(value.source),
        'keyShares': value.keyShares === undefined ? undefined : (value.keyShares.map(WalletKeyShareInfoToJSON)),
        'thresholdSignatureScheme': ThresholdSignatureSchemeToJSON(value.thresholdSignatureScheme),
        'derivationPath': value.derivationPath,
    };
}

export { WalletPropertiesFromJSON, WalletPropertiesFromJSONTyped, WalletPropertiesToJSON };
