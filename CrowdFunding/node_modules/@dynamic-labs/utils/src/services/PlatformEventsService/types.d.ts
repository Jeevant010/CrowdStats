import EventEmitter from 'eventemitter3';
export type IPlatformEvents = {
    appFocused: () => void;
};
export type IPlatformEventsService = Pick<EventEmitter<IPlatformEvents>, 'on' | 'off' | 'once'>;
