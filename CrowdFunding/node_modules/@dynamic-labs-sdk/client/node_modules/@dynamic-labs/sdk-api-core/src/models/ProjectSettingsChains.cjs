'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var Network = require('./Network.cjs');

/* tslint:disable */
function ProjectSettingsChainsFromJSON(json) {
    return ProjectSettingsChainsFromJSONTyped(json);
}
function ProjectSettingsChainsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'enabled': json['enabled'],
        'networks': !runtime.exists(json, 'networks') ? undefined : (json['networks'].map(Network.NetworkFromJSON)),
    };
}
function ProjectSettingsChainsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'enabled': value.enabled,
        'networks': value.networks === undefined ? undefined : (value.networks.map(Network.NetworkToJSON)),
    };
}

exports.ProjectSettingsChainsFromJSON = ProjectSettingsChainsFromJSON;
exports.ProjectSettingsChainsFromJSONTyped = ProjectSettingsChainsFromJSONTyped;
exports.ProjectSettingsChainsToJSON = ProjectSettingsChainsToJSON;
