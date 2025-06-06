'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var AccountBalances = require('./AccountBalances.cjs');
var ExchangeKeyEnum = require('./ExchangeKeyEnum.cjs');

/* tslint:disable */
function AccountFromJSON(json) {
    return AccountFromJSONTyped(json);
}
function AccountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'exchange': ExchangeKeyEnum.ExchangeKeyEnumFromJSON(json['exchange']),
        'type': !runtime.exists(json, 'type') ? undefined : json['type'],
        'balances': (json['balances'].map(AccountBalances.AccountBalancesFromJSON)),
        'name': !runtime.exists(json, 'name') ? undefined : json['name'],
        'chain': !runtime.exists(json, 'chain') ? undefined : json['chain'],
    };
}
function AccountToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'exchange': ExchangeKeyEnum.ExchangeKeyEnumToJSON(value.exchange),
        'type': value.type,
        'balances': (value.balances.map(AccountBalances.AccountBalancesToJSON)),
        'name': value.name,
        'chain': value.chain,
    };
}

exports.AccountFromJSON = AccountFromJSON;
exports.AccountFromJSONTyped = AccountFromJSONTyped;
exports.AccountToJSON = AccountToJSON;
