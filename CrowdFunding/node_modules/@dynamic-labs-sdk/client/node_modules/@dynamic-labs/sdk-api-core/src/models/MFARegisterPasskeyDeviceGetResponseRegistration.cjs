'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AttestationConveyancePreference = require('./AttestationConveyancePreference.cjs');
var AuthenticationExtensionsClientInputs = require('./AuthenticationExtensionsClientInputs.cjs');
var AuthenticatorSelectionCriteria = require('./AuthenticatorSelectionCriteria.cjs');
var PublicKeyCredentialDescriptor = require('./PublicKeyCredentialDescriptor.cjs');
var PublicKeyCredentialParameters = require('./PublicKeyCredentialParameters.cjs');
var PublicKeyCredentialRpEntity = require('./PublicKeyCredentialRpEntity.cjs');
var PublicKeyCredentialUserEntity = require('./PublicKeyCredentialUserEntity.cjs');

/* tslint:disable */
function MFARegisterPasskeyDeviceGetResponseRegistrationFromJSON(json) {
    return MFARegisterPasskeyDeviceGetResponseRegistrationFromJSONTyped(json);
}
function MFARegisterPasskeyDeviceGetResponseRegistrationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attestation': !runtime.exists(json, 'attestation') ? undefined : AttestationConveyancePreference.AttestationConveyancePreferenceFromJSON(json['attestation']),
        'rp': PublicKeyCredentialRpEntity.PublicKeyCredentialRpEntityFromJSON(json['rp']),
        'user': PublicKeyCredentialUserEntity.PublicKeyCredentialUserEntityFromJSON(json['user']),
        'challenge': json['challenge'],
        'pubKeyCredParams': (json['pubKeyCredParams'].map(PublicKeyCredentialParameters.PublicKeyCredentialParametersFromJSON)),
        'timeout': !runtime.exists(json, 'timeout') ? undefined : json['timeout'],
        'authenticatorSelection': !runtime.exists(json, 'authenticatorSelection') ? undefined : AuthenticatorSelectionCriteria.AuthenticatorSelectionCriteriaFromJSON(json['authenticatorSelection']),
        'excludeCredentials': !runtime.exists(json, 'excludeCredentials') ? undefined : (json['excludeCredentials'].map(PublicKeyCredentialDescriptor.PublicKeyCredentialDescriptorFromJSON)),
        'extensions': !runtime.exists(json, 'extensions') ? undefined : AuthenticationExtensionsClientInputs.AuthenticationExtensionsClientInputsFromJSON(json['extensions']),
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
        'attestation': AttestationConveyancePreference.AttestationConveyancePreferenceToJSON(value.attestation),
        'rp': PublicKeyCredentialRpEntity.PublicKeyCredentialRpEntityToJSON(value.rp),
        'user': PublicKeyCredentialUserEntity.PublicKeyCredentialUserEntityToJSON(value.user),
        'challenge': value.challenge,
        'pubKeyCredParams': (value.pubKeyCredParams.map(PublicKeyCredentialParameters.PublicKeyCredentialParametersToJSON)),
        'timeout': value.timeout,
        'authenticatorSelection': AuthenticatorSelectionCriteria.AuthenticatorSelectionCriteriaToJSON(value.authenticatorSelection),
        'excludeCredentials': value.excludeCredentials === undefined ? undefined : (value.excludeCredentials.map(PublicKeyCredentialDescriptor.PublicKeyCredentialDescriptorToJSON)),
        'extensions': AuthenticationExtensionsClientInputs.AuthenticationExtensionsClientInputsToJSON(value.extensions),
    };
}

exports.MFARegisterPasskeyDeviceGetResponseRegistrationFromJSON = MFARegisterPasskeyDeviceGetResponseRegistrationFromJSON;
exports.MFARegisterPasskeyDeviceGetResponseRegistrationFromJSONTyped = MFARegisterPasskeyDeviceGetResponseRegistrationFromJSONTyped;
exports.MFARegisterPasskeyDeviceGetResponseRegistrationToJSON = MFARegisterPasskeyDeviceGetResponseRegistrationToJSON;
