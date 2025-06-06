import { exists } from '../runtime.js';
import { ProviderEnumFromJSON, ProviderEnumToJSON } from './ProviderEnum.js';

/* tslint:disable */
function OAuthAccountFromJSON(json) {
    return OAuthAccountFromJSONTyped(json);
}
function OAuthAccountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'provider': !exists(json, 'provider') ? undefined : ProviderEnumFromJSON(json['provider']),
    };
}
function OAuthAccountToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'provider': ProviderEnumToJSON(value.provider),
    };
}

export { OAuthAccountFromJSON, OAuthAccountFromJSONTyped, OAuthAccountToJSON };
