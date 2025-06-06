import { exists } from '../runtime.js';
import { ExternalWalletFundingTokenRuleFromJSON, ExternalWalletFundingTokenRuleToJSON } from './ExternalWalletFundingTokenRule.js';

/* tslint:disable */
function ExternalWalletFundingDefaultSettingsTokenFromJSON(json) {
    return ExternalWalletFundingDefaultSettingsTokenFromJSONTyped(json);
}
function ExternalWalletFundingDefaultSettingsTokenFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'value': !exists(json, 'value') ? undefined : json['value'],
        'rule': !exists(json, 'rule') ? undefined : ExternalWalletFundingTokenRuleFromJSON(json['rule']),
    };
}
function ExternalWalletFundingDefaultSettingsTokenToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'value': value.value,
        'rule': ExternalWalletFundingTokenRuleToJSON(value.rule),
    };
}

export { ExternalWalletFundingDefaultSettingsTokenFromJSON, ExternalWalletFundingDefaultSettingsTokenFromJSONTyped, ExternalWalletFundingDefaultSettingsTokenToJSON };
