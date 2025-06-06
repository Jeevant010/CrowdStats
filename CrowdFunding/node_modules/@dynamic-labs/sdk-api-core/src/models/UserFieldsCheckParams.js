import { UserFieldsCheckEnumFromJSON, UserFieldsCheckEnumToJSON } from './UserFieldsCheckEnum.js';

/* tslint:disable */
function UserFieldsCheckParamsFromJSON(json) {
    return UserFieldsCheckParamsFromJSONTyped(json);
}
function UserFieldsCheckParamsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'field': UserFieldsCheckEnumFromJSON(json['field']),
        'value': json['value'],
    };
}
function UserFieldsCheckParamsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'field': UserFieldsCheckEnumToJSON(value.field),
        'value': value.value,
    };
}

export { UserFieldsCheckParamsFromJSON, UserFieldsCheckParamsFromJSONTyped, UserFieldsCheckParamsToJSON };
