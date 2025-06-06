'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var logger$1 = require('@dynamic-labs/logger');

/**
 * A mapping of package names to their versions.
 */
let packageVersions = {};
const logger = new logger$1.Logger('@dynamic-labs/assert-package-version');
/**
 * Timeout ID for batching version checks.
 */
exports.versionCheckTimeout = null;
/**
 * Asserts that all `@dynamic-labs` packages are on the same version.
 * Throws an error with instructions if versions mismatch.
 *
 * @param {string} packageName - The name of the package to assert.
 * @param {string} version - The version of the package.
 */
const assertPackageVersion = (packageName, version) => {
    // Update the package version mapping
    packageVersions[packageName] = version;
    // Clear any existing timeout
    if (exports.versionCheckTimeout) {
        clearTimeout(exports.versionCheckTimeout);
        exports.versionCheckTimeout = null;
    }
    /**
     * Timeout is set to 100ms to ensure the following:
     * - All package versions have been imported and registered.
     * - The environmentId is set in the logger so the error can be captured in DD
     */
    const timeout = 100;
    /**
     * Set a timeout to batch the version check.
     * This ensures that the check is executed after all package versions have been imported
     * and registered.
     */
    exports.versionCheckTimeout = setTimeout(() => {
        const versions = Object.values(packageVersions);
        const [firstVersion] = versions;
        const allSameVersion = versions.every((v) => v === firstVersion);
        if (!allSameVersion) {
            // Determine the required (target) version
            const targetVersion = packageVersions['@dynamic-labs/sdk-react-core'] || firstVersion;
            const errorMessage = getErrorMessage(targetVersion);
            logger.error(new Error(errorMessage));
        }
        exports.versionCheckTimeout = null;
    }, timeout);
};
const getErrorMessage = (targetVersion) => {
    // Identify packages with mismatched versions
    const affectedPackages = Object.entries(packageVersions)
        .filter(([, v]) => v !== targetVersion)
        .map(([pkgName, installedVersion]) => `- \`${pkgName}\` (installed: **${installedVersion}**, required: **${targetVersion}**)`)
        .join('\n');
    // Error message template
    const errorMessage = `
🚨 Version Mismatch Error

One or more \`@dynamic-labs\` packages are installed with mismatched versions. All \`@dynamic-labs\` packages must be on the same version to work correctly.

Affected Packages:
${affectedPackages}

💡 To fix this issue, update all @dynamic-labs/* packages to version \`${targetVersion}\` in your package.json
💡 Tip: You can use the \`npx dynamic-doctor run\` command to check for other issues with your project setup.
`;
    return errorMessage.trim();
};

exports.assertPackageVersion = assertPackageVersion;
exports.logger = logger;
