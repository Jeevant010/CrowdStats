import { exists } from '../runtime.js';
import { NetworkFromJSON, NetworkToJSON } from './Network.js';

/* tslint:disable */
function ProjectSettingsChainsFromJSON(json) {
    return ProjectSettingsChainsFromJSONTyped(json);
}
function ProjectSettingsChainsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'enabled': json['enabled'],
        'networks': !exists(json, 'networks') ? undefined : (json['networks'].map(NetworkFromJSON)),
    };
}
function ProjectSettingsChainsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'enabled': value.enabled,
        'networks': value.networks === undefined ? undefined : (value.networks.map(NetworkToJSON)),
    };
}

export { ProjectSettingsChainsFromJSON, ProjectSettingsChainsFromJSONTyped, ProjectSettingsChainsToJSON };
