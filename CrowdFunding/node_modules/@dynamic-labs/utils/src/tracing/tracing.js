'use client'
const formatTrace = (trace) => `
--- ${trace.scope} : ${trace.timestamp.toISOString()} ---
${trace.payload.join('\n')}
`.trim();
/**
 * Creates a tracing utility with functions for logging and formatting
 * @returns Tracing utility object
 */
const createTracing = () => {
    const traces = [];
    return {
        /**
         * Formats an object as a pretty-printed JSON string
         * @param object - The object to format
         * @returns JSON string representation of the object
         */
        formatObject: (object) => JSON.stringify(object, null, 2),
        /**
         * Logs an event to the trace collection
         * @param scope - The scope/category of the event
         * @param args - String messages to include in the trace
         */
        logEvent: (scope, ...args) => {
            traces.push({
                payload: args,
                scope,
                timestamp: new Date(),
            });
        },
        /**
         * Formats and returns traces filtered by scope
         * @param scopes - Optional array of scopes to filter traces
         * @returns Formatted trace output as a string
         */
        packScopes: (scopes) => traces
            .filter((trace) => (scopes ? scopes.includes(trace.scope) : true))
            .map(formatTrace)
            .join('\n\n'),
    };
};
const tracing = createTracing();

export { createTracing, tracing };
