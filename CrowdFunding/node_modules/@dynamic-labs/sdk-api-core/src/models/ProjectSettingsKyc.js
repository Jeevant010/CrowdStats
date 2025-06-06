import { exists } from '../runtime.js';
import { CustomFieldTypeFromJSON, CustomFieldTypeToJSON } from './CustomFieldType.js';
import { CustomFieldValidationRulesFromJSON, CustomFieldValidationRulesToJSON } from './CustomFieldValidationRules.js';
import { KycFieldTypeFromJSON, KycFieldTypeToJSON } from './KycFieldType.js';

/* tslint:disable */
function ProjectSettingsKycFromJSON(json) {
    return ProjectSettingsKycFromJSONTyped(json);
}
function ProjectSettingsKycFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'required': json['required'],
        'enabled': json['enabled'],
        'unique': json['unique'],
        'verify': json['verify'],
        'type': !exists(json, 'type') ? undefined : KycFieldTypeFromJSON(json['type']),
        'validationRules': !exists(json, 'validationRules') ? undefined : CustomFieldValidationRulesFromJSON(json['validationRules']),
        'validationType': !exists(json, 'validationType') ? undefined : CustomFieldTypeFromJSON(json['validationType']),
        'label': !exists(json, 'label') ? undefined : json['label'],
        'position': !exists(json, 'position') ? undefined : json['position'],
    };
}
function ProjectSettingsKycToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'required': value.required,
        'enabled': value.enabled,
        'unique': value.unique,
        'verify': value.verify,
        'type': KycFieldTypeToJSON(value.type),
        'validationRules': CustomFieldValidationRulesToJSON(value.validationRules),
        'validationType': CustomFieldTypeToJSON(value.validationType),
        'label': value.label,
        'position': value.position,
    };
}

export { ProjectSettingsKycFromJSON, ProjectSettingsKycFromJSONTyped, ProjectSettingsKycToJSON };
