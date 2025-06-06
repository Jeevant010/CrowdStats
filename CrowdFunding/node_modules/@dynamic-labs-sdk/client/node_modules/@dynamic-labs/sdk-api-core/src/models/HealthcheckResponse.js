import { HealthcheckStatusFromJSON, HealthcheckStatusToJSON } from './HealthcheckStatus.js';

/* tslint:disable */
function HealthcheckResponseFromJSON(json) {
    return HealthcheckResponseFromJSONTyped(json);
}
function HealthcheckResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'status': HealthcheckStatusFromJSON(json['status']),
    };
}
function HealthcheckResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'status': HealthcheckStatusToJSON(value.status),
    };
}

export { HealthcheckResponseFromJSON, HealthcheckResponseFromJSONTyped, HealthcheckResponseToJSON };
