import { exists } from '../runtime.js';
import { WalletAddressTypeFromJSON, WalletAddressTypeToJSON } from './WalletAddressType.js';

/* tslint:disable */
function WalletAdditionalAddressFromJSON(json) {
    return WalletAdditionalAddressFromJSONTyped(json);
}
function WalletAdditionalAddressFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'publicKey': !exists(json, 'publicKey') ? undefined : json['publicKey'],
        'type': WalletAddressTypeFromJSON(json['type']),
    };
}
function WalletAdditionalAddressToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'publicKey': value.publicKey,
        'type': WalletAddressTypeToJSON(value.type),
    };
}

export { WalletAdditionalAddressFromJSON, WalletAdditionalAddressFromJSONTyped, WalletAdditionalAddressToJSON };
