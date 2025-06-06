import { exists } from '../runtime.js';
import { RampConfigurationFromJSON, RampConfigurationToJSON } from './RampConfiguration.js';

/* tslint:disable */
function SupportedOnrampsResponseFromJSON(json) {
    return SupportedOnrampsResponseFromJSONTyped(json);
}
function SupportedOnrampsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'onramps': !exists(json, 'onramps') ? undefined : (json['onramps'].map(RampConfigurationFromJSON)),
    };
}
function SupportedOnrampsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'onramps': value.onramps === undefined ? undefined : (value.onramps.map(RampConfigurationToJSON)),
    };
}

export { SupportedOnrampsResponseFromJSON, SupportedOnrampsResponseFromJSONTyped, SupportedOnrampsResponseToJSON };
