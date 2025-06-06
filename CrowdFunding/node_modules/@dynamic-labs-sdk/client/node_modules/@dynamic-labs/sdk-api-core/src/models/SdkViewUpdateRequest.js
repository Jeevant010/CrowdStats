import { exists } from '../runtime.js';
import { SdkViewSectionFromJSON, SdkViewSectionToJSON } from './SdkViewSection.js';

/* tslint:disable */
function SdkViewUpdateRequestFromJSON(json) {
    return SdkViewUpdateRequestFromJSONTyped(json);
}
function SdkViewUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'sections': !exists(json, 'sections') ? undefined : (json['sections'].map(SdkViewSectionFromJSON)),
    };
}
function SdkViewUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sections': value.sections === undefined ? undefined : (value.sections.map(SdkViewSectionToJSON)),
    };
}

export { SdkViewUpdateRequestFromJSON, SdkViewUpdateRequestFromJSONTyped, SdkViewUpdateRequestToJSON };
