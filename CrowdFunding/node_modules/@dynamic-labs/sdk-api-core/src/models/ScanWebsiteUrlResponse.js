import { exists } from '../runtime.js';

/* tslint:disable */
function ScanWebsiteUrlResponseFromJSON(json) {
    return ScanWebsiteUrlResponseFromJSONTyped(json);
}
function ScanWebsiteUrlResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'isMalicious': !exists(json, 'isMalicious') ? undefined : json['isMalicious'],
    };
}
function ScanWebsiteUrlResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'isMalicious': value.isMalicious,
    };
}

export { ScanWebsiteUrlResponseFromJSON, ScanWebsiteUrlResponseFromJSONTyped, ScanWebsiteUrlResponseToJSON };
