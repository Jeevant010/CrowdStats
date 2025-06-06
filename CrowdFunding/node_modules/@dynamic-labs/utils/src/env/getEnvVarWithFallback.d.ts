/**
 * Safely gets an environment variable with a required fallback value
 * @param keys Single key or array of keys to try in order
 * @param defaultValue Required default value if none of the keys are found
 * @returns The first found environment variable value or the default value
 */
export declare const getEnvVarWithFallback: (keys: string | string[], defaultValue: string) => string;
