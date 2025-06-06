import { exists } from '../runtime.js';

/* tslint:disable */
/**
* @export
* @enum {string}
*/
var NetworkTypeEnum;
(function (NetworkTypeEnum) {
    NetworkTypeEnum["Custom"] = "custom";
    NetworkTypeEnum["Default"] = "default";
})(NetworkTypeEnum || (NetworkTypeEnum = {}));
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
        'rpcUrl': !exists(json, 'rpcUrl') ? undefined : json['rpcUrl'],
        'iconUrl': !exists(json, 'iconUrl') ? undefined : json['iconUrl'],
        'type': !exists(json, 'type') ? undefined : json['type'],
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

export { NetworkFromJSON, NetworkFromJSONTyped, NetworkToJSON, NetworkTypeEnum };
