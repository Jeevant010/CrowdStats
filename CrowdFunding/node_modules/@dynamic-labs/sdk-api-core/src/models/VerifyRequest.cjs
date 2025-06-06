'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ChainEnum = require('./ChainEnum.cjs');
var OauthProviderRequest = require('./OauthProviderRequest.cjs');
var PasswordSourceTypeEnum = require('./PasswordSourceTypeEnum.cjs');
var WalletAdditionalAddress = require('./WalletAdditionalAddress.cjs');
var WalletProviderEnum = require('./WalletProviderEnum.cjs');

/* tslint:disable */
function VerifyRequestFromJSON(json) {
    return VerifyRequestFromJSONTyped(json);
}
function VerifyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'oauth': !runtime.exists(json, 'oauth') ? undefined : OauthProviderRequest.OauthProviderRequestFromJSON(json['oauth']),
        'signedMessage': json['signedMessage'],
        'messageToSign': json['messageToSign'],
        'publicWalletAddress': json['publicWalletAddress'],
        'chain': ChainEnum.ChainEnumFromJSON(json['chain']),
        'walletName': json['walletName'],
        'walletProvider': WalletProviderEnum.WalletProviderEnumFromJSON(json['walletProvider']),
        'skipEmptyAccountCheck': !runtime.exists(json, 'skipEmptyAccountCheck') ? undefined : json['skipEmptyAccountCheck'],
        'captchaToken': !runtime.exists(json, 'captchaToken') ? undefined : json['captchaToken'],
        'network': !runtime.exists(json, 'network') ? undefined : json['network'],
        'additionalWalletAddresses': !runtime.exists(json, 'additionalWalletAddresses') ? undefined : (json['additionalWalletAddresses'].map(WalletAdditionalAddress.WalletAdditionalAddressFromJSON)),
        'backup': !runtime.exists(json, 'backup') ? undefined : json['backup'],
        'password': !runtime.exists(json, 'password') ? undefined : json['password'],
        'passwordSource': !runtime.exists(json, 'passwordSource') ? undefined : PasswordSourceTypeEnum.PasswordSourceTypeEnumFromJSON(json['passwordSource']),
        'sessionPublicKey': !runtime.exists(json, 'sessionPublicKey') ? undefined : json['sessionPublicKey'],
    };
}
function VerifyRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'oauth': OauthProviderRequest.OauthProviderRequestToJSON(value.oauth),
        'signedMessage': value.signedMessage,
        'messageToSign': value.messageToSign,
        'publicWalletAddress': value.publicWalletAddress,
        'chain': ChainEnum.ChainEnumToJSON(value.chain),
        'walletName': value.walletName,
        'walletProvider': WalletProviderEnum.WalletProviderEnumToJSON(value.walletProvider),
        'skipEmptyAccountCheck': value.skipEmptyAccountCheck,
        'captchaToken': value.captchaToken,
        'network': value.network,
        'additionalWalletAddresses': value.additionalWalletAddresses === undefined ? undefined : (value.additionalWalletAddresses.map(WalletAdditionalAddress.WalletAdditionalAddressToJSON)),
        'backup': value.backup,
        'password': value.password,
        'passwordSource': PasswordSourceTypeEnum.PasswordSourceTypeEnumToJSON(value.passwordSource),
        'sessionPublicKey': value.sessionPublicKey,
    };
}

exports.VerifyRequestFromJSON = VerifyRequestFromJSON;
exports.VerifyRequestFromJSONTyped = VerifyRequestFromJSONTyped;
exports.VerifyRequestToJSON = VerifyRequestToJSON;
