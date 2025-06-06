import { exists } from '../runtime.js';
import { ExternalWalletFundingDefaultSettingsFromJSON, ExternalWalletFundingDefaultSettingsToJSON } from './ExternalWalletFundingDefaultSettings.js';

/* tslint:disable */
function FundingExternalWalletsDefaultSettingsFromJSON(json) {
    return FundingExternalWalletsDefaultSettingsFromJSONTyped(json);
}
function FundingExternalWalletsDefaultSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainSettings': !exists(json, 'chainSettings') ? undefined : (json['chainSettings'].map(ExternalWalletFundingDefaultSettingsFromJSON)),
    };
}
function FundingExternalWalletsDefaultSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chainSettings': value.chainSettings === undefined ? undefined : (value.chainSettings.map(ExternalWalletFundingDefaultSettingsToJSON)),
    };
}

export { FundingExternalWalletsDefaultSettingsFromJSON, FundingExternalWalletsDefaultSettingsFromJSONTyped, FundingExternalWalletsDefaultSettingsToJSON };
