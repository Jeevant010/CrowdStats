import { exists } from '../runtime.js';
import { PasswordSourceTypeEnumFromJSON, PasswordSourceTypeEnumToJSON } from './PasswordSourceTypeEnum.js';

/* tslint:disable */
function CoinbaseMpcWalletPropertiesFromJSON(json) {
    return CoinbaseMpcWalletPropertiesFromJSONTyped(json);
}
function CoinbaseMpcWalletPropertiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'claimed': !exists(json, 'claimed') ? undefined : json['claimed'],
        'source': !exists(json, 'source') ? undefined : PasswordSourceTypeEnumFromJSON(json['source']),
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
        'source': PasswordSourceTypeEnumToJSON(value.source),
    };
}

export { CoinbaseMpcWalletPropertiesFromJSON, CoinbaseMpcWalletPropertiesFromJSONTyped, CoinbaseMpcWalletPropertiesToJSON };
