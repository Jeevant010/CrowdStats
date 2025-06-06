import { exists } from '../runtime.js';

/* tslint:disable */
function ProviderMultichainAccountAbstractionProvidersFromJSON(json) {
    return ProviderMultichainAccountAbstractionProvidersFromJSONTyped(json);
}
function ProviderMultichainAccountAbstractionProvidersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'clientId': json['clientId'],
        'chain': json['chain'],
        '_default': !exists(json, 'default') ? undefined : json['default'],
    };
}
function ProviderMultichainAccountAbstractionProvidersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'clientId': value.clientId,
        'chain': value.chain,
        'default': value._default,
    };
}

export { ProviderMultichainAccountAbstractionProvidersFromJSON, ProviderMultichainAccountAbstractionProvidersFromJSONTyped, ProviderMultichainAccountAbstractionProvidersToJSON };
