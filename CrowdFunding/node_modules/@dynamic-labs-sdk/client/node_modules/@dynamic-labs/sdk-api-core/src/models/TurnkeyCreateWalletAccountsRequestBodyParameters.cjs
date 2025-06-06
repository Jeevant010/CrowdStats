'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TurnkeyWalletAccount = require('./TurnkeyWalletAccount.cjs');

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
        'accounts': (json['accounts'].map(TurnkeyWalletAccount.TurnkeyWalletAccountFromJSON)),
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
        'accounts': (value.accounts.map(TurnkeyWalletAccount.TurnkeyWalletAccountToJSON)),
    };
}

exports.TurnkeyCreateWalletAccountsRequestBodyParametersFromJSON = TurnkeyCreateWalletAccountsRequestBodyParametersFromJSON;
exports.TurnkeyCreateWalletAccountsRequestBodyParametersFromJSONTyped = TurnkeyCreateWalletAccountsRequestBodyParametersFromJSONTyped;
exports.TurnkeyCreateWalletAccountsRequestBodyParametersToJSON = TurnkeyCreateWalletAccountsRequestBodyParametersToJSON;
