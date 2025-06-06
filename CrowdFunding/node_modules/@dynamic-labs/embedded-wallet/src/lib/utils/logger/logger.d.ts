import { LogLevel, Logger, Message } from '@dynamic-labs/logger';
export declare class DynamicEmbeddedWalletsLogger extends Logger {
    constructor(name: string | string[], level?: LogLevel);
    error(message: Message, ...args: any[]): void;
}
export declare const logger: DynamicEmbeddedWalletsLogger;
