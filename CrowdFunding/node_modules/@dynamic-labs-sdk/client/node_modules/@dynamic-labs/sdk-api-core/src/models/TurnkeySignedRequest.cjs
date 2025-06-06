'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TurnkeyStamp = require('./TurnkeyStamp.cjs');

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
        'stamp': TurnkeyStamp.TurnkeyStampFromJSON(json['stamp']),
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
        'stamp': TurnkeyStamp.TurnkeyStampToJSON(value.stamp),
        'url': value.url,
    };
}

exports.TurnkeySignedRequestFromJSON = TurnkeySignedRequestFromJSON;
exports.TurnkeySignedRequestFromJSONTyped = TurnkeySignedRequestFromJSONTyped;
exports.TurnkeySignedRequestToJSON = TurnkeySignedRequestToJSON;
