import { exists } from '../runtime.js';
import { OnrampConfigurationFromJSON, OnrampConfigurationToJSON } from './OnrampConfiguration.js';

/* tslint:disable */
function SupportedOnrampsResponseFromJSON(json) {
    return SupportedOnrampsResponseFromJSONTyped(json);
}
function SupportedOnrampsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'onramps': !exists(json, 'onramps') ? undefined : (json['onramps'].map(OnrampConfigurationFromJSON)),
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
        'onramps': value.onramps === undefined ? undefined : (value.onramps.map(OnrampConfigurationToJSON)),
    };
}

export { SupportedOnrampsResponseFromJSON, SupportedOnrampsResponseFromJSONTyped, SupportedOnrampsResponseToJSON };
