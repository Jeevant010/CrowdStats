import { MESSAGE_HANDLER } from '../../types';
export declare const createMessageHandler: <T extends Record<string, MESSAGE_HANDLER>>(parentOrigin: string) => <K extends Extract<keyof T, string>>(eventName: K, handler: T[K]) => void;
