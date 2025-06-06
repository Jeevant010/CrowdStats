import { ChainEnumFromJSON, ChainEnumToJSON } from './ChainEnum.js';

/* tslint:disable */
function PrefetchRequestFromJSON(json) {
    return PrefetchRequestFromJSONTyped(json);
}
function PrefetchRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chain': ChainEnumFromJSON(json['chain']),
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
        'chain': ChainEnumToJSON(value.chain),
        'publicWalletAddress': value.publicWalletAddress,
    };
}

export { PrefetchRequestFromJSON, PrefetchRequestFromJSONTyped, PrefetchRequestToJSON };
