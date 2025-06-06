import { exists } from '../runtime.js';

/* tslint:disable */
function SimulateUserOpRequestFromJSON(json) {
    return SimulateUserOpRequestFromJSONTyped(json);
}
function SimulateUserOpRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainId': json['chainId'],
        'operation': json['operation'],
        'entryPoint': json['entryPoint'],
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
        'value': json['value'],
    };
}
function SimulateUserOpRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chainId': value.chainId,
        'operation': value.operation,
        'entryPoint': value.entryPoint,
        'domain': value.domain,
        'value': value.value,
    };
}

export { SimulateUserOpRequestFromJSON, SimulateUserOpRequestFromJSONTyped, SimulateUserOpRequestToJSON };
