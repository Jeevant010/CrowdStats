'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function SimulateSVMTransactionRequestFromJSON(json) {
    return SimulateSVMTransactionRequestFromJSONTyped(json);
}
function SimulateSVMTransactionRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chain': json['chain'],
        'transactions': json['transactions'],
        'accountAddress': json['accountAddress'],
        'domain': !runtime.exists(json, 'domain') ? undefined : json['domain'],
        'method': json['method'],
    };
}
function SimulateSVMTransactionRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chain': value.chain,
        'transactions': value.transactions,
        'accountAddress': value.accountAddress,
        'domain': value.domain,
        'method': value.method,
    };
}

exports.SimulateSVMTransactionRequestFromJSON = SimulateSVMTransactionRequestFromJSON;
exports.SimulateSVMTransactionRequestFromJSONTyped = SimulateSVMTransactionRequestFromJSONTyped;
exports.SimulateSVMTransactionRequestToJSON = SimulateSVMTransactionRequestToJSON;
