'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
    Filters a list of ProjectSettingsKyc objects and returns only those that have the 'enabled' property set to true.
    @param {ProjectSettingsKyc[] | undefined} kyc - A list of ProjectSettingsKyc objects to filter.
    @returns {ProjectSettingsKyc[]} - The list of ProjectSettingsKyc objects that have the 'enabled' property set to true.
*/
const getEnabledKYC = (kyc) => { var _a; return (_a = kyc === null || kyc === void 0 ? void 0 : kyc.filter(({ enabled }) => Boolean(enabled))) !== null && _a !== void 0 ? _a : []; };

exports.getEnabledKYC = getEnabledKYC;
