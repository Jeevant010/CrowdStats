import { JwksKeyFromJSON, JwksKeyToJSON } from './JwksKey.js';

/* tslint:disable */
function JwksResponseFromJSON(json) {
    return JwksResponseFromJSONTyped(json);
}
function JwksResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'keys': (json['keys'].map(JwksKeyFromJSON)),
    };
}
function JwksResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'keys': (value.keys.map(JwksKeyToJSON)),
    };
}

export { JwksResponseFromJSON, JwksResponseFromJSONTyped, JwksResponseToJSON };
