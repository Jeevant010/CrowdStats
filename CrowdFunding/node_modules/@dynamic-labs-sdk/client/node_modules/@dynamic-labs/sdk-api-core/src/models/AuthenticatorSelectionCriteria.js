import { exists } from '../runtime.js';
import { AuthenticatorAttachmentFromJSON, AuthenticatorAttachmentToJSON } from './AuthenticatorAttachment.js';
import { ResidentKeyRequirementFromJSON, ResidentKeyRequirementToJSON } from './ResidentKeyRequirement.js';
import { UserVerificationRequirementFromJSON, UserVerificationRequirementToJSON } from './UserVerificationRequirement.js';

/* tslint:disable */
function AuthenticatorSelectionCriteriaFromJSON(json) {
    return AuthenticatorSelectionCriteriaFromJSONTyped(json);
}
function AuthenticatorSelectionCriteriaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'authenticatorAttachment': !exists(json, 'authenticatorAttachment') ? undefined : AuthenticatorAttachmentFromJSON(json['authenticatorAttachment']),
        'requireResidentKey': !exists(json, 'requireResidentKey') ? undefined : json['requireResidentKey'],
        'residentKey': !exists(json, 'residentKey') ? undefined : ResidentKeyRequirementFromJSON(json['residentKey']),
        'userVerification': !exists(json, 'userVerification') ? undefined : UserVerificationRequirementFromJSON(json['userVerification']),
    };
}
function AuthenticatorSelectionCriteriaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'authenticatorAttachment': AuthenticatorAttachmentToJSON(value.authenticatorAttachment),
        'requireResidentKey': value.requireResidentKey,
        'residentKey': ResidentKeyRequirementToJSON(value.residentKey),
        'userVerification': UserVerificationRequirementToJSON(value.userVerification),
    };
}

export { AuthenticatorSelectionCriteriaFromJSON, AuthenticatorSelectionCriteriaFromJSONTyped, AuthenticatorSelectionCriteriaToJSON };
