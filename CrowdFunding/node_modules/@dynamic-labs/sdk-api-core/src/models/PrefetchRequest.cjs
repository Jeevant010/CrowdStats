'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ChainEnum = require('./ChainEnum.cjs');

/* tslint:disable */
function PrefetchRequestFromJSON(json) {
    return PrefetchRequestFromJSONTyped(json);
}
function PrefetchRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chain': ChainEnum.ChainEnumFromJSON(json['chain']),
        'publicWalletAddress': json['publicWalletAddress'],
    };
}
function PrefetchRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chain': ChainEnum.ChainEnumToJSON(value.chain),
        'publicWalletAddress': value.publicWalletAddress,
    };
}

exports.PrefetchRequestFromJSON = PrefetchRequestFromJSON;
exports.PrefetchRequestFromJSONTyped = PrefetchRequestFromJSONTyped;
exports.PrefetchRequestToJSON = PrefetchRequestToJSON;
