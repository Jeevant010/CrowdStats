'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtime = require('../runtime.cjs');
var CustomFieldType = require('./CustomFieldType.cjs');
var CustomFieldValidationRules = require('./CustomFieldValidationRules.cjs');
var KycFieldType = require('./KycFieldType.cjs');

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
        'type': !runtime.exists(json, 'type') ? undefined : KycFieldType.KycFieldTypeFromJSON(json['type']),
        'validationRules': !runtime.exists(json, 'validationRules') ? undefined : CustomFieldValidationRules.CustomFieldValidationRulesFromJSON(json['validationRules']),
        'validationType': !runtime.exists(json, 'validationType') ? undefined : CustomFieldType.CustomFieldTypeFromJSON(json['validationType']),
        'label': !runtime.exists(json, 'label') ? undefined : json['label'],
        'position': !runtime.exists(json, 'position') ? undefined : json['position'],
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
        'type': KycFieldType.KycFieldTypeToJSON(value.type),
        'validationRules': CustomFieldValidationRules.CustomFieldValidationRulesToJSON(value.validationRules),
        'validationType': CustomFieldType.CustomFieldTypeToJSON(value.validationType),
        'label': value.label,
        'position': value.position,
    };
}

exports.ProjectSettingsKycFromJSON = ProjectSettingsKycFromJSON;
exports.ProjectSettingsKycFromJSONTyped = ProjectSettingsKycFromJSONTyped;
exports.ProjectSettingsKycToJSON = ProjectSettingsKycToJSON;
