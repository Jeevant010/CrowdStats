'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var ChainEnum = require('./ChainEnum.cjs');
var NameServiceData = require('./NameServiceData.cjs');

/* tslint:disable */
function JwtPayloadDeprecatedInfoFromJSON(json) {
    return JwtPayloadDeprecatedInfoFromJSONTyped(json);
}
function JwtPayloadDeprecatedInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': !runtime.exists(json, 'alias') ? undefined : json['alias'],
        'chain': !runtime.exists(json, 'chain') ? undefined : ChainEnum.ChainEnumFromJSON(json['chain']),
        'email': !runtime.exists(json, 'email') ? undefined : json['email'],
        'ens': !runtime.exists(json, 'ens') ? undefined : NameServiceData.NameServiceDataFromJSON(json['ens']),
        'environmentId': json['environmentId'],
        'firstName': !runtime.exists(json, 'firstName') ? undefined : json['firstName'],
        'jobTitle': !runtime.exists(json, 'jobTitle') ? undefined : json['jobTitle'],
        'lastName': !runtime.exists(json, 'lastName') ? undefined : json['lastName'],
        'lists': !runtime.exists(json, 'lists') ? undefined : json['lists'],
        'phoneNumber': !runtime.exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'tShirtSize': !runtime.exists(json, 'tShirtSize') ? undefined : json['tShirtSize'],
        'userId': !runtime.exists(json, 'userId') ? undefined : json['userId'],
        'username': !runtime.exists(json, 'username') ? undefined : json['username'],
        'wallet': !runtime.exists(json, 'wallet') ? undefined : json['wallet'],
        'walletPublicKey': !runtime.exists(json, 'walletPublicKey') ? undefined : json['walletPublicKey'],
    };
}
function JwtPayloadDeprecatedInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alias': value.alias,
        'chain': ChainEnum.ChainEnumToJSON(value.chain),
        'email': value.email,
        'ens': NameServiceData.NameServiceDataToJSON(value.ens),
        'environmentId': value.environmentId,
        'firstName': value.firstName,
        'jobTitle': value.jobTitle,
        'lastName': value.lastName,
        'lists': value.lists,
        'phoneNumber': value.phoneNumber,
        'tShirtSize': value.tShirtSize,
        'userId': value.userId,
        'username': value.username,
        'wallet': value.wallet,
        'walletPublicKey': value.walletPublicKey,
    };
}

exports.JwtPayloadDeprecatedInfoFromJSON = JwtPayloadDeprecatedInfoFromJSON;
exports.JwtPayloadDeprecatedInfoFromJSONTyped = JwtPayloadDeprecatedInfoFromJSONTyped;
exports.JwtPayloadDeprecatedInfoToJSON = JwtPayloadDeprecatedInfoToJSON;
