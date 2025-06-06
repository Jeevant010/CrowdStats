export type EventTimeline<T extends string> = {
    clear: () => void;
    postEvent: (event: T) => void;
    /**
     * Checks if a specific event was fired within the given timeframe relative to the current time.
     *
     * @param {string} eventName - The name of the event to check.
     * @param {number} timeSince - The timeframe in milliseconds.
     * @returns {boolean} - Returns `true` if the event was fired within the given timeframe, otherwise `false`.
     */
    isEventRecent: (eventName: T, timeSince: number) => boolean;
};
/**
 * The EventTimeline is a utility that allows you to track the timeline of events
 * that occur in your application. It is useful to post events and query when
 * some event was last fired.
 */
export declare const createEventTimeline: <T extends string>() => EventTimeline<T>;
