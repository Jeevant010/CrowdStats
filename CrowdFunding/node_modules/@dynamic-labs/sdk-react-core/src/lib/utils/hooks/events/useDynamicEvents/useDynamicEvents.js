'use client'
import { useRef, useEffect } from 'react';
import { externalEvents, dynamicEvents } from '../../../../events/dynamicEvents.js';

/** Allows us to subscribe to all dynamicEvents with a hook, even the internal ones */
const useInternalDynamicEvents = (event, listener) => {
    const handler = useRef(listener);
    handler.current = listener;
    useEffect(() => {
        const callback = (...args) => handler.current(...args);
        dynamicEvents.on(event, callback);
        return () => {
            dynamicEvents.off(event, callback);
        };
    }, [event]);
};
/** Allows subscribing to dynamic events directly inside components with a hook */
const useDynamicEvents = (event, listener) => {
    if (!externalEvents.includes(event))
        throw new Error(`Unrecognized event "${event}" used with useDynamicEvents`);
    useInternalDynamicEvents(event, listener);
};

export { useDynamicEvents, useInternalDynamicEvents };
