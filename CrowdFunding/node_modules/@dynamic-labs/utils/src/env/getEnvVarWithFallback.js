'use client'
/**
 * Safely gets an environment variable with a required fallback value
 * @param keys Single key or array of keys to try in order
 * @param defaultValue Required default value if none of the keys are found
 * @returns The first found environment variable value or the default value
 */
const getEnvVarWithFallback = (keys, defaultValue) => {
    if (typeof process === 'undefined' || !process.env) {
        return defaultValue;
    }
    const keysToTry = Array.isArray(keys) ? keys : [keys];
    for (const key of keysToTry) {
        const value = process.env[key];
        if (value !== undefined) {
            return value;
        }
    }
    return defaultValue;
};

export { getEnvVarWithFallback };
