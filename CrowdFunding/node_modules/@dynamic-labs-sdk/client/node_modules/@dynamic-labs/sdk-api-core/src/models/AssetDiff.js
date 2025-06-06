import { AssetFromJSON, AssetToJSON } from './Asset.js';
import { AssetTransferFromJSON, AssetTransferToJSON } from './AssetTransfer.js';

/* tslint:disable */
function AssetDiffFromJSON(json) {
    return AssetDiffFromJSONTyped(json);
}
function AssetDiffFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'asset': AssetFromJSON(json['asset']),
        'transferIn': (json['transferIn'].map(AssetTransferFromJSON)),
        'transferOut': (json['transferOut'].map(AssetTransferFromJSON)),
    };
}
function AssetDiffToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'asset': AssetToJSON(value.asset),
        'transferIn': (value.transferIn.map(AssetTransferToJSON)),
        'transferOut': (value.transferOut.map(AssetTransferToJSON)),
    };
}

export { AssetDiffFromJSON, AssetDiffFromJSONTyped, AssetDiffToJSON };
