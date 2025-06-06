import { exists } from '../runtime.js';
import { SdkViewSectionFromJSON, SdkViewSectionToJSON } from './SdkViewSection.js';
import { SdkViewTypeFromJSON, SdkViewTypeToJSON } from './SdkViewType.js';

/* tslint:disable */
function SdkViewFromJSON(json) {
    return SdkViewFromJSONTyped(json);
}
function SdkViewFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': SdkViewTypeFromJSON(json['type']),
        'sections': !exists(json, 'sections') ? undefined : (json['sections'].map(SdkViewSectionFromJSON)),
    };
}
function SdkViewToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': SdkViewTypeToJSON(value.type),
        'sections': value.sections === undefined ? undefined : (value.sections.map(SdkViewSectionToJSON)),
    };
}

export { SdkViewFromJSON, SdkViewFromJSONTyped, SdkViewToJSON };
