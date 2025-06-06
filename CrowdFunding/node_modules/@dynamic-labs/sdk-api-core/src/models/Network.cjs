'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
/**
* @export
* @enum {string}
*/
exports.NetworkTypeEnum = void 0;
(function (NetworkTypeEnum) {
    NetworkTypeEnum["Custom"] = "custom";
    NetworkTypeEnum["Default"] = "default";
})(exports.NetworkTypeEnum || (exports.NetworkTypeEnum = {}));
function NetworkFromJSON(json) {
    return NetworkFromJSONTyped(json);
}
function NetworkFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'networkId': json['networkId'],
        'chainName': json['chainName'],
        'enabled': json['enabled'],
        'rpcUrl': !runtime.exists(json, 'rpcUrl') ? undefined : json['rpcUrl'],
        'iconUrl': !runtime.exists(json, 'iconUrl') ? undefined : json['iconUrl'],
        'type': !runtime.exists(json, 'type') ? undefined : json['type'],
    };
}
function NetworkToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'networkId': value.networkId,
        'chainName': value.chainName,
        'enabled': value.enabled,
        'rpcUrl': value.rpcUrl,
        'iconUrl': value.iconUrl,
        'type': value.type,
    };
}

exports.NetworkFromJSON = NetworkFromJSON;
exports.NetworkFromJSONTyped = NetworkFromJSONTyped;
exports.NetworkToJSON = NetworkToJSON;
