import { exists } from '../runtime.js';
import { CustomFieldValidValueFromJSON, CustomFieldValidValueToJSON } from './CustomFieldValidValue.js';

/* tslint:disable */
function CustomFieldValidationRulesFromJSON(json) {
    return CustomFieldValidationRulesFromJSONTyped(json);
}
function CustomFieldValidationRulesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'unique': !exists(json, 'unique') ? undefined : json['unique'],
        'regex': !exists(json, 'regex') ? undefined : json['regex'],
        'validOptions': !exists(json, 'validOptions') ? undefined : (json['validOptions'].map(CustomFieldValidValueFromJSON)),
        'checkboxText': !exists(json, 'checkboxText') ? undefined : json['checkboxText'],
    };
}
function CustomFieldValidationRulesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'unique': value.unique,
        'regex': value.regex,
        'validOptions': value.validOptions === undefined ? undefined : (value.validOptions.map(CustomFieldValidValueToJSON)),
        'checkboxText': value.checkboxText,
    };
}

export { CustomFieldValidationRulesFromJSON, CustomFieldValidationRulesFromJSONTyped, CustomFieldValidationRulesToJSON };
