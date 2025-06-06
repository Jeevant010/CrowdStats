'use client'
import { getUserProfileFields } from '../../../../functions/getUserProfileFields/getUserProfileFields.js';

// eslint-disable-next-line multiline-comment-style
/** This function is used to verify that an update request with modal is valid
 * @returns empty string if request is valid, a string with the error message otherwise
 */
const validateUpdateRequest = (fields, user, projectSettings) => {
    // Catch no fields
    if (!fields.length)
        return 'At least one field must be provided for editing';
    // Catch no user
    if (!user)
        return 'No signed-in user';
    // Catch field not set in dashboard
    const allUserFields = getUserProfileFields({
        customFields: projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.customFields,
        projectSettingsKyc: projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.kyc,
        user,
    });
    for (const field of fields) {
        // i.e. If any of the provided fields is not found in the project settings fields
        if (!allUserFields.find(({ name }) => name === field))
            return `Please ensure field "${field}" is enabled under "Configurations > Onboarding > Information capture" in your app's dashboard before using it with updateUserWithModal`;
    }
    return '';
};

export { validateUpdateRequest };
