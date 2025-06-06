import { exists } from '../runtime.js';
import { NetworkConfigurationFromJSON, NetworkConfigurationToJSON } from './NetworkConfiguration.js';

/* tslint:disable */
function NetworkConfigurationResponseFromJSON(json) {
    return NetworkConfigurationResponseFromJSONTyped(json);
}
function NetworkConfigurationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainName': !exists(json, 'chainName') ? undefined : json['chainName'],
        'networks': !exists(json, 'networks') ? undefined : (json['networks'].map(NetworkConfigurationFromJSON)),
    };
}
function NetworkConfigurationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chainName': value.chainName,
        'networks': value.networks === undefined ? undefined : (value.networks.map(NetworkConfigurationToJSON)),
    };
}

export { NetworkConfigurationResponseFromJSON, NetworkConfigurationResponseFromJSONTyped, NetworkConfigurationResponseToJSON };
