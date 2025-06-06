import { exists } from '../runtime.js';
import { AuthenticationExtensionsClientInputsFromJSON, AuthenticationExtensionsClientInputsToJSON } from './AuthenticationExtensionsClientInputs.js';
import { PublicKeyCredentialDescriptorFromJSON, PublicKeyCredentialDescriptorToJSON } from './PublicKeyCredentialDescriptor.js';
import { UserVerificationRequirementFromJSON, UserVerificationRequirementToJSON } from './UserVerificationRequirement.js';

/* tslint:disable */
function MFAAuthPasskeyDeviceGetResponseAssertionFromJSON(json) {
    return MFAAuthPasskeyDeviceGetResponseAssertionFromJSONTyped(json);
}
function MFAAuthPasskeyDeviceGetResponseAssertionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'rpId': !exists(json, 'rpId') ? undefined : json['rpId'],
        'challenge': json['challenge'],
        'timeout': !exists(json, 'timeout') ? undefined : json['timeout'],
        'userVerification': !exists(json, 'userVerification') ? undefined : UserVerificationRequirementFromJSON(json['userVerification']),
        'allowCredentials': !exists(json, 'allowCredentials') ? undefined : (json['allowCredentials'].map(PublicKeyCredentialDescriptorFromJSON)),
        'extensions': !exists(json, 'extensions') ? undefined : AuthenticationExtensionsClientInputsFromJSON(json['extensions']),
    };
}
function MFAAuthPasskeyDeviceGetResponseAssertionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'rpId': value.rpId,
        'challenge': value.challenge,
        'timeout': value.timeout,
        'userVerification': UserVerificationRequirementToJSON(value.userVerification),
        'allowCredentials': value.allowCredentials === undefined ? undefined : (value.allowCredentials.map(PublicKeyCredentialDescriptorToJSON)),
        'extensions': AuthenticationExtensionsClientInputsToJSON(value.extensions),
    };
}

export { MFAAuthPasskeyDeviceGetResponseAssertionFromJSON, MFAAuthPasskeyDeviceGetResponseAssertionFromJSONTyped, MFAAuthPasskeyDeviceGetResponseAssertionToJSON };
