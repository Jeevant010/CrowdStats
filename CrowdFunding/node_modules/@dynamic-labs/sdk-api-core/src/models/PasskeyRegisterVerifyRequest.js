import { exists } from '../runtime.js';
import { AuthenticationExtensionsClientOutputsFromJSON, AuthenticationExtensionsClientOutputsToJSON } from './AuthenticationExtensionsClientOutputs.js';
import { AuthenticatorAttachmentFromJSON, AuthenticatorAttachmentToJSON } from './AuthenticatorAttachment.js';
import { AuthenticatorAttestationResponseFromJSON, AuthenticatorAttestationResponseToJSON } from './AuthenticatorAttestationResponse.js';
import { PublicKeyCredentialTypeFromJSON, PublicKeyCredentialTypeToJSON } from './PublicKeyCredentialType.js';

/* tslint:disable */
function PasskeyRegisterVerifyRequestFromJSON(json) {
    return PasskeyRegisterVerifyRequestFromJSONTyped(json);
}
function PasskeyRegisterVerifyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'rawId': json['rawId'],
        'response': AuthenticatorAttestationResponseFromJSON(json['response']),
        'authenticatorAttachment': !exists(json, 'authenticatorAttachment') ? undefined : AuthenticatorAttachmentFromJSON(json['authenticatorAttachment']),
        'clientExtensionResults': AuthenticationExtensionsClientOutputsFromJSON(json['clientExtensionResults']),
        'type': PublicKeyCredentialTypeFromJSON(json['type']),
    };
}
function PasskeyRegisterVerifyRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'rawId': value.rawId,
        'response': AuthenticatorAttestationResponseToJSON(value.response),
        'authenticatorAttachment': AuthenticatorAttachmentToJSON(value.authenticatorAttachment),
        'clientExtensionResults': AuthenticationExtensionsClientOutputsToJSON(value.clientExtensionResults),
        'type': PublicKeyCredentialTypeToJSON(value.type),
    };
}

export { PasskeyRegisterVerifyRequestFromJSON, PasskeyRegisterVerifyRequestFromJSONTyped, PasskeyRegisterVerifyRequestToJSON };
