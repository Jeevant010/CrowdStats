'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var JwtVerifiedCredential = require('./JwtVerifiedCredential.cjs');
var MfaBackupCodeAcknowledgement = require('./MfaBackupCodeAcknowledgement.cjs');
var ProjectSettingsKyc = require('./ProjectSettingsKyc.cjs');

/* tslint:disable */
function BaseUserFromJSON(json) {
    return BaseUserFromJSONTyped(json);
}
function BaseUserFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'projectEnvironmentId': json['projectEnvironmentId'],
        'verifiedCredentials': !runtime.exists(json, 'verifiedCredentials') ? undefined : (json['verifiedCredentials'].map(JwtVerifiedCredential.JwtVerifiedCredentialFromJSON)),
        'lastVerifiedCredentialId': !runtime.exists(json, 'lastVerifiedCredentialId') ? undefined : json['lastVerifiedCredentialId'],
        'sessionId': !runtime.exists(json, 'sessionId') ? undefined : json['sessionId'],
        'alias': !runtime.exists(json, 'alias') ? undefined : json['alias'],
        'country': !runtime.exists(json, 'country') ? undefined : json['country'],
        'email': !runtime.exists(json, 'email') ? undefined : json['email'],
        'firstName': !runtime.exists(json, 'firstName') ? undefined : json['firstName'],
        'jobTitle': !runtime.exists(json, 'jobTitle') ? undefined : json['jobTitle'],
        'lastName': !runtime.exists(json, 'lastName') ? undefined : json['lastName'],
        'phoneNumber': !runtime.exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'policiesConsent': !runtime.exists(json, 'policiesConsent') ? undefined : json['policiesConsent'],
        'tShirtSize': !runtime.exists(json, 'tShirtSize') ? undefined : json['tShirtSize'],
        'team': !runtime.exists(json, 'team') ? undefined : json['team'],
        'username': !runtime.exists(json, 'username') ? undefined : json['username'],
        'firstVisit': !runtime.exists(json, 'firstVisit') ? undefined : (new Date(json['firstVisit'])),
        'lastVisit': !runtime.exists(json, 'lastVisit') ? undefined : (new Date(json['lastVisit'])),
        'newUser': !runtime.exists(json, 'newUser') ? undefined : json['newUser'],
        'metadata': !runtime.exists(json, 'metadata') ? undefined : json['metadata'],
        'mfaBackupCodeAcknowledgement': !runtime.exists(json, 'mfaBackupCodeAcknowledgement') ? undefined : MfaBackupCodeAcknowledgement.MfaBackupCodeAcknowledgementFromJSON(json['mfaBackupCodeAcknowledgement']),
        'btcWallet': !runtime.exists(json, 'btcWallet') ? undefined : json['btcWallet'],
        'kdaWallet': !runtime.exists(json, 'kdaWallet') ? undefined : json['kdaWallet'],
        'ltcWallet': !runtime.exists(json, 'ltcWallet') ? undefined : json['ltcWallet'],
        'ckbWallet': !runtime.exists(json, 'ckbWallet') ? undefined : json['ckbWallet'],
        'kasWallet': !runtime.exists(json, 'kasWallet') ? undefined : json['kasWallet'],
        'dogeWallet': !runtime.exists(json, 'dogeWallet') ? undefined : json['dogeWallet'],
        'emailNotification': !runtime.exists(json, 'emailNotification') ? undefined : json['emailNotification'],
        'discordNotification': !runtime.exists(json, 'discordNotification') ? undefined : json['discordNotification'],
        'newsletterNotification': !runtime.exists(json, 'newsletterNotification') ? undefined : json['newsletterNotification'],
        'lists': !runtime.exists(json, 'lists') ? undefined : json['lists'],
        'scope': !runtime.exists(json, 'scope') ? undefined : json['scope'],
        'missingFields': !runtime.exists(json, 'missingFields') ? undefined : (json['missingFields'].map(ProjectSettingsKyc.ProjectSettingsKycFromJSON)),
    };
}
function BaseUserToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'projectEnvironmentId': value.projectEnvironmentId,
        'verifiedCredentials': value.verifiedCredentials === undefined ? undefined : (value.verifiedCredentials.map(JwtVerifiedCredential.JwtVerifiedCredentialToJSON)),
        'lastVerifiedCredentialId': value.lastVerifiedCredentialId,
        'sessionId': value.sessionId,
        'alias': value.alias,
        'country': value.country,
        'email': value.email,
        'firstName': value.firstName,
        'jobTitle': value.jobTitle,
        'lastName': value.lastName,
        'phoneNumber': value.phoneNumber,
        'policiesConsent': value.policiesConsent,
        'tShirtSize': value.tShirtSize,
        'team': value.team,
        'username': value.username,
        'firstVisit': value.firstVisit === undefined ? undefined : (value.firstVisit.toISOString()),
        'lastVisit': value.lastVisit === undefined ? undefined : (value.lastVisit.toISOString()),
        'newUser': value.newUser,
        'metadata': value.metadata,
        'mfaBackupCodeAcknowledgement': MfaBackupCodeAcknowledgement.MfaBackupCodeAcknowledgementToJSON(value.mfaBackupCodeAcknowledgement),
        'btcWallet': value.btcWallet,
        'kdaWallet': value.kdaWallet,
        'ltcWallet': value.ltcWallet,
        'ckbWallet': value.ckbWallet,
        'kasWallet': value.kasWallet,
        'dogeWallet': value.dogeWallet,
        'emailNotification': value.emailNotification,
        'discordNotification': value.discordNotification,
        'newsletterNotification': value.newsletterNotification,
        'lists': value.lists,
        'scope': value.scope,
        'missingFields': value.missingFields === undefined ? undefined : (value.missingFields.map(ProjectSettingsKyc.ProjectSettingsKycToJSON)),
    };
}

exports.BaseUserFromJSON = BaseUserFromJSON;
exports.BaseUserFromJSONTyped = BaseUserFromJSONTyped;
exports.BaseUserToJSON = BaseUserToJSON;
