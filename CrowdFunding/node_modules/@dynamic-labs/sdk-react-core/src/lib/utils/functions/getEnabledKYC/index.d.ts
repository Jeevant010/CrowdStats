import { ProjectSettingsKyc } from '@dynamic-labs/sdk-api-core';
/**
    Filters a list of ProjectSettingsKyc objects and returns only those that have the 'enabled' property set to true.
    @param {ProjectSettingsKyc[] | undefined} kyc - A list of ProjectSettingsKyc objects to filter.
    @returns {ProjectSettingsKyc[]} - The list of ProjectSettingsKyc objects that have the 'enabled' property set to true.
*/
export declare const getEnabledKYC: (kyc: ProjectSettingsKyc[] | undefined) => ProjectSettingsKyc[];
