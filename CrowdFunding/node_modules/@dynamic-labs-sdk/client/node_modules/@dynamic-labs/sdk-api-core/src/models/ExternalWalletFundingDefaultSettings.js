import { exists } from '../runtime.js';
import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';
import { ExternalWalletFundingDefaultSettingsTokenFromJSON, ExternalWalletFundingDefaultSettingsTokenToJSON } from './ExternalWalletFundingDefaultSettingsToken.js';

/* tslint:disable */
function ExternalWalletFundingDefaultSettingsFromJSON(json) {
    return ExternalWalletFundingDefaultSettingsFromJSONTyped(json);
}
function ExternalWalletFundingDefaultSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chain': !exists(json, 'chain') ? undefined : ChainEnumFromJSON(json['chain']),
        'token': !exists(json, 'token') ? undefined : ExternalWalletFundingDefaultSettingsTokenFromJSON(json['token']),
    };
}
function ExternalWalletFundingDefaultSettingsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chain': ChainEnumToJSON(value.chain),
        'token': ExternalWalletFundingDefaultSettingsTokenToJSON(value.token),
    };
}

export { ExternalWalletFundingDefaultSettingsFromJSON, ExternalWalletFundingDefaultSettingsFromJSONTyped, ExternalWalletFundingDefaultSettingsToJSON };
