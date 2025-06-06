'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PublishEventsEvents = require('./PublishEventsEvents.cjs');

/* tslint:disable */
function PublishEventsFromJSON(json) {
    return PublishEventsFromJSONTyped(json);
}
function PublishEventsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'events': (json['events'].map(PublishEventsEvents.PublishEventsEventsFromJSON)),
    };
}
function PublishEventsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'events': (value.events.map(PublishEventsEvents.PublishEventsEventsToJSON)),
    };
}

exports.PublishEventsFromJSON = PublishEventsFromJSON;
exports.PublishEventsFromJSONTyped = PublishEventsFromJSONTyped;
exports.PublishEventsToJSON = PublishEventsToJSON;
