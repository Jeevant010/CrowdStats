import { exists } from '../runtime.js';
import { FundingExternalWalletsFromJSON, FundingExternalWalletsToJSON } from './FundingExternalWallets.js';
import { OnrampProvidersFromJSON, OnrampProvidersToJSON } from './OnrampProviders.js';

/* tslint:disable */
function FundingFromJSON(json) {
    return FundingFromJSONTyped(json);
}
function FundingFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'onramps': (json['onramps'].map(OnrampProvidersFromJSON)),
        'externalWallets': !exists(json, 'externalWallets') ? undefined : FundingExternalWalletsFromJSON(json['externalWallets']),
    };
}
function FundingToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'onramps': (value.onramps.map(OnrampProvidersToJSON)),
        'externalWallets': FundingExternalWalletsToJSON(value.externalWallets),
    };
}

export { FundingFromJSON, FundingFromJSONTyped, FundingToJSON };
