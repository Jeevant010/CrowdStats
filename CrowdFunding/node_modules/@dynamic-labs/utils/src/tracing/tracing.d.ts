type Payload = string[];
/**
 * Creates a tracing utility with functions for logging and formatting
 * @returns Tracing utility object
 */
export declare const createTracing: () => {
    /**
     * Formats an object as a pretty-printed JSON string
     * @param object - The object to format
     * @returns JSON string representation of the object
     */
    formatObject: (object: Record<string, unknown>) => string;
    /**
     * Logs an event to the trace collection
     * @param scope - The scope/category of the event
     * @param args - String messages to include in the trace
     */
    logEvent: (scope: string, ...args: Payload) => void;
    /**
     * Formats and returns traces filtered by scope
     * @param scopes - Optional array of scopes to filter traces
     * @returns Formatted trace output as a string
     */
    packScopes: (scopes?: string[] | undefined) => string;
};
export declare const tracing: {
    /**
     * Formats an object as a pretty-printed JSON string
     * @param object - The object to format
     * @returns JSON string representation of the object
     */
    formatObject: (object: Record<string, unknown>) => string;
    /**
     * Logs an event to the trace collection
     * @param scope - The scope/category of the event
     * @param args - String messages to include in the trace
     */
    logEvent: (scope: string, ...args: Payload) => void;
    /**
     * Formats and returns traces filtered by scope
     * @param scopes - Optional array of scopes to filter traces
     * @returns Formatted trace output as a string
     */
    packScopes: (scopes?: string[] | undefined) => string;
};
export {};
