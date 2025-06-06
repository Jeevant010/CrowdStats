export type EventTypes = Record<string, (...args: any[]) => any>;
/**
 * This type is a copy of the ArgumentMap type from eventemitter3 package.
 * Is used extract the arguments from a event type.
 * Then we can use the arguments to reconstruct the callback we want
 */
export type ArgumentMap<T extends EventTypes> = {
    [key in keyof T]: Parameters<T[key]>;
};
/**
 * Maps the event to its callback's arguments
 */
export type EventArgs<T extends EventTypes, Event extends keyof T> = ArgumentMap<T>[Extract<Event, keyof T>];
