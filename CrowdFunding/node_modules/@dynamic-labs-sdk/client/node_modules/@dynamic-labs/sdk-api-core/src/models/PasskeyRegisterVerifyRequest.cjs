'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AuthenticationExtensionsClientOutputs = require('./AuthenticationExtensionsClientOutputs.cjs');
var AuthenticatorAttachment = require('./AuthenticatorAttachment.cjs');
var AuthenticatorAttestationResponse = require('./AuthenticatorAttestationResponse.cjs');
var PublicKeyCredentialType = require('./PublicKeyCredentialType.cjs');

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
        'response': AuthenticatorAttestationResponse.AuthenticatorAttestationResponseFromJSON(json['response']),
        'authenticatorAttachment': !runtime.exists(json, 'authenticatorAttachment') ? undefined : AuthenticatorAttachment.AuthenticatorAttachmentFromJSON(json['authenticatorAttachment']),
        'clientExtensionResults': AuthenticationExtensionsClientOutputs.AuthenticationExtensionsClientOutputsFromJSON(json['clientExtensionResults']),
        'type': PublicKeyCredentialType.PublicKeyCredentialTypeFromJSON(json['type']),
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
        'response': AuthenticatorAttestationResponse.AuthenticatorAttestationResponseToJSON(value.response),
        'authenticatorAttachment': AuthenticatorAttachment.AuthenticatorAttachmentToJSON(value.authenticatorAttachment),
        'clientExtensionResults': AuthenticationExtensionsClientOutputs.AuthenticationExtensionsClientOutputsToJSON(value.clientExtensionResults),
        'type': PublicKeyCredentialType.PublicKeyCredentialTypeToJSON(value.type),
    };
}

exports.PasskeyRegisterVerifyRequestFromJSON = PasskeyRegisterVerifyRequestFromJSON;
exports.PasskeyRegisterVerifyRequestFromJSONTyped = PasskeyRegisterVerifyRequestFromJSONTyped;
exports.PasskeyRegisterVerifyRequestToJSON = PasskeyRegisterVerifyRequestToJSON;
