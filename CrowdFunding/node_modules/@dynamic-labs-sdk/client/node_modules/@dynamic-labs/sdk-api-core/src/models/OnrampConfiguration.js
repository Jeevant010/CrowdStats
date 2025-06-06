import { exists } from '../runtime.js';
import { ProviderEnumFromJSON, ProviderEnumToJSON } from './ProviderEnum.js';

/* tslint:disable */
function OnrampConfigurationFromJSON(json) {
    return OnrampConfigurationFromJSONTyped(json);
}
function OnrampConfigurationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'provider': !exists(json, 'provider') ? undefined : ProviderEnumFromJSON(json['provider']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'iconUrl': !exists(json, 'iconUrl') ? undefined : json['iconUrl'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}
function OnrampConfigurationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'provider': ProviderEnumToJSON(value.provider),
        'name': value.name,
        'iconUrl': value.iconUrl,
        'url': value.url,
    };
}

export { OnrampConfigurationFromJSON, OnrampConfigurationFromJSONTyped, OnrampConfigurationToJSON };
