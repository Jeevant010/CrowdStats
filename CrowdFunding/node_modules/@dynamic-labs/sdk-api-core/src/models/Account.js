import { exists } from '../runtime.js';
import { AccountBalancesFromJSON, AccountBalancesToJSON } from './AccountBalances.js';
import { ExchangeKeyEnumFromJSON, ExchangeKeyEnumToJSON } from './ExchangeKeyEnum.js';

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
        'exchange': ExchangeKeyEnumFromJSON(json['exchange']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'balances': (json['balances'].map(AccountBalancesFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'chain': !exists(json, 'chain') ? undefined : json['chain'],
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
        'exchange': ExchangeKeyEnumToJSON(value.exchange),
        'type': value.type,
        'balances': (value.balances.map(AccountBalancesToJSON)),
        'name': value.name,
        'chain': value.chain,
    };
}

export { AccountFromJSON, AccountFromJSONTyped, AccountToJSON };
