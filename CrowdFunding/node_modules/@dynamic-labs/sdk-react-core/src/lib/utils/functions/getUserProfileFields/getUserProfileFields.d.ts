import { ProjectSettingsKyc, UserFields } from '@dynamic-labs/sdk-api-core';
import { UserProfile } from '@dynamic-labs/types';
/**
 * Get editable user profile fields based on the project settings.
 * @param {ProjectSettingsKyc[]} projectSettings - The project settings KYC object array.
 * @returns {ProjectSettingsKyc[]} - The list of editable user profile fields based on project settings.
 */
export declare const getEditableUserProfileFields: (projectSettings?: ProjectSettingsKyc[]) => ProjectSettingsKyc[];
/**
 * Get non-editable user profile fields that exist in the user profile and are disabled in the project
 * @param {Object} options - The function options object.
 * @param {ProjectSettingsKyc[]} options.projectSettingsKyc - The project settings KYC object array.
 * @param {UserFields} options.user - The user profile object.
 * @returns {ProjectSettingsKyc[]} - The list of non-editable user profile fields based on project settings.
 */
export declare const getNonEditableUserProfileFields: ({ projectSettingsKyc, user, }: {
    projectSettingsKyc?: ProjectSettingsKyc[];
    user?: UserFields;
}) => ProjectSettingsKyc[];
/**
 * Get all user profile fields that exist in the user profile and are defined in the project
 * @param {Object} options - The function options object.
 * @param {ProjectSettingsKyc[]} options.projectSettingsKyc - The project settings KYC object array.
 * @param {UserProfile} options.user - The user profile object.
 * @returns {ProjectSettingsKyc[]} - The list of all user profile fields based on project settings.
 */
export declare const getUserProfileFields: ({ projectSettingsKyc, customFields, user, }: {
    projectSettingsKyc?: ProjectSettingsKyc[];
    customFields?: ProjectSettingsKyc[];
    user?: UserProfile;
}) => ProjectSettingsKyc[];
