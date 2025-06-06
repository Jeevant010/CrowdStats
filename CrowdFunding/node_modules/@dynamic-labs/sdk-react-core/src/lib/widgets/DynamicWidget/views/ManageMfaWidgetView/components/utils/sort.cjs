'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const sortDevices = (devices) => { var _a; return (_a = devices === null || devices === void 0 ? void 0 : devices.sort(sortDevicesByVerifiedDateDesc).sort(sortDevicesByDefault)) !== null && _a !== void 0 ? _a : []; };
const sortDevicesByVerifiedDateDesc = (a, b) => {
    // doing null check for createdAt to avoid runtime error even though it should never be null/undefined
    const dateA = a.verifiedAt ? new Date(a.verifiedAt).getTime() : 0;
    const dateB = b.verifiedAt ? new Date(b.verifiedAt).getTime() : 0;
    return dateA - dateB;
};
const sortDevicesByDefault = (a, b) => a._default === b._default ? 0 : a._default ? -1 : 1;

exports.sortDevices = sortDevices;
