import { exists } from '../runtime.js';
import { JwtVerifiedCredentialFormatEnumFromJSON, JwtVerifiedCredentialFormatEnumToJSON } from './JwtVerifiedCredentialFormatEnum.js';
import { NameServiceDataFromJSON, NameServiceDataToJSON } from './NameServiceData.js';
import { ProviderEnumFromJSON, ProviderEnumToJSON } from './ProviderEnum.js';
import { WalletAdditionalAddressFromJSON, WalletAdditionalAddressToJSON } from './WalletAdditionalAddress.js';
import { WalletPropertiesFromJSON, WalletPropertiesToJSON } from './WalletProperties.js';
import { WalletProviderEnumFromJSON, WalletProviderEnumToJSON } from './WalletProviderEnum.js';

/* tslint:disable */
function JwtVerifiedCredentialFromJSON(json) {
    return JwtVerifiedCredentialFromJSONTyped(json);
}
function JwtVerifiedCredentialFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': !exists(json, 'address') ? undefined : json['address'],
        'chain': !exists(json, 'chain') ? undefined : json['chain'],
        'refId': !exists(json, 'refId') ? undefined : json['refId'],
        'signerRefId': !exists(json, 'signerRefId') ? undefined : json['signerRefId'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'id': json['id'],
        'nameService': !exists(json, 'name_service') ? undefined : NameServiceDataFromJSON(json['name_service']),
        'publicIdentifier': !exists(json, 'public_identifier') ? undefined : json['public_identifier'],
        'walletName': !exists(json, 'wallet_name') ? undefined : json['wallet_name'],
        'walletProvider': !exists(json, 'wallet_provider') ? undefined : WalletProviderEnumFromJSON(json['wallet_provider']),
        'walletProperties': !exists(json, 'wallet_properties') ? undefined : WalletPropertiesFromJSON(json['wallet_properties']),
        'format': JwtVerifiedCredentialFormatEnumFromJSON(json['format']),
        'oauthProvider': !exists(json, 'oauth_provider') ? undefined : ProviderEnumFromJSON(json['oauth_provider']),
        'oauthUsername': !exists(json, 'oauth_username') ? undefined : json['oauth_username'],
        'oauthDisplayName': !exists(json, 'oauth_display_name') ? undefined : json['oauth_display_name'],
        'oauthAccountId': !exists(json, 'oauth_account_id') ? undefined : json['oauth_account_id'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'phoneCountryCode': !exists(json, 'phoneCountryCode') ? undefined : json['phoneCountryCode'],
        'isoCountryCode': !exists(json, 'isoCountryCode') ? undefined : json['isoCountryCode'],
        'oauthAccountPhotos': !exists(json, 'oauth_account_photos') ? undefined : json['oauth_account_photos'],
        'oauthEmails': !exists(json, 'oauth_emails') ? undefined : json['oauth_emails'],
        'oauthMetadata': !exists(json, 'oauth_metadata') ? undefined : json['oauth_metadata'],
        'previousUsers': !exists(json, 'previous_users') ? undefined : json['previous_users'],
        'embeddedWalletId': !exists(json, 'embedded_wallet_id') ? undefined : json['embedded_wallet_id'],
        'walletAdditionalAddresses': !exists(json, 'wallet_additional_addresses') ? undefined : (json['wallet_additional_addresses'].map(WalletAdditionalAddressFromJSON)),
        'lastSelectedAt': !exists(json, 'lastSelectedAt') ? undefined : (new Date(json['lastSelectedAt'])),
        'signInEnabled': json['signInEnabled'],
    };
}
function JwtVerifiedCredentialToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'chain': value.chain,
        'refId': value.refId,
        'signerRefId': value.signerRefId,
        'email': value.email,
        'id': value.id,
        'name_service': NameServiceDataToJSON(value.nameService),
        'public_identifier': value.publicIdentifier,
        'wallet_name': value.walletName,
        'wallet_provider': WalletProviderEnumToJSON(value.walletProvider),
        'wallet_properties': WalletPropertiesToJSON(value.walletProperties),
        'format': JwtVerifiedCredentialFormatEnumToJSON(value.format),
        'oauth_provider': ProviderEnumToJSON(value.oauthProvider),
        'oauth_username': value.oauthUsername,
        'oauth_display_name': value.oauthDisplayName,
        'oauth_account_id': value.oauthAccountId,
        'phoneNumber': value.phoneNumber,
        'phoneCountryCode': value.phoneCountryCode,
        'isoCountryCode': value.isoCountryCode,
        'oauth_account_photos': value.oauthAccountPhotos,
        'oauth_emails': value.oauthEmails,
        'oauth_metadata': value.oauthMetadata,
        'previous_users': value.previousUsers,
        'embedded_wallet_id': value.embeddedWalletId,
        'wallet_additional_addresses': value.walletAdditionalAddresses === undefined ? undefined : (value.walletAdditionalAddresses.map(WalletAdditionalAddressToJSON)),
        'lastSelectedAt': value.lastSelectedAt === undefined ? undefined : (value.lastSelectedAt.toISOString()),
        'signInEnabled': value.signInEnabled,
    };
}

export { JwtVerifiedCredentialFromJSON, JwtVerifiedCredentialFromJSONTyped, JwtVerifiedCredentialToJSON };
