'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');

/* tslint:disable */
function SimulateEVMTransactionRequestFromJSON(json) {
    return SimulateEVMTransactionRequestFromJSONTyped(json);
}
function SimulateEVMTransactionRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainId': json['chainId'],
        'data': json['data'],
        'from': json['from'],
        'to': json['to'],
        'value': json['value'],
        'domain': !runtime.exists(json, 'domain') ? undefined : json['domain'],
    };
}
function SimulateEVMTransactionRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chainId': value.chainId,
        'data': value.data,
        'from': value.from,
        'to': value.to,
        'value': value.value,
        'domain': value.domain,
    };
}

exports.SimulateEVMTransactionRequestFromJSON = SimulateEVMTransactionRequestFromJSON;
exports.SimulateEVMTransactionRequestFromJSONTyped = SimulateEVMTransactionRequestFromJSONTyped;
exports.SimulateEVMTransactionRequestToJSON = SimulateEVMTransactionRequestToJSON;
