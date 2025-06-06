import { mapValues } from '../runtime.js';
import { AssetFromJSON, AssetToJSON } from './Asset.js';
import { AssetExposureSpenderToInfoFromJSON, AssetExposureSpenderToInfoToJSON } from './AssetExposureSpenderToInfo.js';

/* tslint:disable */
function AssetExposureFromJSON(json) {
    return AssetExposureFromJSONTyped(json);
}
function AssetExposureFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'asset': AssetFromJSON(json['asset']),
        'spenderToInfo': (mapValues(json['spenderToInfo'], AssetExposureSpenderToInfoFromJSON)),
    };
}
function AssetExposureToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'asset': AssetToJSON(value.asset),
        'spenderToInfo': (mapValues(value.spenderToInfo, AssetExposureSpenderToInfoToJSON)),
    };
}

export { AssetExposureFromJSON, AssetExposureFromJSONTyped, AssetExposureToJSON };
