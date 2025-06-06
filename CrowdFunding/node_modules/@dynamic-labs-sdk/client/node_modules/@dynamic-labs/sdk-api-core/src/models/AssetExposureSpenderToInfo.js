import { exists } from '../runtime.js';

/* tslint:disable */
function AssetExposureSpenderToInfoFromJSON(json) {
    return AssetExposureSpenderToInfoFromJSONTyped(json);
}
function AssetExposureSpenderToInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': json['amount'],
        'spenderAlias': !exists(json, 'spenderAlias') ? undefined : json['spenderAlias'],
        'usdValue': !exists(json, 'usdValue') ? undefined : json['usdValue'],
    };
}
function AssetExposureSpenderToInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'spenderAlias': value.spenderAlias,
        'usdValue': value.usdValue,
    };
}

export { AssetExposureSpenderToInfoFromJSON, AssetExposureSpenderToInfoFromJSONTyped, AssetExposureSpenderToInfoToJSON };
