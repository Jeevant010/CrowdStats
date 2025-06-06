'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var FundingExternalWallets = require('./FundingExternalWallets.cjs');
var OnrampProviders = require('./OnrampProviders.cjs');

/* tslint:disable */
function FundingFromJSON(json) {
    return FundingFromJSONTyped(json);
}
function FundingFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'onramps': (json['onramps'].map(OnrampProviders.OnrampProvidersFromJSON)),
        'externalWallets': !runtime.exists(json, 'externalWallets') ? undefined : FundingExternalWallets.FundingExternalWalletsFromJSON(json['externalWallets']),
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
        'onramps': (value.onramps.map(OnrampProviders.OnrampProvidersToJSON)),
        'externalWallets': FundingExternalWallets.FundingExternalWalletsToJSON(value.externalWallets),
    };
}

exports.FundingFromJSON = FundingFromJSON;
exports.FundingFromJSONTyped = FundingFromJSONTyped;
exports.FundingToJSON = FundingToJSON;
