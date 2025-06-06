import { exists } from '../runtime.js';

/* tslint:disable */
function AssetFromJSON(json) {
    return AssetFromJSONTyped(json);
}
function AssetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'chainId': !exists(json, 'chainId') ? undefined : json['chainId'],
        'chainName': json['chainName'],
        'decimals': json['decimals'],
        'logoUrl': json['logoUrl'],
        'name': json['name'],
        'symbol': json['symbol'],
        'type': json['type'],
    };
}
function AssetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'chainId': value.chainId,
        'chainName': value.chainName,
        'decimals': value.decimals,
        'logoUrl': value.logoUrl,
        'name': value.name,
        'symbol': value.symbol,
        'type': value.type,
    };
}

export { AssetFromJSON, AssetFromJSONTyped, AssetToJSON };
