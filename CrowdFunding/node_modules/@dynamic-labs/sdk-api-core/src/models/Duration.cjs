'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TimeUnitEnum = require('./TimeUnitEnum.cjs');

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
        'unit': TimeUnitEnum.TimeUnitEnumFromJSON(json['unit']),
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
        'unit': TimeUnitEnum.TimeUnitEnumToJSON(value.unit),
    };
}

exports.DurationFromJSON = DurationFromJSON;
exports.DurationFromJSONTyped = DurationFromJSONTyped;
exports.DurationToJSON = DurationToJSON;
