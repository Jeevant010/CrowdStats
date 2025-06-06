import { IPlatformEventsService } from './types';
export declare class PlatformEventsService {
    #private;
    static get implementation(): IPlatformEventsService;
    static set implementation(implementation: IPlatformEventsService | undefined);
    static get on(): <T extends "appFocused">(event: T, fn: (...args: import("eventemitter3").EventEmitter.ArgumentMap<import("./types").IPlatformEvents>[Extract<T, "appFocused">]) => void, context?: any) => import("eventemitter3").EventEmitter<import("./types").IPlatformEvents, any>;
    static get off(): <T extends "appFocused">(event: T, fn?: ((...args: import("eventemitter3").EventEmitter.ArgumentMap<import("./types").IPlatformEvents>[Extract<T, "appFocused">]) => void) | undefined, context?: any, once?: boolean | undefined) => import("eventemitter3").EventEmitter<import("./types").IPlatformEvents, any>;
    static get once(): <T extends "appFocused">(event: T, fn: (...args: import("eventemitter3").EventEmitter.ArgumentMap<import("./types").IPlatformEvents>[Extract<T, "appFocused">]) => void, context?: any) => import("eventemitter3").EventEmitter<import("./types").IPlatformEvents, any>;
}
