import { exists } from '../runtime.js';
import { MFADeviceTypeFromJSON, MFADeviceTypeToJSON } from './MFADeviceType.js';

/* tslint:disable */
function MFADeviceFromJSON(json) {
    return MFADeviceFromJSONTyped(json);
}
function MFADeviceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': !exists(json, 'type') ? undefined : MFADeviceTypeFromJSON(json['type']),
        'verified': !exists(json, 'verified') ? undefined : json['verified'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'verifiedAt': !exists(json, 'verifiedAt') ? undefined : (json['verifiedAt'] === null ? null : new Date(json['verifiedAt'])),
        '_default': !exists(json, 'default') ? undefined : json['default'],
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
    };
}
function MFADeviceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': MFADeviceTypeToJSON(value.type),
        'verified': value.verified,
        'id': value.id,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'verifiedAt': value.verifiedAt === undefined ? undefined : (value.verifiedAt === null ? null : value.verifiedAt.toISOString()),
        'default': value._default,
        'alias': value.alias,
    };
}

export { MFADeviceFromJSON, MFADeviceFromJSONTyped, MFADeviceToJSON };
