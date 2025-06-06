import { exists } from '../runtime.js';
import { RampConfigurationFromJSON, RampConfigurationToJSON } from './RampConfiguration.js';

/* tslint:disable */
function SupportedOfframpsResponseFromJSON(json) {
    return SupportedOfframpsResponseFromJSONTyped(json);
}
function SupportedOfframpsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'offramps': !exists(json, 'offramps') ? undefined : (json['offramps'].map(RampConfigurationFromJSON)),
    };
}
function SupportedOfframpsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'offramps': value.offramps === undefined ? undefined : (value.offramps.map(RampConfigurationToJSON)),
    };
}

export { SupportedOfframpsResponseFromJSON, SupportedOfframpsResponseFromJSONTyped, SupportedOfframpsResponseToJSON };
