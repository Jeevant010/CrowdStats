'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var JwtVerifiedCredentialFormatEnum = require('./JwtVerifiedCredentialFormatEnum.cjs');
var NameServiceData = require('./NameServiceData.cjs');
var ProviderEnum = require('./ProviderEnum.cjs');
var WalletAdditionalAddress = require('./WalletAdditionalAddress.cjs');
var WalletProperties = require('./WalletProperties.cjs');
var WalletProviderEnum = require('./WalletProviderEnum.cjs');

/* tslint:disable */
function JwtVerifiedCredentialFromJSON(json) {
    return JwtVerifiedCredentialFromJSONTyped(json);
}
function JwtVerifiedCredentialFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': !runtime.exists(json, 'address') ? undefined : json['address'],
        'chain': !runtime.exists(json, 'chain') ? undefined : json['chain'],
        'refId': !runtime.exists(json, 'refId') ? undefined : json['refId'],
        'signerRefId': !runtime.exists(json, 'signerRefId') ? undefined : json['signerRefId'],
        'email': !runtime.exists(json, 'email') ? undefined : json['email'],
        'id': json['id'],
        'nameService': !runtime.exists(json, 'name_service') ? undefined : NameServiceData.NameServiceDataFromJSON(json['name_service']),
        'publicIdentifier': !runtime.exists(json, 'public_identifier') ? undefined : json['public_identifier'],
        'walletName': !runtime.exists(json, 'wallet_name') ? undefined : json['wallet_name'],
        'walletProvider': !runtime.exists(json, 'wallet_provider') ? undefined : WalletProviderEnum.WalletProviderEnumFromJSON(json['wallet_provider']),
        'walletProperties': !runtime.exists(json, 'wallet_properties') ? undefined : WalletProperties.WalletPropertiesFromJSON(json['wallet_properties']),
        'format': JwtVerifiedCredentialFormatEnum.JwtVerifiedCredentialFormatEnumFromJSON(json['format']),
        'oauthProvider': !runtime.exists(json, 'oauth_provider') ? undefined : ProviderEnum.ProviderEnumFromJSON(json['oauth_provider']),
        'oauthUsername': !runtime.exists(json, 'oauth_username') ? undefined : json['oauth_username'],
        'oauthDisplayName': !runtime.exists(json, 'oauth_display_name') ? undefined : json['oauth_display_name'],
        'oauthAccountId': !runtime.exists(json, 'oauth_account_id') ? undefined : json['oauth_account_id'],
        'phoneNumber': !runtime.exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'phoneCountryCode': !runtime.exists(json, 'phoneCountryCode') ? undefined : json['phoneCountryCode'],
        'isoCountryCode': !runtime.exists(json, 'isoCountryCode') ? undefined : json['isoCountryCode'],
        'oauthAccountPhotos': !runtime.exists(json, 'oauth_account_photos') ? undefined : json['oauth_account_photos'],
        'oauthEmails': !runtime.exists(json, 'oauth_emails') ? undefined : json['oauth_emails'],
        'oauthMetadata': !runtime.exists(json, 'oauth_metadata') ? undefined : json['oauth_metadata'],
        'previousUsers': !runtime.exists(json, 'previous_users') ? undefined : json['previous_users'],
        'embeddedWalletId': !runtime.exists(json, 'embedded_wallet_id') ? undefined : json['embedded_wallet_id'],
        'walletAdditionalAddresses': !runtime.exists(json, 'wallet_additional_addresses') ? undefined : (json['wallet_additional_addresses'].map(WalletAdditionalAddress.WalletAdditionalAddressFromJSON)),
        'lastSelectedAt': !runtime.exists(json, 'lastSelectedAt') ? undefined : (new Date(json['lastSelectedAt'])),
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
        'name_service': NameServiceData.NameServiceDataToJSON(value.nameService),
        'public_identifier': value.publicIdentifier,
        'wallet_name': value.walletName,
        'wallet_provider': WalletProviderEnum.WalletProviderEnumToJSON(value.walletProvider),
        'wallet_properties': WalletProperties.WalletPropertiesToJSON(value.walletProperties),
        'format': JwtVerifiedCredentialFormatEnum.JwtVerifiedCredentialFormatEnumToJSON(value.format),
        'oauth_provider': ProviderEnum.ProviderEnumToJSON(value.oauthProvider),
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
        'wallet_additional_addresses': value.walletAdditionalAddresses === undefined ? undefined : (value.walletAdditionalAddresses.map(WalletAdditionalAddress.WalletAdditionalAddressToJSON)),
        'lastSelectedAt': value.lastSelectedAt === undefined ? undefined : (value.lastSelectedAt.toISOString()),
        'signInEnabled': value.signInEnabled,
    };
}

exports.JwtVerifiedCredentialFromJSON = JwtVerifiedCredentialFromJSON;
exports.JwtVerifiedCredentialFromJSONTyped = JwtVerifiedCredentialFromJSONTyped;
exports.JwtVerifiedCredentialToJSON = JwtVerifiedCredentialToJSON;
