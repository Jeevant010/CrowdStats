import { exists } from '../runtime.js';

/* tslint:disable */
function ProjectSettingsSdkWalletConnectFromJSON(json) {
    return ProjectSettingsSdkWalletConnectFromJSONTyped(json);
}
function ProjectSettingsSdkWalletConnectFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
        'v2Enabled': !exists(json, 'v2Enabled') ? undefined : json['v2Enabled'],
        'walletProjectId': !exists(json, 'walletProjectId') ? undefined : json['walletProjectId'],
    };
}
function ProjectSettingsSdkWalletConnectToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'projectId': value.projectId,
        'v2Enabled': value.v2Enabled,
        'walletProjectId': value.walletProjectId,
    };
}

export { ProjectSettingsSdkWalletConnectFromJSON, ProjectSettingsSdkWalletConnectFromJSONTyped, ProjectSettingsSdkWalletConnectToJSON };
