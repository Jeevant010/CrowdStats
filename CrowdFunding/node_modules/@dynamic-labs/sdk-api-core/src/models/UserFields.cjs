'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var MfaBackupCodeAcknowledgement = require('./MfaBackupCodeAcknowledgement.cjs');

/* tslint:disable */
function UserFieldsFromJSON(json) {
    return UserFieldsFromJSONTyped(json);
}
function UserFieldsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': !runtime.exists(json, 'email') ? undefined : json['email'],
        'alias': !runtime.exists(json, 'alias') ? undefined : json['alias'],
        'firstName': !runtime.exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !runtime.exists(json, 'lastName') ? undefined : json['lastName'],
        'jobTitle': !runtime.exists(json, 'jobTitle') ? undefined : json['jobTitle'],
        'phoneNumber': !runtime.exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'tShirtSize': !runtime.exists(json, 'tShirtSize') ? undefined : json['tShirtSize'],
        'team': !runtime.exists(json, 'team') ? undefined : json['team'],
        'policiesConsent': !runtime.exists(json, 'policiesConsent') ? undefined : json['policiesConsent'],
        'country': !runtime.exists(json, 'country') ? undefined : json['country'],
        'username': !runtime.exists(json, 'username') ? undefined : json['username'],
        'captchaToken': !runtime.exists(json, 'captchaToken') ? undefined : json['captchaToken'],
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
    };
}
function UserFieldsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': value.email,
        'alias': value.alias,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'jobTitle': value.jobTitle,
        'phoneNumber': value.phoneNumber,
        'tShirtSize': value.tShirtSize,
        'team': value.team,
        'policiesConsent': value.policiesConsent,
        'country': value.country,
        'username': value.username,
        'captchaToken': value.captchaToken,
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
    };
}

exports.UserFieldsFromJSON = UserFieldsFromJSON;
exports.UserFieldsFromJSONTyped = UserFieldsFromJSONTyped;
exports.UserFieldsToJSON = UserFieldsToJSON;
