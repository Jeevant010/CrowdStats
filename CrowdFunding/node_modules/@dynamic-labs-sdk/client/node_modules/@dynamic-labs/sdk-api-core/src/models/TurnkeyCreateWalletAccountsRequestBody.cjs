'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TurnkeyCreateWalletAccountsRequestBodyParameters = require('./TurnkeyCreateWalletAccountsRequestBodyParameters.cjs');

/* tslint:disable */
function TurnkeyCreateWalletAccountsRequestBodyFromJSON(json) {
    return TurnkeyCreateWalletAccountsRequestBodyFromJSONTyped(json);
}
function TurnkeyCreateWalletAccountsRequestBodyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'organizationId': json['organizationId'],
        'parameters': TurnkeyCreateWalletAccountsRequestBodyParameters.TurnkeyCreateWalletAccountsRequestBodyParametersFromJSON(json['parameters']),
        'timestampMs': json['timestampMs'],
        'type': json['type'],
    };
}
function TurnkeyCreateWalletAccountsRequestBodyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'organizationId': value.organizationId,
        'parameters': TurnkeyCreateWalletAccountsRequestBodyParameters.TurnkeyCreateWalletAccountsRequestBodyParametersToJSON(value.parameters),
        'timestampMs': value.timestampMs,
        'type': value.type,
    };
}

exports.TurnkeyCreateWalletAccountsRequestBodyFromJSON = TurnkeyCreateWalletAccountsRequestBodyFromJSON;
exports.TurnkeyCreateWalletAccountsRequestBodyFromJSONTyped = TurnkeyCreateWalletAccountsRequestBodyFromJSONTyped;
exports.TurnkeyCreateWalletAccountsRequestBodyToJSON = TurnkeyCreateWalletAccountsRequestBodyToJSON;
