'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var GlobalWalletSettingsCustomMenuLinks = require('./GlobalWalletSettingsCustomMenuLinks.cjs');

/* tslint:disable */
function GlobalWalletSettingsFromJSON(json) {
    return GlobalWalletSettingsFromJSONTyped(json);
}
function GlobalWalletSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'walletName': json['walletName'],
        'popupPageTitle': !runtime.exists(json, 'popupPageTitle') ? undefined : json['popupPageTitle'],
        'walletIconUrl': !runtime.exists(json, 'walletIconUrl') ? undefined : json['walletIconUrl'],
        'customCssUrl': !runtime.exists(json, 'customCssUrl') ? undefined : json['customCssUrl'],
        'termsOfServiceUrl': !runtime.exists(json, 'termsOfServiceUrl') ? undefined : json['termsOfServiceUrl'],
        'privacyPolicyUrl': !runtime.exists(json, 'privacyPolicyUrl') ? undefined : json['privacyPolicyUrl'],
        'termsOfServiceAndPrivacyPolicyMarkdown': !runtime.exists(json, 'termsOfServiceAndPrivacyPolicyMarkdown') ? undefined : json['termsOfServiceAndPrivacyPolicyMarkdown'],
        'customMenuLinks': !runtime.exists(json, 'customMenuLinks') ? undefined : (json['customMenuLinks'].map(GlobalWalletSettingsCustomMenuLinks.GlobalWalletSettingsCustomMenuLinksFromJSON)),
        'enableLoginWithExternalWallets': !runtime.exists(json, 'enableLoginWithExternalWallets') ? undefined : json['enableLoginWithExternalWallets'],
        'enabledAt': !runtime.exists(json, 'enabledAt') ? undefined : (json['enabledAt'] === null ? null : new Date(json['enabledAt'])),
    };
}
function GlobalWalletSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'walletName': value.walletName,
        'popupPageTitle': value.popupPageTitle,
        'walletIconUrl': value.walletIconUrl,
        'customCssUrl': value.customCssUrl,
        'termsOfServiceUrl': value.termsOfServiceUrl,
        'privacyPolicyUrl': value.privacyPolicyUrl,
        'termsOfServiceAndPrivacyPolicyMarkdown': value.termsOfServiceAndPrivacyPolicyMarkdown,
        'customMenuLinks': value.customMenuLinks === undefined ? undefined : (value.customMenuLinks.map(GlobalWalletSettingsCustomMenuLinks.GlobalWalletSettingsCustomMenuLinksToJSON)),
        'enableLoginWithExternalWallets': value.enableLoginWithExternalWallets,
        'enabledAt': value.enabledAt === undefined ? undefined : (value.enabledAt === null ? null : value.enabledAt.toISOString()),
    };
}

exports.GlobalWalletSettingsFromJSON = GlobalWalletSettingsFromJSON;
exports.GlobalWalletSettingsFromJSONTyped = GlobalWalletSettingsFromJSONTyped;
exports.GlobalWalletSettingsToJSON = GlobalWalletSettingsToJSON;
