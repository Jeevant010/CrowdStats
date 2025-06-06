'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var dynamicEvents = require('../../../../events/dynamicEvents.cjs');

/** Allows us to subscribe to all dynamicEvents with a hook, even the internal ones */
const useInternalDynamicEvents = (event, listener) => {
    const handler = React.useRef(listener);
    handler.current = listener;
    React.useEffect(() => {
        const callback = (...args) => handler.current(...args);
        dynamicEvents.dynamicEvents.on(event, callback);
        return () => {
            dynamicEvents.dynamicEvents.off(event, callback);
        };
    }, [event]);
};
/** Allows subscribing to dynamic events directly inside components with a hook */
const useDynamicEvents = (event, listener) => {
    if (!dynamicEvents.externalEvents.includes(event))
        throw new Error(`Unrecognized event "${event}" used with useDynamicEvents`);
    useInternalDynamicEvents(event, listener);
};

exports.useDynamicEvents = useDynamicEvents;
exports.useInternalDynamicEvents = useInternalDynamicEvents;
