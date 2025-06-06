import { exists } from '../runtime.js';
import { SdkViewFromJSON, SdkViewToJSON } from './SdkView.js';

/* tslint:disable */
function SdkViewsResponseFromJSON(json) {
    return SdkViewsResponseFromJSONTyped(json);
}
function SdkViewsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'sdkViews': !exists(json, 'sdkViews') ? undefined : (json['sdkViews'].map(SdkViewFromJSON)),
    };
}
function SdkViewsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sdkViews': value.sdkViews === undefined ? undefined : (value.sdkViews.map(SdkViewToJSON)),
    };
}

export { SdkViewsResponseFromJSON, SdkViewsResponseFromJSONTyped, SdkViewsResponseToJSON };
