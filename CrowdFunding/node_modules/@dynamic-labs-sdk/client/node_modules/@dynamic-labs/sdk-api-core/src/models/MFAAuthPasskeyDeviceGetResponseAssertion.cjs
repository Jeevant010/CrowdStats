'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AuthenticationExtensionsClientInputs = require('./AuthenticationExtensionsClientInputs.cjs');
var PublicKeyCredentialDescriptor = require('./PublicKeyCredentialDescriptor.cjs');
var UserVerificationRequirement = require('./UserVerificationRequirement.cjs');

/* tslint:disable */
function MFAAuthPasskeyDeviceGetResponseAssertionFromJSON(json) {
    return MFAAuthPasskeyDeviceGetResponseAssertionFromJSONTyped(json);
}
function MFAAuthPasskeyDeviceGetResponseAssertionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'rpId': !runtime.exists(json, 'rpId') ? undefined : json['rpId'],
        'challenge': json['challenge'],
        'timeout': !runtime.exists(json, 'timeout') ? undefined : json['timeout'],
        'userVerification': !runtime.exists(json, 'userVerification') ? undefined : UserVerificationRequirement.UserVerificationRequirementFromJSON(json['userVerification']),
        'allowCredentials': !runtime.exists(json, 'allowCredentials') ? undefined : (json['allowCredentials'].map(PublicKeyCredentialDescriptor.PublicKeyCredentialDescriptorFromJSON)),
        'extensions': !runtime.exists(json, 'extensions') ? undefined : AuthenticationExtensionsClientInputs.AuthenticationExtensionsClientInputsFromJSON(json['extensions']),
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
        'userVerification': UserVerificationRequirement.UserVerificationRequirementToJSON(value.userVerification),
        'allowCredentials': value.allowCredentials === undefined ? undefined : (value.allowCredentials.map(PublicKeyCredentialDescriptor.PublicKeyCredentialDescriptorToJSON)),
        'extensions': AuthenticationExtensionsClientInputs.AuthenticationExtensionsClientInputsToJSON(value.extensions),
    };
}

exports.MFAAuthPasskeyDeviceGetResponseAssertionFromJSON = MFAAuthPasskeyDeviceGetResponseAssertionFromJSON;
exports.MFAAuthPasskeyDeviceGetResponseAssertionFromJSONTyped = MFAAuthPasskeyDeviceGetResponseAssertionFromJSONTyped;
exports.MFAAuthPasskeyDeviceGetResponseAssertionToJSON = MFAAuthPasskeyDeviceGetResponseAssertionToJSON;
