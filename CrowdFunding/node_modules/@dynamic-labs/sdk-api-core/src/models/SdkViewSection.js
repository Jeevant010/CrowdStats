import { exists } from '../runtime.js';
import { SdkViewSectionAlignmentFromJSON, SdkViewSectionAlignmentToJSON } from './SdkViewSectionAlignment.js';
import { SdkViewSectionTypeFromJSON, SdkViewSectionTypeToJSON } from './SdkViewSectionType.js';

/* tslint:disable */
function SdkViewSectionFromJSON(json) {
    return SdkViewSectionFromJSONTyped(json);
}
function SdkViewSectionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': SdkViewSectionTypeFromJSON(json['type']),
        'label': !exists(json, 'label') ? undefined : json['label'],
        'numOfItemsToDisplay': !exists(json, 'numOfItemsToDisplay') ? undefined : json['numOfItemsToDisplay'],
        'defaultItem': !exists(json, 'defaultItem') ? undefined : json['defaultItem'],
        'alignment': !exists(json, 'alignment') ? undefined : SdkViewSectionAlignmentFromJSON(json['alignment']),
    };
}
function SdkViewSectionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': SdkViewSectionTypeToJSON(value.type),
        'label': value.label,
        'numOfItemsToDisplay': value.numOfItemsToDisplay,
        'defaultItem': value.defaultItem,
        'alignment': SdkViewSectionAlignmentToJSON(value.alignment),
    };
}

export { SdkViewSectionFromJSON, SdkViewSectionFromJSONTyped, SdkViewSectionToJSON };
