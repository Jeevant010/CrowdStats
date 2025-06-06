import { TurnkeyWalletAccountFromJSON, TurnkeyWalletAccountToJSON } from './TurnkeyWalletAccount.js';

/* tslint:disable */
function TurnkeyCreateWalletAccountsRequestBodyParametersFromJSON(json) {
    return TurnkeyCreateWalletAccountsRequestBodyParametersFromJSONTyped(json);
}
function TurnkeyCreateWalletAccountsRequestBodyParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'walletId': json['walletId'],
        'accounts': (json['accounts'].map(TurnkeyWalletAccountFromJSON)),
    };
}
function TurnkeyCreateWalletAccountsRequestBodyParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'walletId': value.walletId,
        'accounts': (value.accounts.map(TurnkeyWalletAccountToJSON)),
    };
}

export { TurnkeyCreateWalletAccountsRequestBodyParametersFromJSON, TurnkeyCreateWalletAccountsRequestBodyParametersFromJSONTyped, TurnkeyCreateWalletAccountsRequestBodyParametersToJSON };
