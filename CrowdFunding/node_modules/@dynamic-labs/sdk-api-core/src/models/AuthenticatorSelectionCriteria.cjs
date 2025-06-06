'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AuthenticatorAttachment = require('./AuthenticatorAttachment.cjs');
var ResidentKeyRequirement = require('./ResidentKeyRequirement.cjs');
var UserVerificationRequirement = require('./UserVerificationRequirement.cjs');

/* tslint:disable */
function AuthenticatorSelectionCriteriaFromJSON(json) {
    return AuthenticatorSelectionCriteriaFromJSONTyped(json);
}
function AuthenticatorSelectionCriteriaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'authenticatorAttachment': !runtime.exists(json, 'authenticatorAttachment') ? undefined : AuthenticatorAttachment.AuthenticatorAttachmentFromJSON(json['authenticatorAttachment']),
        'requireResidentKey': !runtime.exists(json, 'requireResidentKey') ? undefined : json['requireResidentKey'],
        'residentKey': !runtime.exists(json, 'residentKey') ? undefined : ResidentKeyRequirement.ResidentKeyRequirementFromJSON(json['residentKey']),
        'userVerification': !runtime.exists(json, 'userVerification') ? undefined : UserVerificationRequirement.UserVerificationRequirementFromJSON(json['userVerification']),
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
        'authenticatorAttachment': AuthenticatorAttachment.AuthenticatorAttachmentToJSON(value.authenticatorAttachment),
        'requireResidentKey': value.requireResidentKey,
        'residentKey': ResidentKeyRequirement.ResidentKeyRequirementToJSON(value.residentKey),
        'userVerification': UserVerificationRequirement.UserVerificationRequirementToJSON(value.userVerification),
    };
}

exports.AuthenticatorSelectionCriteriaFromJSON = AuthenticatorSelectionCriteriaFromJSON;
exports.AuthenticatorSelectionCriteriaFromJSONTyped = AuthenticatorSelectionCriteriaFromJSONTyped;
exports.AuthenticatorSelectionCriteriaToJSON = AuthenticatorSelectionCriteriaToJSON;
