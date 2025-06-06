import { TurnkeyCreateWalletAccountsRequestBodyParametersFromJSON, TurnkeyCreateWalletAccountsRequestBodyParametersToJSON } from './TurnkeyCreateWalletAccountsRequestBodyParameters.js';

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
        'parameters': TurnkeyCreateWalletAccountsRequestBodyParametersFromJSON(json['parameters']),
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
        'parameters': TurnkeyCreateWalletAccountsRequestBodyParametersToJSON(value.parameters),
        'timestampMs': value.timestampMs,
        'type': value.type,
    };
}

export { TurnkeyCreateWalletAccountsRequestBodyFromJSON, TurnkeyCreateWalletAccountsRequestBodyFromJSONTyped, TurnkeyCreateWalletAccountsRequestBodyToJSON };
