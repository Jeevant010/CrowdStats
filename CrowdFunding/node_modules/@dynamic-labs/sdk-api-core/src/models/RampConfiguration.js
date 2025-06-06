import { ProviderEnumFromJSON, ProviderEnumToJSON } from './ProviderEnum.js';

/* tslint:disable */
function RampConfigurationFromJSON(json) {
    return RampConfigurationFromJSONTyped(json);
}
function RampConfigurationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'provider': ProviderEnumFromJSON(json['provider']),
        'name': json['name'],
        'iconUrl': json['iconUrl'],
        'url': json['url'],
    };
}
function RampConfigurationToJSON(value) {
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

export { RampConfigurationFromJSON, RampConfigurationFromJSONTyped, RampConfigurationToJSON };
