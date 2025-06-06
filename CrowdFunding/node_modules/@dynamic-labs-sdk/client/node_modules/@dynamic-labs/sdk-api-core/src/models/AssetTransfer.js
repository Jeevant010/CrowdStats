import { exists } from '../runtime.js';

/* tslint:disable */
function AssetTransferFromJSON(json) {
    return AssetTransferFromJSONTyped(json);
}
function AssetTransferFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'rawValue': !exists(json, 'rawValue') ? undefined : json['rawValue'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'usdPrice': !exists(json, 'usdPrice') ? undefined : json['usdPrice'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}
function AssetTransferToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'rawValue': value.rawValue,
        'summary': value.summary,
        'usdPrice': value.usdPrice,
        'value': value.value,
    };
}

export { AssetTransferFromJSON, AssetTransferFromJSONTyped, AssetTransferToJSON };
