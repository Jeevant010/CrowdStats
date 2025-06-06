import { PublishEventsEventsFromJSON, PublishEventsEventsToJSON } from './PublishEventsEvents.js';

/* tslint:disable */
function PublishEventsFromJSON(json) {
    return PublishEventsFromJSONTyped(json);
}
function PublishEventsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'events': (json['events'].map(PublishEventsEventsFromJSON)),
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
        'events': (value.events.map(PublishEventsEventsToJSON)),
    };
}

export { PublishEventsFromJSON, PublishEventsFromJSONTyped, PublishEventsToJSON };
