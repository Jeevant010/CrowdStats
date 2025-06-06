'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var PasswordSourceTypeEnum = require('./PasswordSourceTypeEnum.cjs');

/* tslint:disable */
function CoinbaseMpcWalletPropertiesFromJSON(json) {
    return CoinbaseMpcWalletPropertiesFromJSONTyped(json);
}
function CoinbaseMpcWalletPropertiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'claimed': !runtime.exists(json, 'claimed') ? undefined : json['claimed'],
        'source': !runtime.exists(json, 'source') ? undefined : PasswordSourceTypeEnum.PasswordSourceTypeEnumFromJSON(json['source']),
    };
}
function CoinbaseMpcWalletPropertiesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'claimed': value.claimed,
        'source': PasswordSourceTypeEnum.PasswordSourceTypeEnumToJSON(value.source),
    };
}

exports.CoinbaseMpcWalletPropertiesFromJSON = CoinbaseMpcWalletPropertiesFromJSON;
exports.CoinbaseMpcWalletPropertiesFromJSONTyped = CoinbaseMpcWalletPropertiesFromJSONTyped;
exports.CoinbaseMpcWalletPropertiesToJSON = CoinbaseMpcWalletPropertiesToJSON;
