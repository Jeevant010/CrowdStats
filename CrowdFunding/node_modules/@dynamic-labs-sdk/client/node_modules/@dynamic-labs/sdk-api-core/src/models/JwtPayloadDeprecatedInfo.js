import { exists } from '../runtime.js';
import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';
import { NameServiceDataFromJSON, NameServiceDataToJSON } from './NameServiceData.js';

/* tslint:disable */
function JwtPayloadDeprecatedInfoFromJSON(json) {
    return JwtPayloadDeprecatedInfoFromJSONTyped(json);
}
function JwtPayloadDeprecatedInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'chain': !exists(json, 'chain') ? undefined : ChainEnumFromJSON(json['chain']),
        'email': !exists(json, 'email') ? undefined : json['email'],
        'ens': !exists(json, 'ens') ? undefined : NameServiceDataFromJSON(json['ens']),
        'environmentId': json['environmentId'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'jobTitle': !exists(json, 'jobTitle') ? undefined : json['jobTitle'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'lists': !exists(json, 'lists') ? undefined : json['lists'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'tShirtSize': !exists(json, 'tShirtSize') ? undefined : json['tShirtSize'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'wallet': !exists(json, 'wallet') ? undefined : json['wallet'],
        'walletPublicKey': !exists(json, 'walletPublicKey') ? undefined : json['walletPublicKey'],
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
        'chain': ChainEnumToJSON(value.chain),
        'email': value.email,
        'ens': NameServiceDataToJSON(value.ens),
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

export { JwtPayloadDeprecatedInfoFromJSON, JwtPayloadDeprecatedInfoFromJSONTyped, JwtPayloadDeprecatedInfoToJSON };
