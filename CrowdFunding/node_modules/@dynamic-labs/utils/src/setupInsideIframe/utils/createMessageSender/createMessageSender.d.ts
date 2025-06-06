import { MESSAGE_HANDLER } from '../../types';
export declare const createMessageSender: <T extends Record<string, MESSAGE_HANDLER>>(parentOrigin: string) => <EVENT_NAME extends Extract<keyof T, string>>(eventName: EVENT_NAME, ...args: Parameters<T[EVENT_NAME]>) => void;
