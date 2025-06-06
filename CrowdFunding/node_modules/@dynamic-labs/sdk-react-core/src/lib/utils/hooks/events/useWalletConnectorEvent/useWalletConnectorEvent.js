'use client'
import { useRef, useEffect } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Hook for handling events from a WalletConnector or an array of WalletConnectors.
 * This hook allows you to specify an event to listen to and a handler function that will be called
 * whenever the event is emitted. The handler will receive the event arguments followed by the instance
 * of the WalletConnector that emitted the event.
 *
 * @template Event - The type of the event to listen for, which should be a key of WalletConnectorEventTypes.
 *
 * @param eventEmitters - The WalletConnector instance(s) to attach the event listener to.
 * If an array is provided, the event listener is attached to all provided connectors.
 * @param eventName - The name of the event to listen for.
 * @param handler - The callback function to execute when the event is emitted.
 * The arguments to the callback are the arguments emitted with the event, followed by the WalletConnector instance
 * that emitted the event.
 *
 * @returns {void} This hook does not return anything.
 *
 * @example
 * // Example usage of useWalletConnectorEvent
 * const { primaryWallet } = useDynamicContext();
 *
 * useWalletConnectorEvent(
 *   primaryWallet?.connector,
 *   'accountChange',
 *   ({ accounts }, connector) => {
 *     console.group('accountChange');
 *     console.log('accounts', accounts);
 *     console.log('connector that emitted', connector);
 *     console.groupEnd();
 *   },
 * );
 */
const useWalletConnectorEvent = (eventEmitters, eventName, handler) => {
    const callbackRef = useRef(handler);
    callbackRef.current = handler;
    useEffect(() => {
        if (!eventEmitters)
            return;
        const eventEmittersArray = Array.isArray(eventEmitters)
            ? eventEmitters
            : [eventEmitters];
        /**
         * Initialize the event listeners for the wallet connectors
         * to ensure they were initialized before listening to events
         */
        eventEmittersArray.forEach((connector) => connector.initEventListener());
        const uniqueEventEmitters = Array.from(new Set(eventEmittersArray));
        const unsubscribeCallbacks = uniqueEventEmitters.map((emitter) => {
            const callback = (...args) => {
                callbackRef.current(...args, emitter);
            };
            emitter.on(eventName, callback);
            return () => emitter.off(eventName, callback);
        });
        return () => unsubscribeCallbacks.forEach((unsubscribe) => unsubscribe());
    }, [eventEmitters, eventName]);
};

export { useWalletConnectorEvent };
