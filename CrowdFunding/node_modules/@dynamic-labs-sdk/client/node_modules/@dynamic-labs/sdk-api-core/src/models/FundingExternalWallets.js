import { exists } from '../runtime.js';
import { FundingExternalWalletsDefaultSettingsFromJSON, FundingExternalWalletsDefaultSettingsToJSON } from './FundingExternalWalletsDefaultSettings.js';
import { FundingExternalWalletsMinAmountFromJSON, FundingExternalWalletsMinAmountToJSON } from './FundingExternalWalletsMinAmount.js';

/* tslint:disable */
function FundingExternalWalletsFromJSON(json) {
    return FundingExternalWalletsFromJSONTyped(json);
}
function FundingExternalWalletsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'enabled': json['enabled'],
        'minAmount': !exists(json, 'minAmount') ? undefined : FundingExternalWalletsMinAmountFromJSON(json['minAmount']),
        'defaultSettings': !exists(json, 'defaultSettings') ? undefined : FundingExternalWalletsDefaultSettingsFromJSON(json['defaultSettings']),
    };
}
function FundingExternalWalletsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'enabled': value.enabled,
        'minAmount': FundingExternalWalletsMinAmountToJSON(value.minAmount),
        'defaultSettings': FundingExternalWalletsDefaultSettingsToJSON(value.defaultSettings),
    };
}

export { FundingExternalWalletsFromJSON, FundingExternalWalletsFromJSONTyped, FundingExternalWalletsToJSON };
