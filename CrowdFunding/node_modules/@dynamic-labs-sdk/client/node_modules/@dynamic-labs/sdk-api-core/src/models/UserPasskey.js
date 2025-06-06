import { exists } from '../runtime.js';
import { PasskeyStorageFromJSON, PasskeyStorageToJSON } from './PasskeyStorage.js';

/* tslint:disable */
function UserPasskeyFromJSON(json) {
    return UserPasskeyFromJSONTyped(json);
}
function UserPasskeyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
        'userAgent': !exists(json, 'userAgent') ? undefined : json['userAgent'],
        'origin': !exists(json, 'origin') ? undefined : json['origin'],
        'credentialId': json['credentialId'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'storage': !exists(json, 'storage') ? undefined : PasskeyStorageFromJSON(json['storage']),
    };
}
function UserPasskeyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'alias': value.alias,
        'userAgent': value.userAgent,
        'origin': value.origin,
        'credentialId': value.credentialId,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'storage': PasskeyStorageToJSON(value.storage),
    };
}

export { UserPasskeyFromJSON, UserPasskeyFromJSONTyped, UserPasskeyToJSON };
