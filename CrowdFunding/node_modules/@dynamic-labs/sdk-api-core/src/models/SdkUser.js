import { exists } from '../runtime.js';
import { JwtVerifiedCredentialFromJSON, JwtVerifiedCredentialToJSON } from './JwtVerifiedCredential.js';
import { MfaBackupCodeAcknowledgementFromJSON, MfaBackupCodeAcknowledgementToJSON } from './MfaBackupCodeAcknowledgement.js';
import { ProjectSettingsKycFromJSON, ProjectSettingsKycToJSON } from './ProjectSettingsKyc.js';

/* tslint:disable */
function SdkUserFromJSON(json) {
    return SdkUserFromJSONTyped(json);
}
function SdkUserFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'projectEnvironmentId': json['projectEnvironmentId'],
        'verifiedCredentials': (json['verifiedCredentials'].map(JwtVerifiedCredentialFromJSON)),
        'lastVerifiedCredentialId': !exists(json, 'lastVerifiedCredentialId') ? undefined : json['lastVerifiedCredentialId'],
        'sessionId': !exists(json, 'sessionId') ? undefined : json['sessionId'],
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'jobTitle': !exists(json, 'jobTitle') ? undefined : json['jobTitle'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'policiesConsent': !exists(json, 'policiesConsent') ? undefined : json['policiesConsent'],
        'tShirtSize': !exists(json, 'tShirtSize') ? undefined : json['tShirtSize'],
        'team': !exists(json, 'team') ? undefined : json['team'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'firstVisit': !exists(json, 'firstVisit') ? undefined : (new Date(json['firstVisit'])),
        'lastVisit': !exists(json, 'lastVisit') ? undefined : (new Date(json['lastVisit'])),
        'newUser': !exists(json, 'newUser') ? undefined : json['newUser'],
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
        'lists': !exists(json, 'lists') ? undefined : json['lists'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'missingFields': !exists(json, 'missingFields') ? undefined : (json['missingFields'].map(ProjectSettingsKycFromJSON)),
    };
}
function SdkUserToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'projectEnvironmentId': value.projectEnvironmentId,
        'verifiedCredentials': (value.verifiedCredentials.map(JwtVerifiedCredentialToJSON)),
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
        'lists': value.lists,
        'scope': value.scope,
        'missingFields': value.missingFields === undefined ? undefined : (value.missingFields.map(ProjectSettingsKycToJSON)),
    };
}

export { SdkUserFromJSON, SdkUserFromJSONTyped, SdkUserToJSON };
