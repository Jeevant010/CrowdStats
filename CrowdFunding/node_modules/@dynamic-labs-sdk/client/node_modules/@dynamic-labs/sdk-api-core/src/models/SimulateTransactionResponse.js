import { exists } from '../runtime.js';
import { AssetDiffFromJSON, AssetDiffToJSON } from './AssetDiff.js';
import { AssetExposureFromJSON, AssetExposureToJSON } from './AssetExposure.js';
import { BlockaidValidationFromJSON, BlockaidValidationToJSON } from './BlockaidValidation.js';
import { PriceDataFromJSON, PriceDataToJSON } from './PriceData.js';

/* tslint:disable */
function SimulateTransactionResponseFromJSON(json) {
    return SimulateTransactionResponseFromJSONTyped(json);
}
function SimulateTransactionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'inAssets': (json['inAssets'].map(AssetDiffFromJSON)),
        'outAssets': (json['outAssets'].map(AssetDiffFromJSON)),
        'counterparties': !exists(json, 'counterparties') ? undefined : json['counterparties'],
        'priceData': PriceDataFromJSON(json['priceData']),
        'showTotalFiat': json['showTotalFiat'],
        'validation': !exists(json, 'validation') ? undefined : BlockaidValidationFromJSON(json['validation']),
        'assetExposures': !exists(json, 'assetExposures') ? undefined : (json['assetExposures'].map(AssetExposureFromJSON)),
    };
}
function SimulateTransactionResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'inAssets': (value.inAssets.map(AssetDiffToJSON)),
        'outAssets': (value.outAssets.map(AssetDiffToJSON)),
        'counterparties': value.counterparties,
        'priceData': PriceDataToJSON(value.priceData),
        'showTotalFiat': value.showTotalFiat,
        'validation': BlockaidValidationToJSON(value.validation),
        'assetExposures': value.assetExposures === undefined ? undefined : (value.assetExposures.map(AssetExposureToJSON)),
    };
}

export { SimulateTransactionResponseFromJSON, SimulateTransactionResponseFromJSONTyped, SimulateTransactionResponseToJSON };
