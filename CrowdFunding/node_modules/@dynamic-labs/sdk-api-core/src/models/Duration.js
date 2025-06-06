import { TimeUnitEnumFromJSON, TimeUnitEnumToJSON } from './TimeUnitEnum.js';

/* tslint:disable */
function DurationFromJSON(json) {
    return DurationFromJSONTyped(json);
}
function DurationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': json['amount'],
        'unit': TimeUnitEnumFromJSON(json['unit']),
    };
}
function DurationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'unit': TimeUnitEnumToJSON(value.unit),
    };
}

export { DurationFromJSON, DurationFromJSONTyped, DurationToJSON };
