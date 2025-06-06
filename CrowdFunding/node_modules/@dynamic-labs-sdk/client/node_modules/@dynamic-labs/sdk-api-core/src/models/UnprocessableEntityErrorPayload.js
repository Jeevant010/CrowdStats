import { exists } from '../runtime.js';
import { MergeConflictsFromJSON, MergeConflictsToJSON } from './MergeConflicts.js';
import { ProviderEnumFromJSON, ProviderEnumToJSON } from './ProviderEnum.js';

/* tslint:disable */
function UnprocessableEntityErrorPayloadFromJSON(json) {
    return UnprocessableEntityErrorPayloadFromJSONTyped(json);
}
function UnprocessableEntityErrorPayloadFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': !exists(json, 'email') ? undefined : json['email'],
        'loginProvider': !exists(json, 'loginProvider') ? undefined : ProviderEnumFromJSON(json['loginProvider']),
        'embeddedWalletName': !exists(json, 'embeddedWalletName') ? undefined : json['embeddedWalletName'],
        'embeddedSocialSigninProvider': !exists(json, 'embeddedSocialSigninProvider') ? undefined : ProviderEnumFromJSON(json['embeddedSocialSigninProvider']),
        'mergeConflicts': !exists(json, 'mergeConflicts') ? undefined : MergeConflictsFromJSON(json['mergeConflicts']),
        'additionalMessages': !exists(json, 'additionalMessages') ? undefined : json['additionalMessages'],
    };
}
function UnprocessableEntityErrorPayloadToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': value.email,
        'loginProvider': ProviderEnumToJSON(value.loginProvider),
        'embeddedWalletName': value.embeddedWalletName,
        'embeddedSocialSigninProvider': ProviderEnumToJSON(value.embeddedSocialSigninProvider),
        'mergeConflicts': MergeConflictsToJSON(value.mergeConflicts),
        'additionalMessages': value.additionalMessages,
    };
}

export { UnprocessableEntityErrorPayloadFromJSON, UnprocessableEntityErrorPayloadFromJSONTyped, UnprocessableEntityErrorPayloadToJSON };
