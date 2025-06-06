import { exists } from '../runtime.js';
import { SignInProviderEnumFromJSON, SignInProviderEnumToJSON } from './SignInProviderEnum.js';
import { SocialSignInProviderFromJSON, SocialSignInProviderToJSON } from './SocialSignInProvider.js';

/* tslint:disable */
function ProjectSettingsSdkSocialSignInFromJSON(json) {
    return ProjectSettingsSdkSocialSignInFromJSONTyped(json);
}
function ProjectSettingsSdkSocialSignInFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signInProvider': !exists(json, 'signInProvider') ? undefined : SignInProviderEnumFromJSON(json['signInProvider']),
        'providers': !exists(json, 'providers') ? undefined : (json['providers'].map(SocialSignInProviderFromJSON)),
    };
}
function ProjectSettingsSdkSocialSignInToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'signInProvider': SignInProviderEnumToJSON(value.signInProvider),
        'providers': value.providers === undefined ? undefined : (value.providers.map(SocialSignInProviderToJSON)),
    };
}

export { ProjectSettingsSdkSocialSignInFromJSON, ProjectSettingsSdkSocialSignInFromJSONTyped, ProjectSettingsSdkSocialSignInToJSON };
