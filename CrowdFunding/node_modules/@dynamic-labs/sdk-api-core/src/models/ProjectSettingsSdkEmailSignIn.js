import { exists } from '../runtime.js';
import { SignInProviderEnumFromJSON, SignInProviderEnumToJSON } from './SignInProviderEnum.js';

/* tslint:disable */
function ProjectSettingsSdkEmailSignInFromJSON(json) {
    return ProjectSettingsSdkEmailSignInFromJSONTyped(json);
}
function ProjectSettingsSdkEmailSignInFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'signInProvider': !exists(json, 'signInProvider') ? undefined : SignInProviderEnumFromJSON(json['signInProvider']),
    };
}
function ProjectSettingsSdkEmailSignInToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'signInProvider': SignInProviderEnumToJSON(value.signInProvider),
    };
}

export { ProjectSettingsSdkEmailSignInFromJSON, ProjectSettingsSdkEmailSignInFromJSONTyped, ProjectSettingsSdkEmailSignInToJSON };
