'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var CurrencyType = require('./CurrencyType.cjs');

/* tslint:disable */
function CurrencyFromJSON(json) {
    return CurrencyFromJSONTyped(json);
}
function CurrencyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'symbol': json['symbol'],
        'type': CurrencyType.CurrencyTypeFromJSON(json['type']),
        'code': json['code'],
        'value': json['value'],
    };
}
function CurrencyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'symbol': value.symbol,
        'type': CurrencyType.CurrencyTypeToJSON(value.type),
        'code': value.code,
        'value': value.value,
    };
}

exports.CurrencyFromJSON = CurrencyFromJSON;
exports.CurrencyFromJSONTyped = CurrencyFromJSONTyped;
exports.CurrencyToJSON = CurrencyToJSON;
