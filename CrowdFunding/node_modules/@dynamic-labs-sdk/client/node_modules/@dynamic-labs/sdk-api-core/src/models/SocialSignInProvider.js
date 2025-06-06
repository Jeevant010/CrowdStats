import { exists } from '../runtime.js';
import { SocialSignInProviderEnumFromJSON, SocialSignInProviderEnumToJSON } from './SocialSignInProviderEnum.js';

/* tslint:disable */
function SocialSignInProviderFromJSON(json) {
    return SocialSignInProviderFromJSONTyped(json);
}
function SocialSignInProviderFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'provider': SocialSignInProviderEnumFromJSON(json['provider']),
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}
function SocialSignInProviderToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'provider': SocialSignInProviderEnumToJSON(value.provider),
        'enabled': value.enabled,
    };
}

export { SocialSignInProviderFromJSON, SocialSignInProviderFromJSONTyped, SocialSignInProviderToJSON };
