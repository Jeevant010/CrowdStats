/// <reference types="node" />
import { Logger } from '@dynamic-labs/logger';
export declare const logger: Logger;
/**
 * Timeout ID for batching version checks.
 */
export declare let versionCheckTimeout: NodeJS.Timeout | null;
/**
 * Asserts that all `@dynamic-labs` packages are on the same version.
 * Throws an error with instructions if versions mismatch.
 *
 * @param {string} packageName - The name of the package to assert.
 * @param {string} version - The version of the package.
 */
export declare const assertPackageVersion: (packageName: string, version: string) => void;
export declare const clearPackageVersionState: () => void;
