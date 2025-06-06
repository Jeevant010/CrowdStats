import { TurnkeyStampFromJSON, TurnkeyStampToJSON } from './TurnkeyStamp.js';

/* tslint:disable */
function TurnkeySignedRequestFromJSON(json) {
    return TurnkeySignedRequestFromJSONTyped(json);
}
function TurnkeySignedRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'body': json['body'],
        'stamp': TurnkeyStampFromJSON(json['stamp']),
        'url': json['url'],
    };
}
function TurnkeySignedRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'body': value.body,
        'stamp': TurnkeyStampToJSON(value.stamp),
        'url': value.url,
    };
}

export { TurnkeySignedRequestFromJSON, TurnkeySignedRequestFromJSONTyped, TurnkeySignedRequestToJSON };
