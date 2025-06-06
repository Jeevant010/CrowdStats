export declare enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    MUTE = 99
}
declare global {
    interface Window {
        enableTroubleshootMode: () => void;
        disableTroubleshootMode: () => void;
    }
}
export type Message = string | Error | unknown;
export type MessageQueueMessage = {
    level: LogLevel;
    message: Message;
    args: any[];
    stack?: string;
};
