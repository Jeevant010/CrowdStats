import { exists } from '../runtime.js';
import { MfaBackupCodeAcknowledgementFromJSON, MfaBackupCodeAcknowledgementToJSON } from './MfaBackupCodeAcknowledgement.js';

/* tslint:disable */
function UserFieldsFromJSON(json) {
    return UserFieldsFromJSONTyped(json);
}
function UserFieldsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': !exists(json, 'email') ? undefined : json['email'],
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'jobTitle': !exists(json, 'jobTitle') ? undefined : json['jobTitle'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'tShirtSize': !exists(json, 'tShirtSize') ? undefined : json['tShirtSize'],
        'team': !exists(json, 'team') ? undefined : json['team'],
        'policiesConsent': !exists(json, 'policiesConsent') ? undefined : json['policiesConsent'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'captchaToken': !exists(json, 'captchaToken') ? undefined : json['captchaToken'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'mfaBackupCodeAcknowledgement': !exists(json, 'mfaBackupCodeAcknowledgement') ? undefined : MfaBackupCodeAcknowledgementFromJSON(json['mfaBackupCodeAcknowledgement']),
        'btcWallet': !exists(json, 'btcWallet') ? undefined : json['btcWallet'],
        'kdaWallet': !exists(json, 'kdaWallet') ? undefined : json['kdaWallet'],
        'ltcWallet': !exists(json, 'ltcWallet') ? undefined : json['ltcWallet'],
        'ckbWallet': !exists(json, 'ckbWallet') ? undefined : json['ckbWallet'],
        'kasWallet': !exists(json, 'kasWallet') ? undefined : json['kasWallet'],
        'dogeWallet': !exists(json, 'dogeWallet') ? undefined : json['dogeWallet'],
        'emailNotification': !exists(json, 'emailNotification') ? undefined : json['emailNotification'],
        'discordNotification': !exists(json, 'discordNotification') ? undefined : json['discordNotification'],
        'newsletterNotification': !exists(json, 'newsletterNotification') ? undefined : json['newsletterNotification'],
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
        'mfaBackupCodeAcknowledgement': MfaBackupCodeAcknowledgementToJSON(value.mfaBackupCodeAcknowledgement),
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

export { UserFieldsFromJSON, UserFieldsFromJSONTyped, UserFieldsToJSON };
