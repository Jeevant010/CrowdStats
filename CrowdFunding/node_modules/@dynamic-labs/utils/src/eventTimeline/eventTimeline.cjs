'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * The EventTimeline is a utility that allows you to track the timeline of events
 * that occur in your application. It is useful to post events and query when
 * some event was last fired.
 */
const createEventTimeline = () => {
    // Map to store event names and their corresponding timestamps
    const eventTimelines = new Map();
    return {
        clear: () => {
            eventTimelines.clear();
        },
        isEventRecent: (eventName, timeSince) => {
            const now = Date.now();
            let timestamps = eventTimelines.get(eventName);
            if (!timestamps) {
                return false;
            }
            const cutoff = now - timeSince;
            // Remove timestamps older than the cutoff time
            timestamps = timestamps.filter((timestamp) => timestamp >= cutoff);
            // Check if there are any timestamps within the timeframe
            return timestamps.length > 0;
        },
        postEvent: (event) => {
            var _a;
            const now = Date.now();
            if (!eventTimelines.has(event)) {
                eventTimelines.set(event, []);
            }
            (_a = eventTimelines.get(event)) === null || _a === void 0 ? void 0 : _a.push(now);
        },
    };
};

exports.createEventTimeline = createEventTimeline;
