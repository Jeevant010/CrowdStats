import { TurnkeySignedRequestFromJSON, TurnkeySignedRequestToJSON } from './TurnkeySignedRequest.js';

/* tslint:disable */
function UpdateRecoveryEmailRequestFromJSON(json) {
    return UpdateRecoveryEmailRequestFromJSONTyped(json);
}
function UpdateRecoveryEmailRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'turnkeySignedRequest': TurnkeySignedRequestFromJSON(json['turnkeySignedRequest']),
    };
}
function UpdateRecoveryEmailRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'turnkeySignedRequest': TurnkeySignedRequestToJSON(value.turnkeySignedRequest),
    };
}

export { UpdateRecoveryEmailRequestFromJSON, UpdateRecoveryEmailRequestFromJSONTyped, UpdateRecoveryEmailRequestToJSON };
