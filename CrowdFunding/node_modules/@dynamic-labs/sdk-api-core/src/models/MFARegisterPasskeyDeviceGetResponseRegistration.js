import { exists } from '../runtime.js';
import { AttestationConveyancePreferenceFromJSON, AttestationConveyancePreferenceToJSON } from './AttestationConveyancePreference.js';
import { AuthenticationExtensionsClientInputsFromJSON, AuthenticationExtensionsClientInputsToJSON } from './AuthenticationExtensionsClientInputs.js';
import { AuthenticatorSelectionCriteriaFromJSON, AuthenticatorSelectionCriteriaToJSON } from './AuthenticatorSelectionCriteria.js';
import { PublicKeyCredentialDescriptorFromJSON, PublicKeyCredentialDescriptorToJSON } from './PublicKeyCredentialDescriptor.js';
import { PublicKeyCredentialParametersFromJSON, PublicKeyCredentialParametersToJSON } from './PublicKeyCredentialParameters.js';
import { PublicKeyCredentialRpEntityFromJSON, PublicKeyCredentialRpEntityToJSON } from './PublicKeyCredentialRpEntity.js';
import { PublicKeyCredentialUserEntityFromJSON, PublicKeyCredentialUserEntityToJSON } from './PublicKeyCredentialUserEntity.js';

/* tslint:disable */
function MFARegisterPasskeyDeviceGetResponseRegistrationFromJSON(json) {
    return MFARegisterPasskeyDeviceGetResponseRegistrationFromJSONTyped(json);
}
function MFARegisterPasskeyDeviceGetResponseRegistrationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attestation': !exists(json, 'attestation') ? undefined : AttestationConveyancePreferenceFromJSON(json['attestation']),
        'rp': PublicKeyCredentialRpEntityFromJSON(json['rp']),
        'user': PublicKeyCredentialUserEntityFromJSON(json['user']),
        'challenge': json['challenge'],
        'pubKeyCredParams': (json['pubKeyCredParams'].map(PublicKeyCredentialParametersFromJSON)),
        'timeout': !exists(json, 'timeout') ? undefined : json['timeout'],
        'authenticatorSelection': !exists(json, 'authenticatorSelection') ? undefined : AuthenticatorSelectionCriteriaFromJSON(json['authenticatorSelection']),
        'excludeCredentials': !exists(json, 'excludeCredentials') ? undefined : (json['excludeCredentials'].map(PublicKeyCredentialDescriptorFromJSON)),
        'extensions': !exists(json, 'extensions') ? undefined : AuthenticationExtensionsClientInputsFromJSON(json['extensions']),
    };
}
function MFARegisterPasskeyDeviceGetResponseRegistrationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attestation': AttestationConveyancePreferenceToJSON(value.attestation),
        'rp': PublicKeyCredentialRpEntityToJSON(value.rp),
        'user': PublicKeyCredentialUserEntityToJSON(value.user),
        'challenge': value.challenge,
        'pubKeyCredParams': (value.pubKeyCredParams.map(PublicKeyCredentialParametersToJSON)),
        'timeout': value.timeout,
        'authenticatorSelection': AuthenticatorSelectionCriteriaToJSON(value.authenticatorSelection),
        'excludeCredentials': value.excludeCredentials === undefined ? undefined : (value.excludeCredentials.map(PublicKeyCredentialDescriptorToJSON)),
        'extensions': AuthenticationExtensionsClientInputsToJSON(value.extensions),
    };
}

export { MFARegisterPasskeyDeviceGetResponseRegistrationFromJSON, MFARegisterPasskeyDeviceGetResponseRegistrationFromJSONTyped, MFARegisterPasskeyDeviceGetResponseRegistrationToJSON };
