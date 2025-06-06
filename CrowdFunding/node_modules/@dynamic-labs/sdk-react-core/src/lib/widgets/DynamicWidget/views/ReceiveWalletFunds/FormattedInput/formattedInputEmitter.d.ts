import EventEmitter from 'eventemitter3';
export type FormattedInputEvents = {
    focus: () => void;
};
export declare const createFormattedInputEmitter: () => EventEmitter<FormattedInputEvents, any>;
