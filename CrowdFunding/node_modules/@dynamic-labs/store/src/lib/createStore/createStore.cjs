'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Creates a store with the specified initial state and provides methods to manage and subscribe to the state.
 *
 * @template T - The type of the state object.
 * @param getInitialState - A function that returns the initial state object.
 * @returns An object that represents the store and provides methods to interact with the state.
 */
const createStore = (getInitialState) => {
    const subscriptions = new Set();
    let state = getInitialState();
    const notifySubscribers = () => {
        for (const subscription of subscriptions) {
            subscription(state);
        }
    };
    return {
        /**
         * Returns the initial state object.
         *
         * @returns The initial state object.
         */
        getInitialState: () => getInitialState(),
        /**
         * Returns the current state object.
         *
         * @returns The current state object.
         */
        getState: () => state,
        /**
         * Updates the state object with the provided partial state and notifies all subscribers.
         *
         * @param partialState - The partial state object to merge with the current state.
         */
        setState: (partialState) => {
            state = Object.assign(Object.assign({}, state), partialState);
            notifySubscribers();
        },
        /**
         * Subscribes to state changes and invokes the provided callback whenever the state is updated.
         *
         * @param subscription - A callback function that receives the updated state as a parameter.
         * @returns A function that can be called to unsubscribe from state changes.
         */
        subscribe: (subscription) => {
            subscriptions.add(subscription);
            return () => {
                subscriptions.delete(subscription);
            };
        },
    };
};

exports.createStore = createStore;
