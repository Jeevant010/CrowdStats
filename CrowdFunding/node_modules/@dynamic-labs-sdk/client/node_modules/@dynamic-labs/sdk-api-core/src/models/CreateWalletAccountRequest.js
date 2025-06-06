import { TurnkeySignedRequestFromJSON, TurnkeySignedRequestToJSON } from './TurnkeySignedRequest.js';

/* tslint:disable */
function CreateWalletAccountRequestFromJSON(json) {
    return CreateWalletAccountRequestFromJSONTyped(json);
}
function CreateWalletAccountRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'turnkeySignedRequest': TurnkeySignedRequestFromJSON(json['turnkeySignedRequest']),
    };
}
function CreateWalletAccountRequestToJSON(value) {
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

export { CreateWalletAccountRequestFromJSON, CreateWalletAccountRequestFromJSONTyped, CreateWalletAccountRequestToJSON };
