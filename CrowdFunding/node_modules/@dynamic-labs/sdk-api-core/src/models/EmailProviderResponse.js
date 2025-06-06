import { ProviderEnumFromJSON, ProviderEnumToJSON } from './ProviderEnum.js';

/* tslint:disable */
function EmailProviderResponseFromJSON(json) {
    return EmailProviderResponseFromJSONTyped(json);
}
function EmailProviderResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'emailProvider': ProviderEnumFromJSON(json['emailProvider']),
    };
}
function EmailProviderResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'emailProvider': ProviderEnumToJSON(value.emailProvider),
    };
}

export { EmailProviderResponseFromJSON, EmailProviderResponseFromJSONTyped, EmailProviderResponseToJSON };
