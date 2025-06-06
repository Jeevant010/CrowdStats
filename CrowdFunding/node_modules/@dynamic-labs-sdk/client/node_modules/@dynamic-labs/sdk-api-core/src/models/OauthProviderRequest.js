import { exists } from '../runtime.js';
import { ProviderEnumFromJSON, ProviderEnumToJSON } from './ProviderEnum.js';

/* tslint:disable */
function OauthProviderRequestFromJSON(json) {
    return OauthProviderRequestFromJSONTyped(json);
}
function OauthProviderRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'provider': !exists(json, 'provider') ? undefined : ProviderEnumFromJSON(json['provider']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'didToken': !exists(json, 'didToken') ? undefined : json['didToken'],
    };
}
function OauthProviderRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'provider': ProviderEnumToJSON(value.provider),
        'accessToken': value.accessToken,
        'didToken': value.didToken,
    };
}

export { OauthProviderRequestFromJSON, OauthProviderRequestFromJSONTyped, OauthProviderRequestToJSON };
