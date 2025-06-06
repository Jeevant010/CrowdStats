'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var MFADeviceType = require('./MFADeviceType.cjs');

/* tslint:disable */
function MFADeviceFromJSON(json) {
    return MFADeviceFromJSONTyped(json);
}
function MFADeviceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': !runtime.exists(json, 'type') ? undefined : MFADeviceType.MFADeviceTypeFromJSON(json['type']),
        'verified': !runtime.exists(json, 'verified') ? undefined : json['verified'],
        'id': !runtime.exists(json, 'id') ? undefined : json['id'],
        'createdAt': !runtime.exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'verifiedAt': !runtime.exists(json, 'verifiedAt') ? undefined : (json['verifiedAt'] === null ? null : new Date(json['verifiedAt'])),
        '_default': !runtime.exists(json, 'default') ? undefined : json['default'],
        'alias': !runtime.exists(json, 'alias') ? undefined : json['alias'],
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
        'type': MFADeviceType.MFADeviceTypeToJSON(value.type),
        'verified': value.verified,
        'id': value.id,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'verifiedAt': value.verifiedAt === undefined ? undefined : (value.verifiedAt === null ? null : value.verifiedAt.toISOString()),
        'default': value._default,
        'alias': value.alias,
    };
}

exports.MFADeviceFromJSON = MFADeviceFromJSON;
exports.MFADeviceFromJSONTyped = MFADeviceFromJSONTyped;
exports.MFADeviceToJSON = MFADeviceToJSON;
