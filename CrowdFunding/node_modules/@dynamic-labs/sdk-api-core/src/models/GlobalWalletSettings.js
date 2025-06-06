import { exists } from '../runtime.js';
import { GlobalWalletSettingsCustomMenuLinksFromJSON, GlobalWalletSettingsCustomMenuLinksToJSON } from './GlobalWalletSettingsCustomMenuLinks.js';

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
        'popupPageTitle': !exists(json, 'popupPageTitle') ? undefined : json['popupPageTitle'],
        'walletIconUrl': !exists(json, 'walletIconUrl') ? undefined : json['walletIconUrl'],
        'customCssUrl': !exists(json, 'customCssUrl') ? undefined : json['customCssUrl'],
        'termsOfServiceUrl': !exists(json, 'termsOfServiceUrl') ? undefined : json['termsOfServiceUrl'],
        'privacyPolicyUrl': !exists(json, 'privacyPolicyUrl') ? undefined : json['privacyPolicyUrl'],
        'termsOfServiceAndPrivacyPolicyMarkdown': !exists(json, 'termsOfServiceAndPrivacyPolicyMarkdown') ? undefined : json['termsOfServiceAndPrivacyPolicyMarkdown'],
        'customMenuLinks': !exists(json, 'customMenuLinks') ? undefined : (json['customMenuLinks'].map(GlobalWalletSettingsCustomMenuLinksFromJSON)),
        'enableLoginWithExternalWallets': !exists(json, 'enableLoginWithExternalWallets') ? undefined : json['enableLoginWithExternalWallets'],
        'enabledAt': !exists(json, 'enabledAt') ? undefined : (json['enabledAt'] === null ? null : new Date(json['enabledAt'])),
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
        'customMenuLinks': value.customMenuLinks === undefined ? undefined : (value.customMenuLinks.map(GlobalWalletSettingsCustomMenuLinksToJSON)),
        'enableLoginWithExternalWallets': value.enableLoginWithExternalWallets,
        'enabledAt': value.enabledAt === undefined ? undefined : (value.enabledAt === null ? null : value.enabledAt.toISOString()),
    };
}

export { GlobalWalletSettingsFromJSON, GlobalWalletSettingsFromJSONTyped, GlobalWalletSettingsToJSON };
